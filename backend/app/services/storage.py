"""文件存储抽象层：支持本地存储和七牛云存储"""

import os
import uuid
from abc import ABC, abstractmethod
from typing import Optional

from fastapi import UploadFile

from app.config import settings


class StorageBackend(ABC):
    """文件存储抽象基类"""

    @abstractmethod
    async def save(self, file: UploadFile) -> str:
        """保存文件，返回可用于下载的 URL/路径"""
        ...

    @abstractmethod
    async def delete(self, file_path: str) -> bool:
        """删除文件"""
        ...

    @abstractmethod
    async def get(self, file_path: str) -> Optional[bytes]:
        """获取文件内容"""
        ...


class LocalStorage(StorageBackend):
    """本地文件系统存储"""

    def __init__(self, upload_dir: str = None):
        self.upload_dir = upload_dir or settings.UPLOAD_DIR
        os.makedirs(self.upload_dir, exist_ok=True)

    async def save(self, file: UploadFile) -> str:
        # 生成唯一文件名防止冲突
        ext = ""
        if file.filename and "." in file.filename:
            ext = "." + file.filename.rsplit(".", 1)[-1].lower()
        unique_name = f"{uuid.uuid4().hex}{ext}"

        file_path = os.path.join(self.upload_dir, unique_name)
        content = await file.read()
        with open(file_path, "wb") as f:
            f.write(content)

        # 返回相对下载路径（对应 GET /files/{filename} 路由）
        return f"/files/{unique_name}"

    async def delete(self, file_path: str) -> bool:
        # file_path 格式如 /files/xxxx.pdf，需要提取文件名
        filename = file_path.split("/")[-1] if "/" in file_path else file_path
        full_path = os.path.join(self.upload_dir, filename)
        if os.path.exists(full_path):
            os.remove(full_path)
            return True
        return False

    async def get(self, file_path: str) -> Optional[bytes]:
        filename = file_path.split("/")[-1] if "/" in file_path else file_path
        full_path = os.path.join(self.upload_dir, filename)
        if os.path.exists(full_path):
            with open(full_path, "rb") as f:
                return f.read()
        return None


class QiniuStorage(StorageBackend):
    """七牛云对象存储"""

    def __init__(self):
        try:
            import qiniu
            self.qiniu = qiniu
            self.auth = qiniu.Auth(settings.QINIU_ACCESS_KEY, settings.QINIU_SECRET_KEY)
            self.bucket = settings.QINIU_BUCKET
            self.domain = settings.QINIU_DOMAIN
        except ImportError:
            raise RuntimeError("请安装 qiniu SDK: pip install qiniu")

    def get_upload_token(self, key: str = None, expires: int = 3600) -> str:
        """获取七牛云上传凭证"""
        return self.auth.upload_token(self.bucket, key, expires)

    async def save(self, file: UploadFile) -> str:
        from qiniu import put_data

        ext = ""
        if file.filename and "." in file.filename:
            ext = "." + file.filename.rsplit(".", 1)[-1].lower()
        key = f"rdms/{uuid.uuid4().hex}{ext}"

        token = self.get_upload_token(key)
        content = await file.read()
        ret, info = put_data(token, key, content)

        if info.status_code != 200:
            raise RuntimeError(f"七牛云上传失败: {info}")

        return f"{self.domain}/{key}"

    async def delete(self, file_path: str) -> bool:
        from qiniu import BucketManager

        bucket_mgr = BucketManager(self.auth)
        # 从 URL 中提取 key
        key = file_path.replace(f"{self.domain}/", "") if self.domain in file_path else file_path
        ret, info = bucket_mgr.delete(self.bucket, key)
        return info.status_code == 200

    async def get(self, file_path: str) -> Optional[bytes]:
        import urllib.request
        try:
            with urllib.request.urlopen(file_path) as response:
                return response.read()
        except Exception:
            return None


# ============ 工厂函数 ============

_storage_instance: Optional[StorageBackend] = None


def get_storage() -> StorageBackend:
    """获取存储后端实例（单例）"""
    global _storage_instance
    if _storage_instance is None:
        if settings.STORAGE_BACKEND == "qiniu":
            _storage_instance = QiniuStorage()
        else:
            _storage_instance = LocalStorage()
    return _storage_instance

"""七牛云上传 Token 路由（对应前端 src/api/qiniu.js）"""

from fastapi import APIRouter
from app.config import settings
from app.utils.response import success_response, error_response

router = APIRouter()


@router.get("/qiniu/upload/token")
async def get_qiniu_token():
    """获取七牛云上传凭证"""
    if settings.STORAGE_BACKEND != "qiniu":
        return error_response(50001, "当前未启用七牛云存储")

    try:
        from app.services.storage import QiniuStorage
        qiniu_storage = QiniuStorage()
        token = qiniu_storage.get_upload_token()
        return success_response({"token": token})
    except Exception as e:
        return error_response(50000, f"获取上传凭证失败: {str(e)}")

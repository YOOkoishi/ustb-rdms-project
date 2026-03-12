"""文件管理路由"""

import os
from typing import Optional

from fastapi import APIRouter, Depends, UploadFile, File as FastAPIFile
from fastapi.responses import FileResponse
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.config import settings
from app.dependencies import get_db, require_admin
from app.models.user import User
from app.models.file import FileRecord
from app.schemas.file import (
    FileCreate, FileUpdate, FilePatch,
    FileOut, FileListOut, FileViewOut,
)
from app.utils.response import success_response, error_response

router = APIRouter()


@router.get("/file/files/")
async def get_file_list(db: AsyncSession = Depends(get_db)):
    """获取文件列表"""
    result = await db.execute(select(FileRecord).order_by(FileRecord.file_idx))
    files = result.scalars().all()
    return success_response([FileOut.model_validate(f).model_dump() for f in files])


@router.post("/file/upload/")
async def upload_file(body: FileCreate, db: AsyncSession = Depends(get_db), _: User = Depends(require_admin)):
    """
    上传文件（JSON body 方式，兼容前端 mock 行为）。
    如果需要上传真实文件，使用 POST /file/upload-multipart/
    """
    file_record = FileRecord(
        file_name=body.file_name,
        file_type=body.file_type or "",
        file_size=body.file_size or 0,
        file_ownership_idx=body.file_ownership_idx,
        file_download_url=body.file_download_url or "",
        file_content=body.file_content or "",
        file_remark=body.file_remark or "",
    )
    db.add(file_record)
    await db.flush()
    await db.refresh(file_record)
    return success_response(FileOut.model_validate(file_record).model_dump())


@router.post("/file/upload-multipart/")
async def upload_file_multipart(
    file: UploadFile = FastAPIFile(...),
    file_ownership_idx: Optional[int] = None,
    file_remark: str = "",
    db: AsyncSession = Depends(get_db),
    _: User = Depends(require_admin),
):
    """
    上传真实文件（multipart/form-data）。
    文件保存到本地或云存储，自动创建数据库记录。
    """
    from app.services.storage import get_storage

    storage = get_storage()
    saved_path = await storage.save(file)

    # 获取文件大小
    file.file.seek(0, 2)
    file_size = file.file.tell()
    file.file.seek(0)

    # 推断文件类型
    file_type = ""
    if file.filename:
        ext = file.filename.rsplit(".", 1)[-1].lower() if "." in file.filename else ""
        file_type = ext

    file_record = FileRecord(
        file_name=file.filename or "unnamed",
        file_type=file_type,
        file_size=file_size,
        file_ownership_idx=file_ownership_idx,
        file_download_url=saved_path,
        file_content="",
        file_remark=file_remark,
    )
    db.add(file_record)
    await db.flush()
    await db.refresh(file_record)
    return success_response(FileOut.model_validate(file_record).model_dump())


@router.put("/file/files/{file_idx}/")
async def update_file(file_idx: int, body: FileUpdate, db: AsyncSession = Depends(get_db), _: User = Depends(require_admin)):
    """更新文件信息"""
    result = await db.execute(select(FileRecord).where(FileRecord.file_idx == file_idx))
    file_record = result.scalar_one_or_none()
    if not file_record:
        return error_response(50001, "文件不存在")

    update_data = body.model_dump(exclude_none=True, exclude={"file_idx"})
    for key, value in update_data.items():
        setattr(file_record, key, value)

    await db.flush()
    await db.refresh(file_record)
    return success_response(FileOut.model_validate(file_record).model_dump())


@router.patch("/file/files/{file_idx}/")
async def patch_file(file_idx: int, body: FilePatch, db: AsyncSession = Depends(get_db), _: User = Depends(require_admin)):
    """部分更新文件（如 file_download_url 或 file_ownership_idx）"""
    result = await db.execute(select(FileRecord).where(FileRecord.file_idx == file_idx))
    file_record = result.scalar_one_or_none()
    if not file_record:
        return error_response(50001, "文件不存在")

    update_data = body.model_dump(exclude_none=True)
    for key, value in update_data.items():
        setattr(file_record, key, value)

    await db.flush()
    await db.refresh(file_record)
    return success_response(FileOut.model_validate(file_record).model_dump())


@router.delete("/file/files/{file_idx}/")
async def delete_file(file_idx: int, db: AsyncSession = Depends(get_db), _: User = Depends(require_admin)):
    """删除文件"""
    result = await db.execute(select(FileRecord).where(FileRecord.file_idx == file_idx))
    file_record = result.scalar_one_or_none()
    if not file_record:
        return error_response(50001, "文件不存在")

    # 尝试删除物理文件
    if file_record.file_download_url:
        try:
            from app.services.storage import get_storage
            storage = get_storage()
            await storage.delete(file_record.file_download_url)
        except Exception:
            pass  # 物理文件不存在也不影响数据库记录删除

    await db.delete(file_record)
    return success_response("success")


@router.get("/file/files/{file_idx}")
async def get_file_content(file_idx: int, db: AsyncSession = Depends(get_db)):
    """获取文件详情（含 file_content）"""
    result = await db.execute(select(FileRecord).where(FileRecord.file_idx == file_idx))
    file_record = result.scalar_one_or_none()
    if not file_record:
        return error_response(50001, "文件不存在")

    return success_response(FileOut.model_validate(file_record).model_dump())


@router.get("/file/filelist")
async def get_file_view_list(db: AsyncSession = Depends(get_db)):
    """文件浏览列表"""
    result = await db.execute(select(FileRecord).order_by(FileRecord.file_idx))
    files = result.scalars().all()
    return success_response([FileOut.model_validate(f).model_dump() for f in files])


@router.get("/file/fileview/{file_idx}")
async def get_file_view(file_idx: int, db: AsyncSession = Depends(get_db)):
    """获取文件预览内容"""
    result = await db.execute(select(FileRecord).where(FileRecord.file_idx == file_idx))
    file_record = result.scalar_one_or_none()
    if not file_record:
        return error_response(50001, "文件不存在")

    return success_response({
        "file_name": file_record.file_name,
        "file_type": file_record.file_type,
        "file_content": file_record.file_content or "",
    })


@router.get("/files/{file_path:path}")
async def download_file(file_path: str):
    """下载文件（本地存储）"""
    full_path = os.path.join(settings.UPLOAD_DIR, file_path)
    if not os.path.exists(full_path):
        return error_response(50001, "文件不存在")

    return FileResponse(
        path=full_path,
        filename=os.path.basename(file_path),
    )

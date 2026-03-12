from typing import Optional
from pydantic import BaseModel


class FileCreate(BaseModel):
    file_name: str
    file_type: Optional[str] = ""
    file_size: Optional[int] = 0
    file_ownership_idx: Optional[int] = None
    file_download_url: Optional[str] = ""
    file_content: Optional[str] = ""
    file_remark: Optional[str] = ""


class FileUpdate(BaseModel):
    file_idx: Optional[int] = None
    file_name: Optional[str] = None
    file_type: Optional[str] = None
    file_size: Optional[int] = None
    file_ownership_idx: Optional[int] = None
    file_download_url: Optional[str] = None
    file_content: Optional[str] = None
    file_remark: Optional[str] = None


class FilePatch(BaseModel):
    """部分更新，用于 PATCH 请求"""
    file_download_url: Optional[str] = None
    file_ownership_idx: Optional[int] = None
    file_content: Optional[str] = None
    file_remark: Optional[str] = None


class FileOut(BaseModel):
    file_idx: int
    file_name: str
    file_type: Optional[str] = ""
    file_size: Optional[int] = 0
    file_ownership_idx: Optional[int] = None
    file_download_url: Optional[str] = ""
    file_content: Optional[str] = ""
    file_remark: Optional[str] = ""

    model_config = {"from_attributes": True}


class FileListOut(BaseModel):
    """文件列表项（不含 file_content）"""
    file_idx: int
    file_name: str
    file_type: Optional[str] = ""
    file_size: Optional[int] = 0
    file_ownership_idx: Optional[int] = None
    file_download_url: Optional[str] = ""
    file_remark: Optional[str] = ""

    model_config = {"from_attributes": True}


class FileViewOut(BaseModel):
    """文件预览"""
    file_name: str
    file_type: Optional[str] = ""
    file_content: Optional[str] = ""

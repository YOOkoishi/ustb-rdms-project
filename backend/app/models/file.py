from sqlalchemy import Column, Integer, String, Text, ForeignKey
from app.database import Base


class FileRecord(Base):
    __tablename__ = "files"

    file_idx = Column(Integer, primary_key=True, autoincrement=True)
    file_name = Column(String(300), nullable=False)
    file_type = Column(String(50), nullable=True, default="")
    file_size = Column(Integer, nullable=True, default=0)
    file_ownership_idx = Column(
        Integer,
        ForeignKey("devices.device_idx", ondelete="SET NULL"),
        nullable=True,
    )
    file_download_url = Column(String(500), nullable=True, default="")
    file_content = Column(Text, nullable=True, default="")  # 文本预览内容
    file_remark = Column(Text, nullable=True, default="")

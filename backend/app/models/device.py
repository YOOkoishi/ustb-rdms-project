from sqlalchemy import Column, Integer, String, Float, Text, JSON
from app.database import Base


class Device(Base):
    __tablename__ = "devices"

    device_idx = Column(Integer, primary_key=True, autoincrement=True)
    device_name = Column(String(200), nullable=False)
    device_type = Column(String(100), nullable=True, default="")
    device_manager_idx = Column(JSON, nullable=True, default=[])  # 管理人员ID数组
    location_name = Column(String(200), nullable=True, default="")
    location_address = Column(String(500), nullable=True, default="")
    max_tube_voltage_kv = Column(Float, nullable=True)
    max_tube_current_ma = Column(Float, nullable=True)
    device_QR_code = Column(String(500), nullable=True, default="")
    device_remark = Column(Text, nullable=True, default="")
    device_img = Column(String(500), nullable=True, default="")

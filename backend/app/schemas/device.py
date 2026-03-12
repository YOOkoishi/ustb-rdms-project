from typing import Optional, List
from pydantic import BaseModel


class DeviceCreate(BaseModel):
    device_name: str
    device_type: Optional[str] = ""
    device_manager_idx: Optional[List[int]] = []
    location_name: Optional[str] = ""
    location_address: Optional[str] = ""
    max_tube_voltage_kv: Optional[float] = None
    max_tube_current_ma: Optional[float] = None
    device_QR_code: Optional[str] = ""
    device_remark: Optional[str] = ""
    device_img: Optional[str] = ""


class DeviceUpdate(BaseModel):
    device_idx: Optional[int] = None
    device_name: Optional[str] = None
    device_type: Optional[str] = None
    device_manager_idx: Optional[List[int]] = None
    location_name: Optional[str] = None
    location_address: Optional[str] = None
    max_tube_voltage_kv: Optional[float] = None
    max_tube_current_ma: Optional[float] = None
    device_QR_code: Optional[str] = None
    device_remark: Optional[str] = None
    device_img: Optional[str] = None


class DeviceOut(BaseModel):
    device_idx: int
    device_name: str
    device_type: Optional[str] = ""
    device_manager_idx: Optional[List[int]] = []
    location_name: Optional[str] = ""
    location_address: Optional[str] = ""
    max_tube_voltage_kv: Optional[float] = None
    max_tube_current_ma: Optional[float] = None
    device_QR_code: Optional[str] = ""
    device_remark: Optional[str] = ""
    device_img: Optional[str] = ""

    model_config = {"from_attributes": True}

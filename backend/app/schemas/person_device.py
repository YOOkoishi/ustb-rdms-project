from typing import Optional
from pydantic import BaseModel


class PersonDeviceCreate(BaseModel):
    person_idx: int
    person_name: Optional[str] = ""
    device_idx: int
    device_name: Optional[str] = ""
    responsibility: Optional[str] = ""


class PersonDeviceOut(BaseModel):
    id: int
    person_idx: int
    person_name: Optional[str] = ""
    device_idx: int
    device_name: Optional[str] = ""
    responsibility: Optional[str] = ""

    model_config = {"from_attributes": True}

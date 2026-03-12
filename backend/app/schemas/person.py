from typing import Optional
from pydantic import BaseModel


class PersonCreate(BaseModel):
    person_name: str
    person_phone: Optional[str] = ""
    person_email: Optional[str] = ""
    person_department: Optional[str] = ""
    person_remark: Optional[str] = ""


class PersonUpdate(BaseModel):
    person_name: Optional[str] = None
    person_phone: Optional[str] = None
    person_email: Optional[str] = None
    person_department: Optional[str] = None
    person_remark: Optional[str] = None


class PersonOut(BaseModel):
    person_idx: int
    person_name: str
    person_phone: Optional[str] = ""
    person_email: Optional[str] = ""
    person_department: Optional[str] = ""
    person_remark: Optional[str] = ""

    model_config = {"from_attributes": True}

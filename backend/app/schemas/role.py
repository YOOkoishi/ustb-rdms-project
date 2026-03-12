from typing import Optional, List, Any
from pydantic import BaseModel


class RoleCreate(BaseModel):
    key: str
    name: str
    description: Optional[str] = ""
    routes: Optional[List[Any]] = []


class RoleUpdate(BaseModel):
    key: Optional[str] = None
    name: Optional[str] = None
    description: Optional[str] = None
    routes: Optional[List[Any]] = None


class RoleOut(BaseModel):
    key: str
    name: str
    description: Optional[str] = ""
    routes: Optional[List[Any]] = []

    model_config = {"from_attributes": True}

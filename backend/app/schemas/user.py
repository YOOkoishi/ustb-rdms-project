from typing import Optional, List
from pydantic import BaseModel


class LoginRequest(BaseModel):
    username: str
    password: str


class LoginResponse(BaseModel):
    token: str


class UserInfo(BaseModel):
    roles: List[str]
    name: str
    avatar: str
    introduction: str

"""统一响应模型，匹配前端 { code: 20000, data: ... } 约定"""

from typing import Any, Optional
from pydantic import BaseModel


class ApiResponse(BaseModel):
    code: int = 20000
    data: Any = None
    message: str = "success"


def success_response(data: Any = None) -> dict:
    return {"code": 20000, "data": data}


def error_response(code: int, message: str) -> dict:
    return {"code": code, "message": message}

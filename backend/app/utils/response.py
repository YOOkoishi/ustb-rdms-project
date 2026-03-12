"""统一响应工具函数"""

from typing import Any


def success_response(data: Any = None) -> dict:
    return {"code": 20000, "data": data}


def error_response(code: int = 50000, message: str = "Error") -> dict:
    return {"code": code, "message": message}

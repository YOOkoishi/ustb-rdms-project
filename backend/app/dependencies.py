"""公共依赖注入"""

from typing import Optional

from fastapi import Depends, Header, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.database import async_session
from app.models.user import User
from app.services.auth import decode_access_token


async def get_db():
    """获取数据库会话"""
    async with async_session() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise


async def get_current_user(
    x_token: Optional[str] = Header(None, alias="X-Token"),
) -> Optional[User]:
    """
    从 X-Token Header 中获取当前用户。
    如果 Token 无效或不存在，返回 None（某些公开接口不强制认证）。
    """
    if not x_token:
        return None

    payload = decode_access_token(x_token)
    if not payload:
        return None

    user_id = payload.get("sub")
    if not user_id:
        return None

    async with async_session() as session:
        result = await session.execute(
            select(User).where(User.id == int(user_id))
        )
        return result.scalar_one_or_none()


async def require_auth(
    x_token: str = Header(..., alias="X-Token"),
) -> User:
    """
    强制认证依赖，Token 无效则返回 50008 错误。
    """
    if not x_token:
        raise HTTPException(status_code=200, detail={"code": 50008, "message": "Token 不存在"})

    payload = decode_access_token(x_token)
    if not payload:
        raise HTTPException(status_code=200, detail={"code": 50008, "message": "非法 Token"})

    user_id = payload.get("sub")
    if not user_id:
        raise HTTPException(status_code=200, detail={"code": 50008, "message": "非法 Token"})

    async with async_session() as session:
        result = await session.execute(
            select(User).where(User.id == int(user_id))
        )
        user = result.scalar_one_or_none()

    if not user:
        raise HTTPException(status_code=200, detail={"code": 50008, "message": "用户不存在"})

    return user


async def require_admin(
    current_user: User = Depends(require_auth),
) -> User:
    """
    管理员权限依赖，仅 roles 含 'admin' 的用户可通过。
    普通用户（如 editor）调用写接口时返回 403 权限不足。
    """
    if not current_user.roles or "admin" not in current_user.roles:
        raise HTTPException(
            status_code=200,
            detail={"code": 40003, "message": "权限不足，仅管理员可执行此操作"},
        )
    return current_user

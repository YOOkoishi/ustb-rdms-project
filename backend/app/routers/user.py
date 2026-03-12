"""用户认证路由：登录 / 获取信息 / 登出"""

from fastapi import APIRouter, Depends, Response
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.dependencies import get_db
from app.models.user import User
from app.schemas.user import LoginRequest
from app.services.auth import verify_password, create_access_token
from app.utils.response import success_response, error_response

router = APIRouter()


@router.post("/vue-element-admin/user/login")
async def login(body: LoginRequest, response: Response, db: AsyncSession = Depends(get_db)):
    """登录：验证用户名密码，返回 JWT Token"""
    result = await db.execute(select(User).where(User.username == body.username))
    user = result.scalar_one_or_none()

    if not user or not verify_password(body.password, user.password_hash):
        return error_response(60204, "账号或密码错误")

    # 生成 JWT Token
    token = create_access_token(data={"sub": str(user.id)})

    # 将 token 写入数据库（方便通过 token 查用户）
    user.token = token
    await db.flush()

    # 设置 csrftoken cookie（兼容前端 getCsrfToken()）
    response.set_cookie(key="csrftoken", value=token[:32], httponly=False, samesite="lax")

    return success_response({"token": token})


@router.get("/vue-element-admin/user/info")
async def get_user_info(token: str, db: AsyncSession = Depends(get_db)):
    """获取用户信息：根据 token query param 查询"""
    from app.services.auth import decode_access_token

    payload = decode_access_token(token)
    if not payload:
        return error_response(50008, "登录失败，无法获取用户信息")

    user_id = payload.get("sub")
    if not user_id:
        return error_response(50008, "登录失败，无法获取用户信息")

    result = await db.execute(select(User).where(User.id == int(user_id)))
    user = result.scalar_one_or_none()

    if not user:
        return error_response(50008, "登录失败，无法获取用户信息")

    return success_response({
        "roles": user.roles or ["editor"],
        "name": user.name,
        "avatar": user.avatar,
        "introduction": user.introduction,
    })


@router.post("/vue-element-admin/user/logout")
async def logout(response: Response):
    """登出"""
    response.delete_cookie("csrftoken")
    return success_response("success")

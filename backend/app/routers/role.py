"""角色与路由管理"""

from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.dependencies import get_db
from app.models.role import Role
from app.schemas.role import RoleCreate, RoleOut
from app.utils.response import success_response, error_response

router = APIRouter()

# ============ 前端路由定义（从 mock/_routes.js 转换） ============

CONSTANT_ROUTES = [
    {
        "path": "/redirect",
        "component": "Layout",
        "meta": {"hidden": True},
        "children": [
            {
                "path": "/redirect/:path(.*)",
                "component": "views/redirect/index",
                "meta": {"hidden": True},
            }
        ],
    },
    {"path": "/login", "component": "views/login/index", "meta": {"hidden": True}},
    {"path": "/auth-redirect", "component": "views/login/auth-redirect", "meta": {"hidden": True}},
    {"path": "/404", "component": "views/error-page/404", "meta": {"hidden": True}},
    {"path": "/401", "component": "views/error-page/401", "meta": {"hidden": True}},
    {
        "path": "/",
        "component": "Layout",
        "redirect": "/dashboard",
        "children": [
            {
                "path": "dashboard",
                "name": "Dashboard",
                "component": "views/dashboard/index",
                "meta": {"title": "首页", "icon": "dashboard", "affix": True},
            }
        ],
    },
    {
        "path": "/device_info",
        "component": "Layout",
        "children": [
            {
                "path": "index",
                "name": "DeviceInfo",
                "component": "views/device_info/index",
                "meta": {"title": "设备信息", "icon": "el-icon-cpu"},
            }
        ],
    },
    {
        "path": "/person_info",
        "component": "Layout",
        "children": [
            {
                "path": "index",
                "name": "PersonInfo",
                "component": "views/person_info/index",
                "meta": {"title": "人员信息", "icon": "peoples"},
            }
        ],
    },
    {
        "path": "/person_device",
        "component": "Layout",
        "children": [
            {
                "path": "index",
                "name": "PersonDevice",
                "component": "views/person_device/index",
                "meta": {"title": "负责人-设备", "icon": "el-icon-connection"},
            }
        ],
    },
    {
        "path": "/file",
        "component": "Layout",
        "redirect": "/file/index",
        "name": "File",
        "meta": {"title": "文件", "icon": "documentation"},
        "children": [
            {
                "path": "index",
                "name": "FileIndex",
                "component": "views/file/index",
                "meta": {"title": "文件管理"},
            },
            {
                "path": "readfile",
                "name": "ReadFile",
                "component": "views/file/readfile",
                "meta": {"title": "文件查看"},
            },
        ],
    },
    {
        "path": "/profile",
        "component": "Layout",
        "redirect": "/profile/index",
        "meta": {"hidden": True},
        "children": [
            {
                "path": "index",
                "name": "Profile",
                "component": "views/profile/index",
                "meta": {"title": "个人中心", "icon": "user", "noCache": True},
            }
        ],
    },
]

ASYNC_ROUTES = [
    {
        "path": "/permission",
        "component": "Layout",
        "redirect": "/permission/page",
        "name": "Permission",
        "alwaysShow": True,
        "meta": {"title": "Permission", "icon": "lock", "roles": ["admin", "editor"]},
        "children": [
            {
                "path": "page",
                "component": "views/permission/page",
                "name": "PagePermission",
                "meta": {"title": "Page Permission", "roles": ["admin"]},
            },
            {
                "path": "directive",
                "component": "views/permission/directive",
                "name": "DirectivePermission",
                "meta": {"title": "Directive Permission"},
            },
            {
                "path": "role",
                "component": "views/permission/role",
                "name": "RolePermission",
                "meta": {"title": "Role Permission", "roles": ["admin"]},
            },
        ],
    },
    {"path": "/:pathMatch(.*)*", "redirect": "/404", "meta": {"hidden": True}},
]

ALL_ROUTES = CONSTANT_ROUTES + ASYNC_ROUTES


@router.get("/vue-element-admin/routes")
async def get_routes():
    """获取所有前端路由定义"""
    return success_response(ALL_ROUTES)


@router.get("/vue-element-admin/roles")
async def get_roles(db: AsyncSession = Depends(get_db)):
    """获取所有角色"""
    result = await db.execute(select(Role).order_by(Role.id))
    roles = result.scalars().all()
    return success_response([RoleOut.model_validate(r).model_dump() for r in roles])


@router.post("/vue-element-admin/role")
async def add_role(body: RoleCreate, db: AsyncSession = Depends(get_db)):
    """新增角色"""
    role = Role(
        key=body.key,
        name=body.name,
        description=body.description or "",
        routes=body.routes or [],
    )
    db.add(role)
    await db.flush()
    await db.refresh(role)
    return success_response({"key": role.key})


@router.get("/vue-element-admin/role/getUserInfo")
async def get_role_info(id: int = 0, db: AsyncSession = Depends(get_db)):
    """查询角色信息（按 id）"""
    result = await db.execute(select(Role).where(Role.id == id))
    role = result.scalar_one_or_none()
    if role:
        return success_response(RoleOut.model_validate(role).model_dump())
    return success_response({"status": "success"})


@router.post("/vue-element-admin/role/deleteUser")
async def delete_role(body: dict, db: AsyncSession = Depends(get_db)):
    """删除角色"""
    user_id = body.get("userId")
    if user_id:
        result = await db.execute(select(Role).where(Role.id == int(user_id)))
        role = result.scalar_one_or_none()
        if role:
            await db.delete(role)
    return success_response({"status": "success"})

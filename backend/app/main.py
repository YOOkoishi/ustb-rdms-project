"""RDMS 辐射设备管理系统 — FastAPI 后端主入口"""

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.staticfiles import StaticFiles

from app.config import settings
from app.database import init_db

# 导入所有路由
from app.routers import user, device, person, person_device, file, role, qiniu


@asynccontextmanager
async def lifespan(app: FastAPI):
    """应用生命周期：启动时初始化数据库"""
    await init_db()
    yield


app = FastAPI(
    title="RDMS 辐射设备管理系统",
    description="学校辐射设备管理系统后端 API",
    version="1.0.0",
    lifespan=lifespan,
    # 关闭自动重定向尾部斜杠，保持与前端 URL 完全匹配
    redirect_slashes=False,
)

# ============ CORS 配置 ============
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

# ============ 注册路由 ============
app.include_router(user.router, tags=["认证"])
app.include_router(device.router, tags=["设备管理"])
app.include_router(person.router, tags=["人员管理"])
app.include_router(person_device.router, tags=["人员-设备关联"])
app.include_router(file.router, tags=["文件管理"])
app.include_router(role.router, tags=["角色与路由"])
app.include_router(qiniu.router, tags=["七牛云存储"])

# ============ 静态文件（本地文件下载） ============
import os
os.makedirs(settings.UPLOAD_DIR, exist_ok=True)
app.mount("/files", StaticFiles(directory=settings.UPLOAD_DIR), name="uploaded_files")


# ============ 根路径 ============
@app.get("/")
async def root():
    return {
        "name": "RDMS 辐射设备管理系统 API",
        "version": "1.0.0",
        "docs": "/docs",
    }

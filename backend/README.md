# RDMS 辐射设备管理系统 — 后端

基于 **FastAPI + SQLAlchemy + SQLite** 的后端 API 服务。

## 快速开始

### 1. 安装依赖

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. 初始化数据库并填充种子数据

```bash
python seed.py
```

这会创建 `rdms.db` 数据库并写入初始数据（设备、人员、文件等）。

### 3. 启动开发服务器

```bash
uvicorn app.main:app --reload --port 8000
```

### 4. 访问 API 文档

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## 默认账号

| 用户名 | 密码 | 角色 |
|--------|------|------|
| admin | admin123 | 管理员 |
| editor | editor123 | 编辑者 |

## 项目结构

```
backend/
├── app/
│   ├── main.py            # FastAPI 入口
│   ├── config.py          # 配置（读取 .env）
│   ├── database.py        # SQLAlchemy 异步引擎
│   ├── dependencies.py    # 公共依赖（认证等）
│   ├── models/            # ORM 模型
│   ├── schemas/           # Pydantic 请求/响应模型
│   ├── routers/           # API 路由
│   ├── services/          # 业务逻辑（认证、存储）
│   └── utils/             # 工具函数
├── uploads/               # 本地文件存储
├── alembic/               # 数据库迁移
├── seed.py                # 种子数据
├── requirements.txt
├── .env                   # 环境配置
└── README.md
```

## API 端点总览

### 认证
- `POST /vue-element-admin/user/login` — 登录
- `GET /vue-element-admin/user/info?token=` — 获取用户信息
- `POST /vue-element-admin/user/logout` — 登出

### 设备管理
- `GET /device/devices/` — 设备列表
- `POST /device/devices/` — 新增设备
- `PUT /device/devices/{id}/` — 更新设备
- `DELETE /device/devices/{id}/` — 删除设备
- `GET /device/persondevice` — 设备负责人关系

### 人员管理
- `GET /person/persons` — 人员列表
- `POST /person/persons/` — 新增人员
- `PUT /person/persons/{id}/` — 更新人员
- `DELETE /person/persons/{id}/` — 删除人员

### 人员-设备关联
- `GET /person_device/relations` — 关联列表
- `POST /person_device/relations/` — 新增关联
- `DELETE /person_device/relations/{id}/` — 删除关联

### 文件管理
- `GET /file/files/` — 文件列表
- `POST /file/upload/` — 上传文件（JSON）
- `POST /file/upload-multipart/` — 上传文件（真实文件）
- `PUT /file/files/{id}/` — 更新文件
- `PATCH /file/files/{id}/` — 部分更新
- `DELETE /file/files/{id}/` — 删除文件
- `GET /file/files/{id}` — 文件详情
- `GET /file/filelist` — 文件浏览列表
- `GET /file/fileview/{id}` — 文件预览
- `GET /files/{filename}` — 下载文件

### 角色管理
- `GET /vue-element-admin/routes` — 前端路由
- `GET /vue-element-admin/roles` — 角色列表
- `POST /vue-element-admin/role` — 新增角色

## 文件存储

默认使用本地存储。如需切换到七牛云，修改 `.env`：

```env
STORAGE_BACKEND=qiniu
QINIU_ACCESS_KEY=your_key
QINIU_SECRET_KEY=your_secret
QINIU_BUCKET=your_bucket
QINIU_DOMAIN=https://cdn.example.com
```

## 数据库迁移

```bash
# 生成迁移
alembic revision --autogenerate -m "描述"

# 执行迁移
alembic upgrade head
```

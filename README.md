# RDMS 辐射设备管理系统

基于 **Vue 3 + FastAPI** 的辐射设备管理系统，支持设备档案、人员管理、文件管理及权限控制。

---

## 目录

- [系统架构](#系统架构)
- [环境要求](#环境要求)
- [部署与启动](#部署与启动)
  - [一、后端部署](#一后端部署)
  - [二、前端部署](#二前端部署)
- [账号说明](#账号说明)
- [添加用户](#添加用户)
- [功能模块](#功能模块)
- [权限说明](#权限说明)
- [项目结构](#项目结构)

---

## 系统架构

```
┌─────────────────────────┐        ┌─────────────────────────┐
│   前端  (Vue 3 + Vite)   │  HTTP  │  后端 (FastAPI + SQLite) │
│   http://localhost:8001  │◄──────►│   http://localhost:8000  │
└─────────────────────────┘        └─────────────────────────┘
```

- **前端**：Vue 3 / TypeScript / Element Plus，运行在 `8001` 端口
- **后端**：FastAPI / SQLAlchemy / SQLite，运行在 `8000` 端口
- 前端开发服务器通过 Vite Proxy 将 API 请求透明转发到后端

---

## 环境要求

| 依赖 | 最低版本 | 说明 |
|------|---------|------|
| Node.js | 20.x | 前端运行环境 |
| Python | 3.10+ | 后端运行环境 |
| npm / pnpm | - | 前端包管理器 |

---

## 部署与启动

### 一、后端部署

#### 1. 进入后端目录

```bash
cd backend
```

#### 2. 创建并激活 Python 虚拟环境

```bash
python -m venv venv

# Linux / macOS
source venv/bin/activate

# Windows
venv\Scripts\activate
```

#### 3. 安装 Python 依赖

```bash
pip install -r requirements.txt
```

#### 4. 初始化数据库（首次部署必须执行）

```bash
python seed.py
```

> 此命令会创建 `rdms.db` 数据库，并写入默认账号和示例数据。  
> **⚠️ 重新执行会清空所有数据，生产环境请谨慎操作。**

#### 5. 启动后端服务

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

后端启动后可访问：
- API 文档（Swagger）：http://localhost:8000/docs
- API 文档（ReDoc）：http://localhost:8000/redoc

---

### 二、前端部署

#### 1. 回到项目根目录，安装前端依赖

```bash
cd ..          # 回到项目根目录
npm install    # 或使用 pnpm install
```

#### 2. 启动前端开发服务器

```bash
npm run start
```

前端启动后访问：**http://localhost:8001**

> `npm run start` 使用 `dev_backend` 模式，会自动将所有 API 请求通过 Vite Proxy 转发到 `http://localhost:8000`。  
> **请确保后端已提前启动，再启动前端。**

---

## 账号说明

系统内置两种角色，初始化数据库后自动创建以下账号：

| 用户名 | 密码 | 角色 | 权限描述 |
|--------|------|------|---------|
| `admin` | `admin123` | 管理员 | 读取 + 增删改 + 文件上传/删除 |
| `editor` | `editor123` | 普通用户 | 仅读取（查看设备信息和文件） |

**⚠️ 生产环境部署后请及时修改默认密码。**

---

## 添加用户

### 方法一：修改 seed.py（适合首次批量初始化）

打开 `backend/seed.py`，在 `users` 列表中添加新用户：

```python
users = [
    User(
        username="newuser",
        password_hash=hash_password("your_password"),
        roles=["admin"],   # 管理员填 ["admin"]，普通用户填 ["editor"]
        name="显示名称",
        introduction="简介",
    ),
]
```

修改后重新运行：

```bash
cd backend
source venv/bin/activate
python seed.py
```

> **⚠️ 此操作会重置整个数据库，已有数据将被清除。**

---

### 方法二：运行脚本写入（不影响现有数据）

在后端目录下执行以下命令，按需修改用户名、密码和角色：

```bash
cd backend
source venv/bin/activate

python -c "
import asyncio
from app.database import async_session
from app.models.user import User
from app.services.auth import hash_password

async def add_user():
    async with async_session() as session:
        user = User(
            username='newuser',
            password_hash=hash_password('your_password'),
            roles=['admin'],        # 管理员: ['admin']  普通用户: ['editor']
            name='用户显示名',
            introduction='',
        )
        session.add(user)
        await session.commit()
        print('用户添加成功:', user.username)

asyncio.run(add_user())
"
```

---

## 功能模块

| 模块 | 路径 | 说明 | 可见角色 |
|------|------|------|---------|
| 首页 | `/` | 数据统计概览、公告栏 | 全部 |
| 设备信息 | `/device_info` | 设备档案增删改查 | 全部（普通用户只读） |
| 人员信息 | `/person_info` | 人员档案增删改查 | 仅管理员 |
| 负责人-设备 | `/person_device` | 人员与设备关联关系管理 | 仅管理员 |
| 文件管理 | `/file` | 文件上传、编辑、删除 | 仅管理员 |
| 文件查看 | `/file/readfile` | 文件列表浏览、下载、预览 | 全部 |

---

## 权限说明

系统采用**前后端双层权限控制**：

**前端层**：
- 普通用户登录后，侧边栏自动隐藏"人员信息"、"负责人-设备"、"文件管理"三个入口
- 页面内"添加"、"编辑"、"删除"等写操作按钮对普通用户不可见

**后端层**：
- 所有写操作接口（POST / PUT / PATCH / DELETE）均要求请求方持有 `admin` 角色的 Token
- 普通用户即使绕过前端直接调用 API，后端也会返回 `code: 40003 权限不足`

---

## 项目结构

```
myversion/
├── src/                    # 前端源码
│   ├── api/                # API 请求封装
│   ├── views/              # 页面组件
│   │   ├── dashboard/      # 首页仪表盘
│   │   ├── device/         # 设备管理
│   │   ├── person/         # 人员管理
│   │   ├── person_device/  # 负责人-设备关系
│   │   └── file/           # 文件管理 & 查看
│   ├── router/             # 路由配置（含权限路由）
│   ├── store/              # Pinia 状态管理
│   ├── directive/          # 自定义指令（v-permission）
│   └── permission.ts       # 全局路由守卫
├── backend/                # 后端源码
│   ├── app/
│   │   ├── main.py         # FastAPI 应用入口
│   │   ├── config.py       # 配置项（可通过 .env 覆盖）
│   │   ├── dependencies.py # 认证依赖（require_auth / require_admin）
│   │   ├── models/         # SQLAlchemy ORM 数据模型
│   │   ├── routers/        # API 路由处理器
│   │   ├── schemas/        # Pydantic 请求/响应模型
│   │   └── services/       # 业务服务（认证、文件存储）
│   ├── uploads/            # 本地上传文件存储目录
│   ├── seed.py             # 数据库初始化脚本
│   ├── requirements.txt    # Python 依赖列表
│   └── rdms.db             # SQLite 数据库文件（自动生成）
├── package.json            # 前端依赖 & npm 脚本
└── vite.config.ts          # Vite 构建配置 & 代理设置
```

---

## License

MIT

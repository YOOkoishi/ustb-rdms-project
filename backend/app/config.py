from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    # 数据库
    DATABASE_URL: str = "sqlite+aiosqlite:///./rdms.db"

    # 安全
    SECRET_KEY: str = "rdms-super-secret-key-change-in-production-2024"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440  # 24小时

    # CORS
    CORS_ORIGINS: str = "http://localhost:8001,http://localhost:5173,http://127.0.0.1:8001"

    @property
    def cors_origins_list(self) -> List[str]:
        return [origin.strip() for origin in self.CORS_ORIGINS.split(",")]

    # 文件存储
    STORAGE_BACKEND: str = "local"  # local | qiniu
    UPLOAD_DIR: str = "./uploads"

    # 七牛云
    QINIU_ACCESS_KEY: str = ""
    QINIU_SECRET_KEY: str = ""
    QINIU_BUCKET: str = ""
    QINIU_DOMAIN: str = ""

    model_config = {
        "env_file": ".env",
        "env_file_encoding": "utf-8",
    }


settings = Settings()

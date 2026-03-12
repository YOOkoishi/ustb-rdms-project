from sqlalchemy import Column, Integer, String, Text, JSON
from app.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(50), unique=True, nullable=False, index=True)
    password_hash = Column(String(128), nullable=False)
    token = Column(String(256), nullable=True, index=True)
    roles = Column(JSON, nullable=False, default=["editor"])  # ["admin"] | ["editor"]
    name = Column(String(100), nullable=False, default="")
    avatar = Column(
        String(512),
        nullable=False,
        default="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    )
    introduction = Column(Text, nullable=False, default="")

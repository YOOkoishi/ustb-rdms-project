from sqlalchemy import Column, Integer, String, Text, JSON
from app.database import Base


class Role(Base):
    __tablename__ = "roles"

    id = Column(Integer, primary_key=True, autoincrement=True)
    key = Column(String(50), unique=True, nullable=False, index=True)
    name = Column(String(100), nullable=False)
    description = Column(Text, nullable=True, default="")
    routes = Column(JSON, nullable=True, default=[])

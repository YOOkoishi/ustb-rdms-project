from sqlalchemy import Column, Integer, String, Text
from app.database import Base


class Person(Base):
    __tablename__ = "persons"

    person_idx = Column(Integer, primary_key=True, autoincrement=True)
    person_name = Column(String(100), nullable=False)
    person_phone = Column(String(20), nullable=True, default="")
    person_email = Column(String(200), nullable=True, default="")
    person_department = Column(String(200), nullable=True, default="")
    person_remark = Column(Text, nullable=True, default="")

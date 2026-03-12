from sqlalchemy import Column, Integer, String, ForeignKey
from app.database import Base


class PersonDevice(Base):
    __tablename__ = "person_device_relations"

    id = Column(Integer, primary_key=True, autoincrement=True)
    person_idx = Column(Integer, ForeignKey("persons.person_idx", ondelete="CASCADE"), nullable=False)
    person_name = Column(String(100), nullable=True, default="")
    device_idx = Column(Integer, ForeignKey("devices.device_idx", ondelete="CASCADE"), nullable=False)
    device_name = Column(String(200), nullable=True, default="")
    responsibility = Column(String(100), nullable=True, default="")

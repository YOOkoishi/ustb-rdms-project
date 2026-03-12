"""人员-设备关联路由"""

from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.dependencies import get_db
from app.models.person import Person
from app.models.device import Device
from app.models.person_device import PersonDevice
from app.schemas.person_device import PersonDeviceCreate, PersonDeviceOut
from app.utils.response import success_response, error_response

router = APIRouter()


@router.get("/person_device/relations")
async def get_relation_list(db: AsyncSession = Depends(get_db)):
    """获取所有人员-设备关联"""
    result = await db.execute(select(PersonDevice).order_by(PersonDevice.id))
    relations = result.scalars().all()
    return success_response([PersonDeviceOut.model_validate(r).model_dump() for r in relations])


@router.post("/person_device/relations/")
async def add_relation(body: PersonDeviceCreate, db: AsyncSession = Depends(get_db)):
    """新增人员-设备关联"""
    # 自动填充 person_name 和 device_name
    person_name = body.person_name or ""
    device_name = body.device_name or ""

    if not person_name and body.person_idx:
        p_result = await db.execute(
            select(Person).where(Person.person_idx == body.person_idx)
        )
        person = p_result.scalar_one_or_none()
        if person:
            person_name = person.person_name

    if not device_name and body.device_idx:
        d_result = await db.execute(
            select(Device).where(Device.device_idx == body.device_idx)
        )
        device = d_result.scalar_one_or_none()
        if device:
            device_name = device.device_name

    relation = PersonDevice(
        person_idx=body.person_idx,
        person_name=person_name,
        device_idx=body.device_idx,
        device_name=device_name,
        responsibility=body.responsibility or "",
    )
    db.add(relation)
    await db.flush()
    await db.refresh(relation)
    return success_response(PersonDeviceOut.model_validate(relation).model_dump())


@router.delete("/person_device/relations/{relation_id}/")
async def delete_relation(relation_id: int, db: AsyncSession = Depends(get_db)):
    """删除人员-设备关联"""
    result = await db.execute(select(PersonDevice).where(PersonDevice.id == relation_id))
    relation = result.scalar_one_or_none()
    if not relation:
        return error_response(50001, "关联记录不存在")

    await db.delete(relation)
    return success_response("success")

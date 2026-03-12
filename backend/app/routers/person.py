"""人员管理路由"""

from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.dependencies import get_db
from app.models.person import Person
from app.models.person_device import PersonDevice
from app.schemas.person import PersonCreate, PersonUpdate, PersonOut
from app.utils.response import success_response, error_response

router = APIRouter()


@router.get("/person/persons")
async def get_person_list(db: AsyncSession = Depends(get_db)):
    """获取所有人员列表"""
    result = await db.execute(select(Person).order_by(Person.person_idx))
    persons = result.scalars().all()
    return success_response([PersonOut.model_validate(p).model_dump() for p in persons])


@router.post("/person/persons/")
async def add_person(body: PersonCreate, db: AsyncSession = Depends(get_db)):
    """新增人员"""
    person = Person(
        person_name=body.person_name,
        person_phone=body.person_phone or "",
        person_email=body.person_email or "",
        person_department=body.person_department or "",
        person_remark=body.person_remark or "",
    )
    db.add(person)
    await db.flush()
    await db.refresh(person)
    return success_response(PersonOut.model_validate(person).model_dump())


@router.put("/person/persons/{person_idx}/")
async def update_person(person_idx: int, body: PersonUpdate, db: AsyncSession = Depends(get_db)):
    """更新人员"""
    result = await db.execute(select(Person).where(Person.person_idx == person_idx))
    person = result.scalar_one_or_none()
    if not person:
        return error_response(50001, "人员不存在")

    update_data = body.model_dump(exclude_none=True)
    for key, value in update_data.items():
        setattr(person, key, value)

    await db.flush()
    await db.refresh(person)
    return success_response(PersonOut.model_validate(person).model_dump())


@router.delete("/person/persons/{person_idx}/")
async def delete_person(person_idx: int, db: AsyncSession = Depends(get_db)):
    """删除人员及其关联关系"""
    result = await db.execute(select(Person).where(Person.person_idx == person_idx))
    person = result.scalar_one_or_none()
    if not person:
        return error_response(50001, "人员不存在")

    # 删除关联的人员-设备关系
    pd_result = await db.execute(
        select(PersonDevice).where(PersonDevice.person_idx == person_idx)
    )
    for pd in pd_result.scalars().all():
        await db.delete(pd)

    await db.delete(person)
    return success_response("success")

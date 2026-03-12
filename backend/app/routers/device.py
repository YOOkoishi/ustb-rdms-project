"""设备管理路由"""

from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.dependencies import get_db, require_admin
from app.models.user import User
from app.models.device import Device
from app.models.person_device import PersonDevice
from app.schemas.device import DeviceCreate, DeviceUpdate, DeviceOut
from app.utils.response import success_response, error_response

router = APIRouter()


@router.get("/device/devices/")
async def get_device_list(db: AsyncSession = Depends(get_db)):
    """获取所有设备列表"""
    result = await db.execute(select(Device).order_by(Device.device_idx))
    devices = result.scalars().all()
    return success_response([DeviceOut.model_validate(d).model_dump() for d in devices])


@router.post("/device/devices/")
async def add_device(body: DeviceCreate, db: AsyncSession = Depends(get_db), _: User = Depends(require_admin)):
    """新增设备"""
    device = Device(
        device_name=body.device_name,
        device_type=body.device_type or "",
        device_manager_idx=body.device_manager_idx or [],
        location_name=body.location_name or "",
        location_address=body.location_address or "",
        max_tube_voltage_kv=body.max_tube_voltage_kv,
        max_tube_current_ma=body.max_tube_current_ma,
        device_QR_code=body.device_QR_code or "",
        device_remark=body.device_remark or "",
        device_img=body.device_img or "",
    )
    db.add(device)
    await db.flush()
    await db.refresh(device)
    return success_response(DeviceOut.model_validate(device).model_dump())


@router.put("/device/devices/{device_idx}/")
async def update_device(device_idx: int, body: DeviceUpdate, db: AsyncSession = Depends(get_db), _: User = Depends(require_admin)):
    """更新设备"""
    result = await db.execute(select(Device).where(Device.device_idx == device_idx))
    device = result.scalar_one_or_none()
    if not device:
        return error_response(50001, "设备不存在")

    update_data = body.model_dump(exclude_none=True, exclude={"device_idx"})
    for key, value in update_data.items():
        setattr(device, key, value)

    await db.flush()
    await db.refresh(device)
    return success_response(DeviceOut.model_validate(device).model_dump())


@router.delete("/device/devices/{device_idx}/")
async def delete_device(device_idx: int, db: AsyncSession = Depends(get_db), _: User = Depends(require_admin)):
    """删除设备及其关联关系"""
    result = await db.execute(select(Device).where(Device.device_idx == device_idx))
    device = result.scalar_one_or_none()
    if not device:
        return error_response(50001, "设备不存在")

    # 删除关联的人员-设备关系
    pd_result = await db.execute(
        select(PersonDevice).where(PersonDevice.device_idx == device_idx)
    )
    for pd in pd_result.scalars().all():
        await db.delete(pd)

    await db.delete(device)
    return success_response("success")


@router.get("/device/persondevice")
async def get_person_device_by_device(db: AsyncSession = Depends(get_db)):
    """获取设备的负责人关系列表（设备视角调用）"""
    result = await db.execute(select(PersonDevice).order_by(PersonDevice.id))
    relations = result.scalars().all()
    return success_response([
        {
            "id": r.id,
            "person_idx": r.person_idx,
            "person_name": r.person_name,
            "device_idx": r.device_idx,
            "device_name": r.device_name,
            "responsibility": r.responsibility,
        }
        for r in relations
    ])

"""
种子数据脚本：从 mock 数据填充数据库。
运行方式：cd backend && python seed.py
"""

import asyncio
import sys
import os

# 确保从 backend 目录运行
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app.database import engine, async_session, Base
from app.models.user import User
from app.models.device import Device
from app.models.person import Person
from app.models.person_device import PersonDevice
from app.models.file import FileRecord
from app.models.role import Role
from app.services.auth import hash_password

from app.routers.role import ALL_ROUTES, CONSTANT_ROUTES, ASYNC_ROUTES


async def seed():
    # 创建所有表
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)

    async with async_session() as session:
        # ============ 1. 用户 ============
        users = [
            User(
                username="admin",
                password_hash=hash_password("admin123"),
                roles=["admin"],
                name="Super Admin",
                avatar="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
                introduction="超级管理员",
            ),
            User(
                username="editor",
                password_hash=hash_password("editor123"),
                roles=["editor"],
                name="Normal Editor",
                avatar="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
                introduction="编辑用户",
            ),
        ]
        session.add_all(users)

        # ============ 2. 角色 ============
        roles = [
            Role(
                key="admin",
                name="admin",
                description="Super Administrator. Have access to view all pages.",
                routes=ALL_ROUTES,
            ),
            Role(
                key="editor",
                name="editor",
                description="Normal Editor. Can see all pages except permission page.",
                routes=[r for r in ALL_ROUTES if r.get("path") != "/permission"],
            ),
            Role(
                key="visitor",
                name="visitor",
                description="Just a visitor. Can only see the home page and the document page.",
                routes=CONSTANT_ROUTES,
            ),
        ]
        session.add_all(roles)

        # ============ 3. 设备（来自 mock/demo/device.js） ============
        devices = [
            Device(
                device_idx=1,
                device_name="X光机 XR-100",
                device_type="X光机",
                device_manager_idx=[1, 2],
                location_name="材料楼301",
                location_address="北京科技大学材料学院301室",
                max_tube_voltage_kv=160,
                max_tube_current_ma=20,
                device_QR_code="QR-DEV-001",
                device_remark="主要用于材料内部结构无损检测",
                device_img="",
            ),
            Device(
                device_idx=2,
                device_name="CT扫描仪 CT-200",
                device_type="CT机",
                device_manager_idx=[2, 3],
                location_name="理化楼102",
                location_address="北京科技大学理化楼102室",
                max_tube_voltage_kv=225,
                max_tube_current_ma=30,
                device_QR_code="QR-DEV-002",
                device_remark="用于高精度三维成像分析",
                device_img="",
            ),
            Device(
                device_idx=3,
                device_name="电子束光刻机 EBL-3000",
                device_type="电子束光刻",
                device_manager_idx=[3, 4],
                location_name="微电子楼205",
                location_address="北京科技大学微电子学院205室",
                max_tube_voltage_kv=100,
                max_tube_current_ma=5,
                device_QR_code="QR-DEV-003",
                device_remark="用于纳米图案加工",
                device_img="",
            ),
            Device(
                device_idx=4,
                device_name="质谱分析仪 MS-400",
                device_type="质谱分析",
                device_manager_idx=[4, 5],
                location_name="化学楼108",
                location_address="北京科技大学化学系108室",
                max_tube_voltage_kv=50,
                max_tube_current_ma=10,
                device_QR_code="QR-DEV-004",
                device_remark="用于物质成分和结构的分析",
                device_img="",
            ),
            Device(
                device_idx=5,
                device_name="加速器 ACC-500",
                device_type="粒子加速",
                device_manager_idx=[5, 6],
                location_name="加速器中心B1",
                location_address="北京科技大学加速器中心地下一层",
                max_tube_voltage_kv=500,
                max_tube_current_ma=50,
                device_QR_code="QR-DEV-005",
                device_remark="高能粒子物理研究专用设备",
                device_img="",
            ),
        ]
        session.add_all(devices)

        # ============ 4. 人员（来自 mock/demo/person.js） ============
        persons = [
            Person(
                person_idx=1,
                person_name="张明",
                person_phone="13800000001",
                person_email="zhangming@ustb.edu.cn",
                person_department="材料学院",
                person_remark="高级实验师，负责X光设备维护",
            ),
            Person(
                person_idx=2,
                person_name="李华",
                person_phone="13800000002",
                person_email="lihua@ustb.edu.cn",
                person_department="材料学院",
                person_remark="副教授，材料检测方向",
            ),
            Person(
                person_idx=3,
                person_name="王芳",
                person_phone="13800000003",
                person_email="wangfang@ustb.edu.cn",
                person_department="能源与环保学院",
                person_remark="讲师，CT成像技术研究",
            ),
            Person(
                person_idx=4,
                person_name="赵强",
                person_phone="13800000004",
                person_email="zhaoqiang@ustb.edu.cn",
                person_department="微电子学院",
                person_remark="教授，电子束光刻方向负责人",
            ),
            Person(
                person_idx=5,
                person_name="刘洋",
                person_phone="13800000005",
                person_email="liuyang@ustb.edu.cn",
                person_department="化学系",
                person_remark="实验师，质谱分析专员",
            ),
            Person(
                person_idx=6,
                person_name="陈静",
                person_phone="13800000006",
                person_email="chenjing@ustb.edu.cn",
                person_department="加速器中心",
                person_remark="研究员，加速器运行管理",
            ),
        ]
        session.add_all(persons)

        # ============ 5. 人员-设备关联（来自 mock/demo/device.js 中的 pd 数据） ============
        relations = [
            PersonDevice(id=1, person_idx=1, person_name="张明", device_idx=1, device_name="X光机 XR-100", responsibility="主要负责人"),
            PersonDevice(id=2, person_idx=2, person_name="李华", device_idx=1, device_name="X光机 XR-100", responsibility="副负责人"),
            PersonDevice(id=3, person_idx=2, person_name="李华", device_idx=2, device_name="CT扫描仪 CT-200", responsibility="主要负责人"),
            PersonDevice(id=4, person_idx=3, person_name="王芳", device_idx=2, device_name="CT扫描仪 CT-200", responsibility="操作员"),
            PersonDevice(id=5, person_idx=3, person_name="王芳", device_idx=3, device_name="电子束光刻机 EBL-3000", responsibility="副负责人"),
            PersonDevice(id=6, person_idx=4, person_name="赵强", device_idx=3, device_name="电子束光刻机 EBL-3000", responsibility="主要负责人"),
            PersonDevice(id=7, person_idx=4, person_name="赵强", device_idx=4, device_name="质谱分析仪 MS-400", responsibility="主要负责人"),
            PersonDevice(id=8, person_idx=5, person_name="刘洋", device_idx=4, device_name="质谱分析仪 MS-400", responsibility="操作员"),
            PersonDevice(id=9, person_idx=6, person_name="陈静", device_idx=5, device_name="加速器 ACC-500", responsibility="主要负责人"),
        ]
        session.add_all(relations)

        # ============ 6. 文件（来自 mock/demo/file.js） ============
        files = [
            FileRecord(
                file_idx=1,
                file_name="X光机XR-100购置合同",
                file_type="pdf",
                file_size=1024000,
                file_ownership_idx=1,
                file_download_url="/files/device1_contract.pdf",
                file_content="X光机XR-100设备购置合同\n\n甲方：北京科技大学\n乙方：XX射线设备有限公司\n\n合同编号：USTB-RAD-2024-001\n设备名称：X光机 XR-100\n技术参数：\n  最大管电压：160kV\n  最大管电流：20mA\n\n合同金额：￥580,000\n质保期：3年\n\n签订日期：2024年1月15日",
                file_remark="设备购置合同",
            ),
            FileRecord(
                file_idx=2,
                file_name="CT扫描仪维护记录_2024Q1",
                file_type="txt",
                file_size=512000,
                file_ownership_idx=2,
                file_download_url="/files/device2_maintenance.txt",
                file_content="CT扫描仪 CT-200 维护记录\n\n维护日期：2024年3月15日\n维护人员：李华、王芳\n\n维护项目：\n1. 探测器阵列清洁与校准\n2. 旋转机架润滑保养\n3. X射线管老化检测\n4. 冷却系统压力измерений\n5. 重建算法版本更新至v3.2\n\n检测结果：设备运行正常",
                file_remark="季度维护记录",
            ),
            FileRecord(
                file_idx=3,
                file_name="电子束光刻机操作规程",
                file_type="pdf",
                file_size=2048000,
                file_ownership_idx=3,
                file_download_url="/files/device3_manual.pdf",
                file_content="电子束光刻机 EBL-3000 操作规程\n\n第一章 安全须知\n1.1 操作前必须佩戴防护设备\n1.2 确认真空系统正常\n1.3 检查电子枪状态\n\n第二章 开机流程\n2.1 检查冷却水循环\n2.2 启动真空泵组\n2.3 等待真空度达到10^-6 Pa\n2.4 预热电子枪\n\n第三章 光刻操作\n3.1 样品安装与对准\n3.2 参数设置\n3.3 曝光执行",
                file_remark="操作规程手册",
            ),
            FileRecord(
                file_idx=4,
                file_name="质谱仪校准证书_2024",
                file_type="pdf",
                file_size=768000,
                file_ownership_idx=4,
                file_download_url="/files/device4_calibration.pdf",
                file_content="质谱分析仪 MS-400 校准证书\n\n证书编号：CAL-2024-0315\n校准日期：2024年3月20日\n有效期至：2025年3月19日\n\n校准标准：GB/T 33864-2017\n\n校准结果：\n质量范围：1-1000 amu ✓\n分辨率：>10000 (FWHM) ✓\n灵敏度：>500 counts/pg ✓\n质量准确度：<2 ppm ✓\n\n结论：合格",
                file_remark="年度校准证书",
            ),
            FileRecord(
                file_idx=5,
                file_name="加速器工艺参数表",
                file_type="txt",
                file_size=256000,
                file_ownership_idx=5,
                file_download_url="/files/device5_params.txt",
                file_content="加速器 ACC-500 工艺参数表\n\n基本参数：\n  粒子类型：质子/重离子\n  最大能量：500 MeV\n  束流强度：1-100 nA\n  束斑大小：1-50 mm\n\n运行模式：\n  模式A - 低能散射实验\n  模式B - 高能碰撞实验\n  模式C - 辐照损伤测试\n\n安全参数：\n  辐射防护等级：甲级\n  屏蔽墙厚度：2m混凝土",
                file_remark="工艺参数汇总",
            ),
            FileRecord(
                file_idx=6,
                file_name="X光机使用指南_v2",
                file_type="pdf",
                file_size=1536000,
                file_ownership_idx=1,
                file_download_url="/files/device1_guide_v2.pdf",
                file_content="X光机 XR-100 使用指南 v2.0\n\n适用人员：已通过辐射安全培训的实验人员\n\n1. 开机检查\n   - 确认电源连接正常\n   - 检查冷却水温度\n   - 确认辐射警示灯工作正常\n\n2. 样品准备\n   - 样品尺寸不超过 300x300mm\n   - 标记样品方向\n\n3. 参数设置\n   - 管电压：40-160 kV\n   - 管电流：1-20 mA\n   - 曝光时间：根据样品调整",
                file_remark="使用指南第二版",
            ),
            FileRecord(
                file_idx=7,
                file_name="CT扫描仪运行日志_202403",
                file_type="txt",
                file_size=384000,
                file_ownership_idx=2,
                file_download_url="/files/device2_log_202403.txt",
                file_content="CT扫描仪 CT-200 运行日志 (2024年3月)\n\n03/01 09:00 开机正常\n03/01 09:30 扫描样品 #2024-0301 完成\n03/01 14:00 扫描样品 #2024-0302 完成\n03/01 17:00 关机\n\n03/05 08:30 开机正常\n03/05 10:00 扫描样品 #2024-0305 完成\n03/05 15:00 发现异响，通知维修\n03/06 维修完成，恢复正常\n\n累计运行：156小时\n扫描样品：47个",
                file_remark="月度运行日志",
            ),
            FileRecord(
                file_idx=8,
                file_name="辐射安全检查报告_2024Q1",
                file_type="pdf",
                file_size=896000,
                file_ownership_idx=None,
                file_download_url="/files/safety_report_2024Q1.pdf",
                file_content="辐射安全检查报告\n\n检查期间：2024年1月-3月\n检查单位：学校辐射安全管理委员会\n\n一、检查范围\n   覆盖全校5台辐射设备\n\n二、检查结果\n   1. X光机 XR-100：合格\n   2. CT扫描仪 CT-200：合格\n   3. 电子束光刻机 EBL-3000：合格\n   4. 质谱分析仪 MS-400：合格\n   5. 加速器 ACC-500：合格（建议增加监测点）\n\n三、整改建议\n   - 加速器区域增设2个辐射监测点\n   - 更新所有设备的操作规程版本",
                file_remark="综合安全检查报告",
            ),
        ]
        session.add_all(files)

        await session.commit()
        print("✅ 种子数据填充完成！")
        print(f"   - 用户: {len(users)} 条")
        print(f"   - 角色: {len(roles)} 条")
        print(f"   - 设备: {len(devices)} 条")
        print(f"   - 人员: {len(persons)} 条")
        print(f"   - 人员-设备关联: {len(relations)} 条")
        print(f"   - 文件: {len(files)} 条")
        print()
        print("默认账号：")
        print("   admin / admin123  (管理员)")
        print("   editor / editor123  (编辑者)")


if __name__ == "__main__":
    asyncio.run(seed())

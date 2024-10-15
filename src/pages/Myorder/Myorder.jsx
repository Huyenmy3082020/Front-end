import { Col, Empty, Row } from 'antd';
import AllOrder from './AllOrder/AllOrder';
import { Tabs } from 'antd';
import styles from '../../pages/Myorder/Myorder.module.scss';
import {
    Bell,
    QuanLiDonHang,
    SanPhamDaXem,
    SoDiaChi,
    ThongTinThanhToan,
    User,
} from '../../components/IconComponent/IconComponent';

const onChange = (key) => {
    console.log(key);
};

function Myorder() {
    const items = [
        {
            key: '1',
            label: 'Tất cả đơn',
            children: <AllOrder></AllOrder>,
        },
        {
            key: '2',
            label: <div style={{ padding: '6px' }}>Chờ thanh toán</div>,
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Đang vận chuyển',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '4',
            label: 'Đang xử lí',
            children: <Empty></Empty>,
        },
        {
            key: '5',
            label: 'Đã giao',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '6',
            label: 'Đã hủy',
            children: 'Content of Tab Pane 3',
        },
    ];
    return (
        <div
            style={{
                paddingTop: '60px',
                paddingLeft: '60px',
                paddingRight: '60px',
                backgroundColor: 'rgb(245 245 250)',
            }}
        >
            <Row>
                <Col span={6}>
                    <div>
                        <ul className={styles.wrapperList}>
                            <a href="/account-info">
                                <li className={styles.wrapperItem}>
                                    <User></User>
                                    <span>Thông tin tài khoản</span>
                                </li>
                            </a>
                            <a href="/notifications">
                                <li className={styles.wrapperItem}>
                                    <Bell></Bell>
                                    <span>Thông báo của tôi</span>
                                </li>
                            </a>
                            <a href="/manage-orders">
                                <li className={styles.wrapperItem}>
                                    <QuanLiDonHang></QuanLiDonHang>
                                    <span>Quản lí đơn hàng</span>
                                </li>
                            </a>
                            <a href="/return-management">
                                <li className={styles.wrapperItem}>
                                    <img
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/order_return.svg"
                                        alt=""
                                        className={styles.imgMyorderNav}
                                    />
                                    <span>Quản lí đổi trả</span>
                                </li>
                            </a>
                            <a href="/addresses">
                                <li className={styles.wrapperItem}>
                                    <SoDiaChi></SoDiaChi>
                                    <span>Sổ địa chỉ</span>
                                </li>
                            </a>
                            <a href="/payment-info">
                                <li className={styles.wrapperItem}>
                                    <ThongTinThanhToan></ThongTinThanhToan>
                                    <span>Thông tin thanh toán</span>
                                </li>
                            </a>
                            <a href="/review-hub">
                                <li className={styles.wrapperItem}>
                                    <img
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/account/reviewhub.png"
                                        alt=""
                                        className={styles.imgMyorderNav}
                                    />
                                    <span>Thông tin tài khoản</span>
                                </li>
                            </a>
                            <a href="/viewed-products">
                                <li className={styles.wrapperItem}>
                                    <SanPhamDaXem></SanPhamDaXem>
                                    <span>Sản phẩm bạn đã xem</span>
                                </li>
                            </a>
                        </ul>
                    </div>
                </Col>
                <Col span={16}>
                    <div>
                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} size="medium" />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Myorder;

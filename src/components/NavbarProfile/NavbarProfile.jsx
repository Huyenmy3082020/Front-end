import styles from '../../pages/Myorder/Myorder.module.scss';
import {
    Bell,
    QuanLiDonHang,
    SanPhamDaXem,
    SoDiaChi,
    ThongTinThanhToan,
    User,
} from '../../components/IconComponent/IconComponent';
function NavbarProfile() {
    return (
        <div style={{ paddingTop: '4px' }}>
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
    );
}

export default NavbarProfile;

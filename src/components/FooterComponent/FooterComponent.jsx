import { Col, Row } from 'antd';
import styles from '../../components/FooterComponent/FooterComponent.module.scss';
import now from '../../assets/now.png';
import thetindung from '../../assets/thetindung.png';
import viettelmoney from '../../assets/viettelmoney.png';
import vnpay from '../../assets/vnpay.png';
import { Facebook, Youtube, Zalo } from '../../components/IconComponent/IconComponent';
import zalopay from '../../assets/zalopay.png';
import momo from '../../assets/momo.jpg';
function FooterComponent() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperList}>
                <div className={styles.wrapperItem}>
                    <h2 style={{ fontSize: '1.7rem', fontWeight: '500' }}>Hỗ trợ khách hàng</h2>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Hotline: 1900-6035 (1000 đ/phút, 8-21h kể cả T7, CN)
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Các câu hỏi thường gặp
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Gửi yêu cầu hỗ trợ
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Hướng dẫn đặt hàng
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Phương thức vận chuyển
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Chính sách kiểm hàng
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Hướng dẫn trả góp
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Chính sách hàng nhập khẩu
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Hỗ trợ khách hàng:
                        </a>
                    </span>
                </div>
                <div className={styles.wrapperItem}>
                    <h2 style={{ fontSize: '1.7rem', fontWeight: '500' }}>Về Tiki</h2>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Giới thiệu Tiki
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Tiki Blog
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Tuyển dụng
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Chính sách giải quyết khiếu nại
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Phương thức vận chuyển
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Chính sách bảo mật thông tin cá nhân
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Chính sách bảo mật thanh toán
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Điều khoản sử dụng
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Tiếp thị liên kết cùng Tiki
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Bán hàng doanh nghiệp
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Điều kiện vận chuyển
                        </a>
                    </span>
                </div>
                <div className={styles.wrapperItem}>
                    <h2 style={{ fontSize: '1.6rem', fontWeight: '500' }}>Hợp tác và liên kết</h2>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Quy chế hoạt động Sàn GDTMĐT
                        </a>
                    </span>
                    <span>
                        <a className={styles.wrapperlink} href="">
                            Bán hàng cùng Tiki
                        </a>
                    </span>
                    <h2 style={{ fontSize: '1.6rem', fontWeight: '500' }}>Chứng nhận bởi</h2>
                    <div>
                        <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
                            width="32px"
                            height="32px"
                            alt=""
                        />
                        <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
                            width="80px"
                            height="32px"
                            alt=""
                        />
                        <img
                            src="https://images.dmca.com/Badges/dmca_protected_sml_120y.png?ID=388d758c-6722-4245-a2b0-1d2415e70127"
                            width="32px"
                            height="32px"
                            alt=""
                        />
                    </div>
                </div>
                <div className={styles.wrapperItem}>
                    <h2 style={{ fontSize: '1.6rem', fontWeight: '500' }}>Phương thức thanh toán</h2>
                    <div>
                        <img src={momo} style={{ marginRight: '16px' }} alt="" width="32px" height="32px" />
                        <img src={viettelmoney} style={{ marginRight: '16px' }} width="32px" height="32px" alt="" />
                        <img src={vnpay} style={{ marginRight: '16px' }} width="32px" height="32px" alt="" />
                        <img src={zalopay} style={{ marginRight: '16px' }} width="32px" height="32px" alt="" />
                        <img src={thetindung} style={{ marginRight: '16px' }} width="32px" height="32px" alt="" />
                    </div>
                    <div>
                        <img src={momo} alt="" width="32px" height="32px" />
                        <img src={viettelmoney} width="32px" height="32px" alt="" />
                        <img src={vnpay} width="32px" height="32px" alt="" />
                        <img src={zalopay} width="32px" height="32px" alt="" />
                        <img src={thetindung} width="32px" height="32px" alt="" />
                    </div>
                    <h2 style={{ fontSize: '1.6rem', fontWeight: '500', paddingBottom: '4px', marginTop: '24px' }}>
                        Dịch vụ giao hàng
                    </h2>
                    <img
                        src="https://salt.tikicdn.com/ts/upload/74/56/ab/e71563afb23e3f34a148fe1b7d3413c5.png"
                        alt=""
                        width="109px"
                        height="33px"
                    />
                </div>
                <div className={styles.wrapperItem}>
                    <h2 style={{ fontSize: '1.6rem', fontWeight: '500' }}>Phương thức thanh toán</h2>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <Facebook></Facebook>
                        </div>
                        <div style={{ marginLeft: '8px' }}>
                            <Zalo></Zalo>
                        </div>
                        <div style={{ marginLeft: '8px' }}></div>
                        <Youtube></Youtube>
                    </div>
                    <h2 style={{ fontSize: '1.6rem', fontWeight: '500', marginTop: '16px' }}>
                        Tải ứng dụng trên điện thoại
                    </h2>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png"
                                alt=""
                                width="80px"
                                height="80px"
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                marginLeft: '8px',
                            }}
                        >
                            <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png"
                                alt=""
                                width="122px"
                            />
                            <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png"
                                alt=""
                                width="122px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;

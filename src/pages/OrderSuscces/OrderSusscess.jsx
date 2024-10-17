import { useLocation } from 'react-router-dom';
import styles from '../../pages/OrderSuscces/OrderSusscess.module.scss';
import { convertPrice } from '../../ultil';
function OrderSusscess() {
    const location = useLocation();

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperRight}>
                <div className={styles.wrapperHeader}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p className={styles.textOrdersuscess}>Yay, đặt hàng thành công!</p>
                    </div>
                    <img
                        style={{ position: 'absolute', width: '100%', height: ' 100%' }}
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/confetti.svg"
                        alt=""
                    />
                </div>
                <div style={{ position: 'absolute', zIndex: '1', display: 'flex' }}>
                    <img
                        style={{ marginTop: ' 70px', marginLeft: '60px' }}
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/tiki-mascot-congrat.svg"
                        alt=""
                    />
                    <div style={{ paddingTop: '140px', paddingLeft: '30px', paddingRight: '30px' }}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-betweens',
                                borderBottom: '1px solid #ddd',
                            }}
                        >
                            <p style={{ fontSize: '1.4rem', color: '#ccc' }}>Phương thức thanh toán </p>
                            <p style={{ marginLeft: '90px', fontSize: '1.4rem' }}>{location.state.payment}</p>
                        </div>
                        <div style={{ display: 'flex', paddingTop: '16px', justifyContent: 'space-between' }}>
                            <p style={{ fontSize: '1.4rem', color: '#ccc' }}>Tổng số tiền</p>
                            <p style={{ marginLeft: '90px', fontSize: '1.4rem' }}>
                                {convertPrice(location.state.totalprice)}
                            </p>
                        </div>
                        <div style={{ paddingTop: '16px' }}>
                            <button className={styles.btnHome}>Quay về trang chủ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSusscess;

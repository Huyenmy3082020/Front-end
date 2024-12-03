import styles from '../../Myorder/AllOrder/AllOrder.module.scss';
import doitra from '../../../assets/doitra.png';
import { useState, useEffect } from 'react';
import * as OrderService from '../../../service/OrderService';
import { Empty, message } from 'antd';
import { convertPrice } from '../../../ultil';

function AllOrder() {
    const [allOrder, setAllOrder] = useState('');
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const result = await OrderService.getOrder();
                setAllOrder(result.data);
            } catch (error) {
                console.error('Failed to fetch orders:', error);
            }
        };

        fetchOrders();
    }, []);

    console.log(allOrder);
    const handleCancleOrder = async (orderId) => {
        try {
            await OrderService.deleteOrder(orderId);
            setAllOrder((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
            message.success('Đơn hàng đã được hủy thành công.');
        } catch (error) {
            console.error('Failed to cancel order:', error);
            message.error('Có lỗi xảy ra khi hủy đơn hàng. Vui lòng thử lại.');
        }
    };

    return (
        <div>
            {allOrder?.length > 0 ? (
                allOrder.map((order) => {
                    return (
                        <div key={order._id} style={{ marginBottom: '16px', backgroundColor: '#fff', padding: '16px' }}>
                            {order.isPaid ? (
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                                    <img
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/account/block.png"
                                        alt=""
                                        width="24px"
                                        height="24px"
                                        style={{ marginRight: '4px' }}
                                    />
                                    <span
                                        style={{ color: 'rgb(128, 128, 137)', fontWeight: '500', fontSize: '1.4rem' }}
                                    >
                                        Đã hủy
                                    </span>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                                    <img
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/account/indicator.png"
                                        alt=""
                                        width="24px"
                                        height="24px"
                                        style={{ marginRight: '4px' }}
                                    />
                                    <span
                                        style={{ color: 'rgb(128, 128, 137)', fontWeight: '500', fontSize: '1.4rem' }}
                                    >
                                        Chờ xác nhận
                                    </span>
                                    <span style={{ marginLeft: '8px', color: 'rgb(128, 128, 137)' }}>
                                        Chờ Tiki xác nhận
                                    </span>
                                </div>
                            )}
                            {order?.isPaid === true ? (
                                <div>
                                    <img
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/account/indicator.png"
                                        alt=""
                                        width="24px"
                                        height="24px"
                                        style={{ marginRight: '4px' }}
                                    />
                                    <span
                                        style={{ color: 'rgb(128, 128, 137)', fontWeight: '500', fontSize: '1.4rem' }}
                                    >
                                        Đã thanh toán bằng phương thức : PayPal
                                    </span>
                                </div>
                            ) : (
                                <div></div>
                            )}
                            <div className={styles.wrapper}>
                                {order.orderItems.map((item) => (
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            paddingBottom: '16px',
                                            paddingTop: '16px',
                                        }}
                                        key={item._id}
                                    >
                                        <div className={styles.wrapperList}>
                                            <img src={item.image} width="56px" height="56px" alt={item.name} />
                                            <div className={styles.x1}>
                                                <span style={{ fontSize: '1.2rem' }}>x{item.amount}</span>
                                            </div>
                                        </div>
                                        <div style={{ paddingLeft: '10px' }}>
                                            <p>{item.name}</p>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <img
                                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/account/store.png"
                                                    alt=""
                                                    width="16px"
                                                    height="16px"
                                                />
                                                Tiki Trading
                                            </div>
                                            <img src={doitra} alt="Đổi trả" width="114px" height="20px" />
                                        </div>
                                    </div>
                                ))}
                                <div> {convertPrice(order.totalPrice)}</div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    padding: '16px 0px',
                                }}
                            >
                                <span style={{ marginRight: '10px', fontSize: '1.6rem', color: 'rgb(128, 128, 137)' }}>
                                    Tổng tiền
                                </span>
                                <span style={{ color: 'rgb(56, 56, 61)', fontSize: '1.6rem' }}>
                                    {convertPrice(order.totalPrice)}
                                </span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button className={styles.btnMua}>Mua lại</button>
                                <div id="paypal-button-container"></div>
                                <button className={styles.btnMua} onClick={() => handleCancleOrder(order._id)}>
                                    Hủy
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <Empty description="Không có đơn hàng nào" />
            )}
        </div>
    );
}

export default AllOrder;

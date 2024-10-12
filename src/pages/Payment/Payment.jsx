import React, { useMemo, useState } from 'react';
import styles from '../../pages/OrderPage/OrderPage.module.scss';
import { Col, Row, Steps, Checkbox, Radio, message } from 'antd';
import topdeal from '../../assets/topdeal.png';
import chinhhang from '../../assets/chinhhang.png';
import doitrahang from '../../assets/doitra.png';
import now from '../../assets/now.png';
import thanhtoanbangtienmat from '../../assets/thanhtoanbangtienmat.png';
import thetindung from '../../assets/thetindung.png';
import viettelmoney from '../../assets/viettelmoney.png';
import vnpay from '../../assets/vnpay.png';
import zalopay from '../../assets/zalopay.png';
import carfreeship from '../../../src/assets/carfreeshsip.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseOrder, increaseOrder, removeOrder, removeAllOrder } from '../../redux/slides/OrderSlide';
import { convertPrice, PaymentMethod } from '../../ultil';
import * as Orderservice from '../../service/OrderService';
import { useMutationHooks } from '../../hooks/useMutationHook';
import { useLocation, useNavigate } from 'react-router-dom';
function Payment() {
    const user = useSelector((state) => state.user);
    const orderItems = useSelector((state) => state.order.orderItems);
    const location = useLocation();

    const navigate = useNavigate();

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('tienmat');

    const handleChange = (e) => {
        setSelectedPaymentMethod(e.target.value);
    };
    const { payment } = PaymentMethod();
    const selectedPaymentDescription = payment[selectedPaymentMethod];

    const mutationAddOrder = useMutationHooks((data) => Orderservice.createOrder(data), {
        onSuccess: () => {
            message.success('Đặt hàng thành công!');
        },
    });

    const handleAddOrder = () => {
        mutationAddOrder.mutate({
            orderItem: location.state.orderItems,
            payment: selectedPaymentDescription,
            itemPrices: location.state.itemPrices,
            shippingAddress: {
                city: user?.city,
                phone: user?.phone,
                name: user?.name,
                shippingPrice: location.state.diliveryMemo,
                address: user?.address,
            },
            totalPrice: location.state.totalPrice,
            user: user?.id,
        });
        navigate('ordersuscess', {
            state: {
                payment: selectedPaymentDescription,
                totalprice: location.state.totalPrice,
            },
        });
    };

    return (
        <div className={styles.wrapper}>
            <h2>Giỏ hàng</h2>
            <Row>
                <Col span={17}>
                    <div>
                        <p>Chọn hình thức giao hàng</p>
                        <div className={styles.hinhthucgiao}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Radio>
                                    <img src={now} alt="" width="32px" height="16px" />
                                    <span style={{ marginLeft: '8px' }}>Giao siêu tốc 2h</span>
                                    <div className={styles.priceShip}>
                                        <span>-25k</span>
                                    </div>
                                </Radio>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Radio>
                                    <span style={{ marginLeft: '8px' }}>Giao tiết kiệm</span>
                                    <div className={styles.priceShip}>
                                        <span>-16k</span>
                                    </div>
                                </Radio>
                            </div>
                        </div>
                    </div>

                    {orderItems.map((orderItem) => (
                        <div className={styles.wrapperTitle} key={orderItem.product}>
                            <div style={{ flex: '3', display: 'flex', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ marginLeft: '6px' }}>
                                        <img width="80px" height="80px" src={orderItem.image} alt="" />
                                    </div>
                                    <div style={{ padding: '8px', marginLeft: '8px' }}>
                                        <div>
                                            <div>
                                                <p
                                                    style={{
                                                        marginTop: '8px',
                                                        color: 'rgb(39, 39, 42)',
                                                        fontSize: '1.4rem',
                                                        fontWeight: '450',
                                                        maxWidth: '240px',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        whiteSpace: 'normal',
                                                    }}
                                                >
                                                    {orderItem.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ flex: '1', color: 'red', fontWeight: '500' }}></div>
                            <div style={{ flex: '1', color: 'rgb(120, 120, 120)' }}></div>
                            <div style={{ flex: '1', color: 'red', fontWeight: '500' }}></div>
                        </div>
                    ))}
                    <div>
                        <p>Chọn hình thức thanh toán</p>

                        <div className={styles.hinhthucthanhtoan}>
                            <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '8px' }}>
                                <Radio
                                    onClick={handleChange}
                                    value="tienmat"
                                    checked={selectedPaymentMethod === 'tienmat'}
                                >
                                    <img width="32px" height="32px" src={thanhtoanbangtienmat} alt="" />
                                    <span style={{ marginLeft: '8px' }}>Thanh toán bằng tiền mặt</span>
                                </Radio>
                            </div>

                            {/* Radio cho Thẻ tín dụng */}
                            <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '8px' }}>
                                <Radio
                                    onClick={handleChange}
                                    value="thetindung"
                                    checked={selectedPaymentMethod === 'thetindung'}
                                >
                                    <img width="32px" height="32px" src={thetindung} alt="" />
                                    <span style={{ marginLeft: '8px' }}>Thanh toán bằng thẻ tín dụng</span>
                                </Radio>
                            </div>

                            {/* Radio cho ViettelMoney */}
                            <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '8px' }}>
                                <Radio
                                    onClick={handleChange}
                                    value="viettelmoney"
                                    checked={selectedPaymentMethod === 'viettelmoney'}
                                >
                                    <img width="32px" height="32px" src={viettelmoney} alt="" />
                                    <span style={{ marginLeft: '8px' }}>Thanh toán bằng ViettelMoney</span>
                                </Radio>
                            </div>

                            {/* Radio cho ZaloPay */}
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Radio
                                    onClick={handleChange}
                                    value="zalopay"
                                    checked={selectedPaymentMethod === 'zalopay'}
                                >
                                    <img width="32px" height="32px" src={zalopay} alt="" />
                                    <span style={{ marginLeft: '8px' }}>Thanh toán bằng ZaloPay</span>
                                </Radio>
                            </div>

                            {/* Radio cho VnPay */}
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Radio onClick={handleChange} value="vnpay" checked={selectedPaymentMethod === 'vnpay'}>
                                    <img width="32px" height="32px" src={vnpay} alt="" />
                                    <span style={{ marginLeft: '8px' }}>Thanh toán bằng VnPay</span>
                                </Radio>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col span={6}>
                    <div className={styles.wrapperRight}>
                        <div className={styles.wrapperRightList}>
                            <span style={{ color: 'rgb(128, 128, 137)' }}>Giao tới</span>
                            <a>Thay đổi</a>
                        </div>
                        <div style={{ paddingTop: '8px' }}>
                            <span>
                                {user?.name || 'Ha Tuan'} | {user?.phone || '01920390912'}
                            </span>
                        </div>
                        <div style={{ paddingTop: '8px', color: 'rgb(128, 128, 137)', paddingBottom: '16px' }}>
                            <span>
                                <span style={{ color: 'rgb(0, 171, 86)', backgroundColor: 'rgb(239, 255, 244)' }}>
                                    Nhà{' '}
                                </span>
                                {user?.address}
                            </span>
                        </div>
                    </div>
                    <div style={{ marginTop: '16px' }}>
                        <div className={styles.wrapperRight}>
                            <div className={styles.wrapperRightList}>
                                <span style={{ color: 'rgb(128, 128, 137)' }}>Tiki khuyến mãi</span>
                                <a>Có thể chọn</a>
                            </div>
                            <div>
                                <div className={styles.carfreeshiplist}>
                                    <img
                                        width="44px"
                                        height="44px"
                                        className={styles.carfreeship}
                                        src={carfreeship}
                                        alt=""
                                    />
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '16px' }}>
                        <div className={styles.wrapperRight}>
                            <div className={styles.wrapperRightList}>
                                <p style={{ color: 'rgb(128, 128, 137)', fontWeight: '500' }}>Tạm tính</p>
                                <span>{convertPrice(location.state.itemPrices)}</span>
                            </div>
                            <div className={styles.wrapperRightList}>
                                <p style={{ color: 'rgb(128, 128, 137)', fontWeight: '500' }}>Giảm giá từ Deal</p>
                                <span style={{ color: 'green' }}>{convertPrice(location.state.priceDisCountMemo)}</span>
                            </div>
                            <div className={styles.wrapperRightList}>
                                <p style={{ color: 'rgb(128, 128, 137)', fontWeight: '500' }}>Phí giao hàng</p>
                                <span style={{ color: 'green' }}>-{convertPrice(location.state.diliveryMemo)}</span>
                            </div>
                            <div className={styles.wrapperRightList}>
                                <span style={{ color: ' rgb(39, 39, 42)' }}>Tổng tiền</span>
                                <span style={{ color: 'red' }} className={styles.price}>
                                    {convertPrice(location.state.totalPrice)}
                                </span>
                            </div>
                            <span
                                style={{
                                    color: 'rgb(0, 171, 86)',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                Tiet kiem
                            </span>
                            <span
                                style={{
                                    color: 'rgb(128, 128, 137)',
                                    fontSize: '12px',
                                    lineHeight: '20px',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                Đã bao gồm thuế VAT (nếu có)
                            </span>
                            <div style={{ paddingTop: '10px' }}>
                                <button className={styles.muangay} onClick={handleAddOrder}>
                                    Mua ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Payment;

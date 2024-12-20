import React, { useEffect, useState } from 'react';
import styles from '../../pages/Payment/Payment.module.scss';
import { Col, Row, Radio, message } from 'antd';
import { removeAllOrder } from '../../redux/slides/OrderSlide';
import now from '../../assets/now.png';
import thanhtoanbangtienmat from '../../assets/thanhtoanbangtienmat.png';
import thetindung from '../../assets/thetindung.png';
import viettelmoney from '../../assets/viettelmoney.png';
import vnpay from '../../assets/vnpay.png';
import zalopay from '../../assets/zalopay.png';
import carfreeship from '../../../src/assets/carfreeshsip.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { convertPrice, PaymentMethod } from '../../ultil';
import * as Orderservice from '../../service/OrderService';
import { useMutationHooks } from '../../hooks/useMutationHook';
import { useLocation, useNavigate } from 'react-router-dom';
import { Laixe } from '../../components/IconComponent/IconComponent';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import FooterComponent from '../../components/FooterComponent/FooterComponent';

const initialOptions = {
    clientId: 'AWsTDr5gCu7lfRTTQsMnYYjxT43QjL-CVf79Mmx0vmhUIa-U_q6rjUT8BS_HNy_s-V6Wwq4pyrwJ227b',
    currency: 'USD',
    intent: 'capture',
};

function Payment() {
    const user = useSelector((state) => state.user);
    const location = useLocation();

    console.log(location);
    const [selectedShipping, setSelectedShipping] = useState('giaosieutoc');
    const [idProduct, setIdProduct] = useState([]);
    const navigate = useNavigate();

    const [shippingFee, setShippingFee] = useState(25000);

    const handleShippingChange = (e) => {
        const { value } = e.target;
        setSelectedShipping(value);

        if (value === 'giaosieutoc') {
            setShippingFee(25000);
        } else if (value === 'giaotietkiem') {
            setShippingFee(16000);
        }
    };

    const dispatch = useDispatch();

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('tienmat');

    const handleChange = (e) => {
        setSelectedPaymentMethod(e.target.value);
    };
    const { payment } = PaymentMethod();
    const selectedPaymentDescription = payment[selectedPaymentMethod];

    const totalPrice = location.state.totalPrice + shippingFee;

    const handleAddOrder = async () => {
        if (user.address) {
            try {
                const orderData = {
                    orderItems: location.state.cartItems,
                    payment: selectedPaymentDescription,
                    shippingPrice: shippingFee,
                    totalPrice: totalPrice,
                    user: user?.id,
                };
                const response = await Orderservice.createOrder(orderData);

                if (response && response.status === 'error') {
                    if (response.details && response.details.length > 0) {
                        const messages = response.details.map(
                            (item) => `Sản phẩm với ID ${item.productId} không đủ số lượng tồn kho hoặc không tồn tại.`,
                        );
                        message.error(messages.join(' '));
                    } else {
                        message.error('Sản phẩm trong kho đã hết! Vui lòng quay lại sau');
                    }
                } else {
                    const orderId = response.data?.orderId;
                    localStorage.setItem('orderId', orderId);
                    dispatch(removeAllOrder({ listChecked: idProduct }));
                    message.success('Đặt hàng thành công');
                    navigate('ordersuccess', {
                        state: {
                            payment: selectedPaymentDescription,
                            totalprice: location.state.totalPrice,
                        },
                    });
                }
            } catch (error) {
                // Xử lý lỗi khi gọi API
                message.error(error?.response?.data?.message || 'Có lỗi xảy ra, vui lòng thử lại.');
            }
        } else {
            navigate('/profile_page');
        }
    };

    const paymentMethods = [
        { value: 'tienmat', label: 'Thanh toán bằng tiền mặt', icon: thanhtoanbangtienmat },
        { value: 'thetindung', label: 'Thanh toán bằng thẻ tín dụng', icon: thetindung },
        { value: 'viettelmoney', label: 'Thanh toán bằng ViettelMoney', icon: viettelmoney },
        { value: 'zalopay', label: 'Thanh toán bằng ZaloPay', icon: zalopay },
        { value: 'vnpay', label: 'Thanh toán bằng PayPal', icon: vnpay },
    ];
    const ShipMethods = [
        { value: 'giaosieutoc', label: 'Giao siêu tốc 2h', icon: now, discount: '-25k' },
        { value: 'giaotietkiem', label: 'Giao tiết kiệm', icon: null, discount: '-16k' },
    ];

    console.log(location.state?.cartItems);
    const cartItems = location?.state?.cartItems;
    console.log(cartItems);
    console.log(location.state);

    return (
        <div>
            <PayPalScriptProvider options={initialOptions}>
                <div className={styles.wrapper}>
                    <Row>
                        <Col span={17}>
                            <div style={{ backgroundColor: '#fff', padding: '8px', marginBottom: '16px' }}>
                                <div style={{ backgroundColor: '#fff', paddingTop: '8px' }}>
                                    <h2 style={{ marginLeft: '16px', marginBottom: '16px' }}>Giỏ hàng</h2>
                                    {cartItems?.length > 0 ? (
                                        cartItems.map((cartItem, index) => {
                                            return (
                                                <div key={index}>
                                                    <div className={styles.PaymentWrapper} key={cartItem.productId}>
                                                        <div className={styles.test}>
                                                            <img
                                                                src="https://salt.tikicdn.com/ts/upload/ad/b7/93/7094a85d0b6d299f30ed89b03511deb9.png"
                                                                width="24px"
                                                                height="24px"
                                                                alt=""
                                                            />
                                                            Gói: Giao siêu tốc 2h, trước 10h ngày mai
                                                        </div>
                                                        <div className={styles.PaymentWrapperLeft}>
                                                            <div className={styles.wrapperItem}>
                                                                <div
                                                                    style={{
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                    }}
                                                                >
                                                                    <img src={now} alt="" width="32px" height="16px" />
                                                                    <span style={{ marginLeft: '8px' }}>
                                                                        Giao siêu tốc 2h
                                                                    </span>
                                                                </div>
                                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                    <span
                                                                        style={{
                                                                            textDecoration: 'line-through',
                                                                            color: 'rgb(128, 128, 137)',
                                                                            fontWeight: '500',
                                                                        }}
                                                                    >
                                                                        {convertPrice(25000)}
                                                                    </span>
                                                                    <span
                                                                        style={{
                                                                            marginLeft: '8px',
                                                                            color: 'rgb(0, 171, 86) ',
                                                                            fontWeight: '500',
                                                                        }}
                                                                    >
                                                                        MIỄN PHÍ
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                <div>
                                                                    <img
                                                                        src={cartItem.image}
                                                                        width="48px"
                                                                        height="48px"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        marginLeft: '8px',
                                                                        color: 'rgb(128, 128, 137)',
                                                                        fontWeight: '450',
                                                                        fontSize: '1.5rem',
                                                                    }}
                                                                >
                                                                    <span>{cartItem.name}</span>
                                                                    <div
                                                                        style={{
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginTop: '10px',
                                                                        }}
                                                                    >
                                                                        <div>SL:X{cartItem.quantity}</div>
                                                                        <span
                                                                            style={{
                                                                                color: 'red',
                                                                                fontWeight: '500',
                                                                                fontSize: '1.5rem',
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    color: ' rgb(128, 128, 137)',
                                                                                    textDecoration: ' line-through',
                                                                                    marginRight: '8px',
                                                                                }}
                                                                            >
                                                                                {convertPrice(cartItem.price * 1.3)}
                                                                            </span>
                                                                            {convertPrice(
                                                                                cartItem.price * cartItem.quantity,
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={styles.PaymentWrapperRight}>
                                                            <span>
                                                                <Laixe></Laixe>
                                                                Được giao bởi TikiNOW Smart Logistics (giao từ Hà Nội)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <p>Không có sản phẩm nào trong giỏ hàng.</p>
                                    )}

                                    <p style={{ marginLeft: '16px', fontSize: '1.6rem', marginTop: '16px' }}>
                                        Chọn hình thức thanh toán
                                    </p>

                                    <div className={styles.hinhthucthanhtoan}>
                                        {paymentMethods.map((method) => (
                                            <div
                                                key={method.value}
                                                style={{ display: 'flex', alignItems: 'center', paddingBottom: '8px' }}
                                            >
                                                <Radio
                                                    onClick={handleChange}
                                                    value={method.value}
                                                    checked={selectedPaymentMethod === method.value}
                                                >
                                                    <img
                                                        width="32px"
                                                        height="32px"
                                                        src={method.icon}
                                                        alt={method.label}
                                                    />
                                                    <span style={{ marginLeft: '8px' }}>{method.label}</span>
                                                </Radio>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p style={{ marginLeft: '16px', fontSize: '1.6rem' }}>Chọn hình thức giao hàng</p>
                                    <div className={styles.hinhthucthanhtoan}>
                                        {ShipMethods.map((method) => (
                                            <div
                                                key={method.value}
                                                style={{ display: 'flex', alignItems: 'center', paddingBottom: '8px' }}
                                            >
                                                <Radio
                                                    checked={selectedShipping === method.value}
                                                    value={method.value}
                                                    onChange={handleShippingChange}
                                                >
                                                    {method.icon && (
                                                        <img
                                                            src={method.icon}
                                                            alt={method.label}
                                                            width="32px"
                                                            height="16px"
                                                        />
                                                    )}
                                                    <span style={{ marginLeft: '8px' }}>{method.label}</span>
                                                    <div className={styles.priceShip}>
                                                        <span>{method.discount}</span>
                                                    </div>
                                                </Radio>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className={styles.wrapperRight}>
                                <div className={styles.wrapperRightList}>
                                    <span style={{ color: 'rgb(128, 128, 137)' }}>Giao tới</span>
                                    <a href="/profile_page">Thay đổi</a>
                                </div>
                                <div style={{ paddingTop: '8px' }}>
                                    <span>
                                        {user?.name || 'Ha Tuan'} | {user?.phone || '01920390912'}
                                    </span>
                                </div>
                                <div style={{ paddingTop: '8px', color: 'rgb(128, 128, 137)', paddingBottom: '16px' }}>
                                    <span>
                                        <span
                                            style={{ color: 'rgb(0, 171, 86)', backgroundColor: 'rgb(239, 255, 244)' }}
                                        >
                                            Nhà{' '}
                                        </span>
                                        {user?.address}
                                    </span>
                                </div>
                            </div>
                            <div style={{ marginTop: '16px' }}>
                                <div className={styles.wrapperRight}>
                                    <div className={styles.wrapperRightList}>
                                        <span style={{ color: 'rgb(128, 128, 137)', paddingBottom: '16px' }}>
                                            Tiki khuyến mãi
                                        </span>
                                        co the chon
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
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    marginLeft: '40px',
                                                }}
                                            >
                                                <span style={{ marginRight: '8px' }}>Giảm 50%</span>
                                                <button className={styles.bochon}>Bỏ chọn</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '16px' }}>
                                <div className={styles.wrapperRight}>
                                    <div className={styles.wrapperRightList}>
                                        <p style={{ color: 'rgb(128, 128, 137)', fontWeight: '500' }}>Tạm tính</p>
                                        <span>{convertPrice(location.state.totalPrice)}</span>
                                    </div>
                                    <div className={styles.wrapperRightList}>
                                        <p style={{ color: 'rgb(128, 128, 137)', fontWeight: '500' }}>
                                            Giảm giá từ Deal
                                        </p>
                                        <span style={{ color: 'green' }}>
                                            {convertPrice(location.state.priceDisCountMemo)}
                                        </span>
                                    </div>
                                    <div className={styles.wrapperRightList}>
                                        <p style={{ color: 'rgb(128, 128, 137)', fontWeight: '500' }}>Phí giao hàng</p>
                                        <span style={{ color: 'green' }}>{convertPrice(shippingFee)}</span>
                                    </div>
                                    <div className={styles.wrapperRightList}>
                                        <span style={{ color: ' rgb(39, 39, 42)' }}>Tổng tiền</span>
                                        <span style={{ color: 'red' }} className={styles.price}>
                                            {convertPrice(totalPrice)}
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
                                        Tiết kiệm
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
                                        {selectedPaymentMethod === 'vnpay' ? (
                                            <PayPalButtons
                                                style={{
                                                    layout: 'vertical',
                                                    color: 'blue',
                                                    shape: 'rect',
                                                    label: 'pay',
                                                }}
                                                createOrder={(data, actions) => {
                                                    return actions.order.create({
                                                        purchase_units: [
                                                            {
                                                                amount: {
                                                                    value: totalPrice.toFixed(2), // Số tiền bạn muốn thanh toán
                                                                },
                                                            },
                                                        ],
                                                    });
                                                }}
                                                onApprove={async (data, actions) => {
                                                    const details = await actions.order.capture();

                                                    handleAddOrder(); // Gọi hàm handleAddOrder khi thanh toán thành công
                                                }}
                                                onError={(err) => {
                                                    console.error('PayPal Checkout onError', err);
                                                }}
                                            />
                                        ) : (
                                            <button className={styles.muangay} onClick={handleAddOrder}>
                                                Đặt ngay
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </PayPalScriptProvider>
            <FooterComponent></FooterComponent>
        </div>
    );
}

export default Payment;

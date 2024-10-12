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
function Payment() {
    const user = useSelector((state) => state.user);
    const location = useLocation();
    const [selectedShipping, setSelectedShipping] = useState('giaosieutoc');
    const [idProduct, setIdProduct] = useState([]);

    const products = location.state.orderItems;

    useEffect(() => {
        const ids = products.map((product) => product.product);
        setIdProduct(ids);
    }, [products]);

    const [shippingFee, setShippingFee] = useState(-25000); // Phí giao siêu tốc mặc định

    const handleShippingChange = (e) => {
        const { value } = e.target;
        setSelectedShipping(value);

        if (value === 'giaosieutoc') {
            setShippingFee(-25000);
        } else if (value === 'giaotietkiem') {
            setShippingFee(-16000);
        }
    };

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('tienmat');

    const handleChange = (e) => {
        setSelectedPaymentMethod(e.target.value);
    };
    const { payment } = PaymentMethod();
    const selectedPaymentDescription = payment[selectedPaymentMethod];

    const mutationAddOrder = useMutationHooks((data) => Orderservice.createOrder(data));

    const totalPrice = location.state.totalPrice + shippingFee;
    const handleAddOrder = () => {
        mutationAddOrder.mutate(
            {
                orderItems: location.state.orderItems,
                payment: selectedPaymentDescription,
                itemPrices: location.state.itemPrices,
                city: user?.city,
                phone: user?.phone,
                name: user?.name,
                shippingPrice: shippingFee,
                address: user?.address,
                totalPrice: totalPrice,
                user: user?.id,
            },
            {
                onSuccess: () => {
                    if (mutationAddOrder.data.status === 'err') {
                        message.error('Sản phẩm trong kho đã hết ! Vui lòng quay lại sau');
                    } else {
                        dispatch(removeAllOrder({ listChecked: idProduct }));
                        message.success('Đặt hàng thành công');
                    }
                },
                onError: (error) => {
                    if (error?.response?.data?.status === 'err') {
                        message.error(error.response.data.message || 'Có lỗi xảy ra, vui lòng thử lại.');
                    } else if (error?.message) {
                        message.error(error.message);
                    } else {
                        message.error('Có lỗi xảy ra, vui lòng thử lại.');
                    }
                },
            },
        );
    };

    const paymentMethods = [
        { value: 'tienmat', label: 'Thanh toán bằng tiền mặt', icon: thanhtoanbangtienmat },
        { value: 'thetindung', label: 'Thanh toán bằng thẻ tín dụng', icon: thetindung },
        { value: 'viettelmoney', label: 'Thanh toán bằng ViettelMoney', icon: viettelmoney },
        { value: 'zalopay', label: 'Thanh toán bằng ZaloPay', icon: zalopay },
        { value: 'vnpay', label: 'Thanh toán bằng VnPay', icon: vnpay },
    ];
    const ShipMethods = [
        { value: 'giaosieutoc', label: 'Giao siêu tốc 2h', icon: now, discount: '-25k' },
        { value: 'giaotietkiem', label: 'Giao tiết kiệm', icon: null, discount: '-16k' },
    ];

    return (
        <div className={styles.wrapper}>
            <Row>
                <Col span={17}>
                    <div style={{ backgroundColor: '#fff' }}>
                        <div style={{ backgroundColor: '#fff', paddingTop: '8px' }}>
                            <h2 style={{ marginLeft: '16px', marginBottom: '16px' }}>Giỏ hàng</h2>
                            {location.state.orderItems.map((orderItem) => (
                                <div>
                                    <div className={styles.PaymentWrapper} key={orderItem.product}>
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
                                                    <span style={{ marginLeft: '8px' }}>Giao siêu tốc 2h</span>
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
                                                    <img src={orderItem.image} width="48px" height="48px" alt="" />
                                                </div>
                                                <div
                                                    style={{
                                                        marginLeft: '8px',
                                                        color: 'rgb(128, 128, 137)',
                                                        fontWeight: '450',
                                                        fontSize: '1.5rem',
                                                    }}
                                                >
                                                    <span>{orderItem.name}</span>
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            marginTop: '10px',
                                                        }}
                                                    >
                                                        <div>SL:X{orderItem.amount}</div>
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
                                                                {convertPrice(orderItem.price * 1.3)}
                                                            </span>
                                                            {convertPrice(orderItem.price)}
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
                            ))}

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
                                            <img width="32px" height="32px" src={method.icon} alt={method.label} />
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
                                                <img src={method.icon} alt={method.label} width="32px" height="16px" />
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
                                <span style={{ color: 'rgb(128, 128, 137)', paddingBottom: '16px' }}>
                                    Tiki khuyến mãi
                                </span>
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
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                                <span>{convertPrice(location.state.itemPrices)}</span>
                            </div>
                            <div className={styles.wrapperRightList}>
                                <p style={{ color: 'rgb(128, 128, 137)', fontWeight: '500' }}>Giảm giá từ Deal</p>
                                <span style={{ color: 'green' }}>
                                    -{convertPrice(location.state.priceDisCountMemo)}
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
                                <button className={styles.muangay} onClick={handleAddOrder}>
                                    Đặt ngay
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

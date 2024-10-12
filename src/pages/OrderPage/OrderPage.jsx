import React, { useMemo, useState } from 'react';
import styles from '../../pages/OrderPage/OrderPage.module.scss';
import { Col, Row, Steps, Checkbox } from 'antd';
import topdeal from '../../assets/topdeal.png';
import chinhhang from '../../assets/chinhhang.png';
import doitrahang from '../../assets/doitra.png';
import now from '../../assets/now.png';
import carfreeship from '../../../src/assets/carfreeshsip.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseOrder, increaseOrder, removeOrder, removeAllOrder } from '../../redux/slides/OrderSlide';
import { convertPrice } from '../../ultil';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

function OrderPage() {
    const orderItems = useSelector((state) => state.order.orderItems);
    const [listCheck, setlistChecked] = useState([]);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const onChange = (e) => {
        const value = e.target.value;
        if (listCheck.includes(value)) {
            const newListChecked = listCheck.filter((item) => item !== value);
            setlistChecked(newListChecked); // Xóa sản phẩm khỏi danh sách
        } else {
            setlistChecked([...listCheck, value]); // Thêm sản phẩm vào danh sách
        }
    };
    const listChecked = listCheck.length === orderItems.length;

    const onChangeAll = (e) => {
        if (e.target.checked) {
            const newListCheck = [];
            orderItems?.forEach((order) => {
                newListCheck.push(order?.product);
            });
            setlistChecked(newListCheck);
        } else {
            setlistChecked([]);
        }
    };
    const handleOnclickDecrease = (idProduct) => {
        dispatch(decreaseOrder({ idProduct }));
    };

    const handleOnclickIncrease = (idProduct) => {
        dispatch(increaseOrder({ idProduct }));
    };

    const handleDeleteProduct = (idProduct) => {
        dispatch(removeOrder({ idProduct }));
    };

    const handleDeleteAllProduct = () => {
        dispatch(
            removeAllOrder({
                listChecked: listCheck, // Đảm bảo key là listChecked
            }),
        );
    };

    const priceDisCountMemo = useMemo(() => {
        const result = orderItems
            .filter((item) => listCheck.includes(item.product)) // Chỉ tính cho những sản phẩm đã được chọn
            .reduce((total, cur) => {
                const discountAmount = cur.price * cur.amount * (cur.discount / 100);
                return total + discountAmount;
            }, 0);
        return result;
    }, [orderItems, listCheck]);

    const selectedOrderItems = orderItems.filter((order) => listCheck.includes(order.product));

    const priceMemo = useMemo(() => {
        const result = orderItems
            .filter((item) => listCheck.includes(item.product)) // Chỉ tính cho những sản phẩm đã được chọn
            .reduce((total, cur) => {
                return total + cur.price * cur.amount;
            }, 0);
        return result;
    }, [orderItems, listCheck]);

    const diliveryMemo = useMemo(() => {
        if (priceMemo > 500000) {
            return 0;
        } else if (priceMemo > 250) {
            return 10000;
        } else {
            return 0;
        }
    }, [priceMemo]);

    const totalPriceMemo = useMemo(() => {
        return Number(priceMemo) - Number(priceDisCountMemo) + Number(diliveryMemo);
    }, [priceMemo, priceDisCountMemo, diliveryMemo]);

    const navigate = useNavigate();
    const handleOrder = () => {
        if (selectedOrderItems.length === 0) {
            message.error('Vui lòng chọn ít nhất một sản phẩm để thanh toán.');
            return; // Ngăn không cho tiếp tục
        }
        navigate('/payment', {
            state: {
                orderItems: selectedOrderItems,
                itemPrices: priceMemo,
                diliveryMemo: diliveryMemo,
                totalPrice: totalPriceMemo,
                priceDisCountMemo: priceDisCountMemo,
            },
        });
    };

    return (
        <div className={styles.wrapper}>
            <h2>Giỏ hàng</h2>
            <Row>
                <Col span={17}>
                    <div className={styles.wrapperTitle}>
                        <div style={{ flex: '3', display: 'flex', alignItems: 'center' }}>
                            <Checkbox onChange={onChangeAll} checked={listChecked}></Checkbox>
                            <div style={{ marginLeft: '4px' }}>Tất cả ({orderItems.length}) sản phẩm</div>
                        </div>
                        <div style={{ flex: '1', color: 'rgb(120, 120, 120)' }}>Đơn giá</div>
                        <div style={{ flex: '1', color: 'rgb(120, 120, 120)' }}>Số lượng</div>
                        <div style={{ flex: '1', color: 'rgb(120, 120, 120)' }}>Thành tiền</div>
                        <div style={{ color: 'rgb(120, 120, 120)' }}>
                            <img
                                onClick={handleDeleteAllProduct}
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                                alt=""
                            />
                        </div>
                    </div>

                    {orderItems.map((orderItem) => (
                        <div className={styles.wrapperTitle} key={orderItem.product}>
                            <div style={{ flex: '3', display: 'flex', alignItems: 'center' }}>
                                <Checkbox
                                    onChange={onChange}
                                    value={orderItem.product}
                                    checked={listCheck.includes(orderItem.product)}
                                ></Checkbox>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ marginLeft: '6px' }}>
                                        <img width="80px" height="80px" src={orderItem.image} alt="" />
                                    </div>
                                    <div style={{ padding: '8px', marginLeft: '8px' }}>
                                        <div>
                                            <img src={topdeal} className={styles.warpperIconItem} alt="" />
                                            <img src={chinhhang} className={styles.warpperIconItem} alt="" />
                                            <img src={doitrahang} className={styles.warpperIconItem} alt="" />
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
                                            <img src={now} alt="" width="32px" height="16px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ flex: '1', color: 'red', fontWeight: '500' }}>
                                {convertPrice(orderItem.price)}
                            </div>
                            <div style={{ flex: '1', color: 'rgb(120, 120, 120)' }}>
                                <div className={styles.quantity}>
                                    <span
                                        className={styles.imgQuantityminus}
                                        onClick={() => handleOnclickDecrease(orderItem.product)}
                                    >
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
                                            alt=""
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </span>
                                    <input type="text" className={styles.inputQuantity} value={orderItem.amount} />
                                    <span
                                        className={styles.imgQuantitySum}
                                        onClick={() => handleOnclickIncrease(orderItem.product)}
                                    >
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg"
                                            alt=""
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </span>
                                </div>
                            </div>
                            <div style={{ flex: '1', color: 'red', fontWeight: '500' }}>
                                {convertPrice(orderItem.price * orderItem.amount)}
                            </div>
                            <div style={{ color: 'rgb(120, 120, 120)' }}>
                                <img
                                    onClick={() => handleDeleteProduct(orderItem.product)}
                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    ))}
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
                                <span>{convertPrice(priceMemo)}</span>
                            </div>
                            <div className={styles.wrapperRightList}>
                                <p style={{ color: 'rgb(128, 128, 137)', fontWeight: '500' }}>Giảm giá từ Deal</p>
                                <span style={{ color: 'green' }}>-{convertPrice(priceDisCountMemo)}</span>
                            </div>
                            <div className={styles.wrapperRightList}>
                                <p style={{ color: 'rgb(128, 128, 137)', fontWeight: '500' }}>Phí giao hàng</p>
                                <span style={{ color: 'green' }}>{convertPrice(diliveryMemo)}</span>
                            </div>
                            <div className={styles.wrapperRightList}>
                                <span style={{ color: ' rgb(39, 39, 42)' }}>Tổng tiền</span>
                                <span style={{ color: 'red' }} className={styles.price}>
                                    {convertPrice(totalPriceMemo)}
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
                                <button className={styles.muangay} onClick={handleOrder}>
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

export default OrderPage;

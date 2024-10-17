import React, { useEffect, useMemo, useState } from 'react';
import styles from '../../pages/OrderPage/OrderPage.module.scss';
import { Col, Row, Checkbox } from 'antd';
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
import * as Cartservice from '../../service/CartService';
function OrderPage() {
    const [listCheck, setlistChecked] = useState([]);
    const orderItems = useSelector((state) => state.order.orderItems);
    console.log(orderItems.length);
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [orders, setOrder] = useState([]);
    const [quantities, setQuantities] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        const featchOrderItems = async () => {
            try {
                const res = await Cartservice.getCartUser(user.id);

                setOrder(res.data);
                const initialQuantities = {};
                res.data.items.forEach((item) => {
                    initialQuantities[item.product] = item.amount;
                });
                setQuantities(initialQuantities);
            } catch (error) {
                console.error(error);
            }
        };

        featchOrderItems();
    }, [user.id]);
    const userId = user.id;

    const handleOnclickDecrease = async (productId, altam) => {
        try {
            const newAmount = quantities[productId] - 1;

            if (newAmount < 1) return;

            const data = { userId, productId, altam };
            await Cartservice.AlterAmount(data);

            const updatedCart = await Cartservice.getCartUser(userId);
            setOrder(updatedCart.data);
            setQuantities((prev) => newAmount);
        } catch (error) {
            console.error(error);
        }
    };

    const handleOnclickIncrease = async (productId, altam) => {
        try {
            const newAmount = quantities[productId] + 1;
            const data = { userId, productId, altam };
            await Cartservice.AlterAmount(data);

            const updatedCart = await Cartservice.getCartUser(userId);
            setOrder(updatedCart.data);
            setQuantities(newAmount);
        } catch (error) {
            console.error(error);
        }
    };

    const onChange = (e) => {
        const value = e.target.value;
        if (listCheck.includes(value)) {
            const newListChecked = listCheck.filter((item) => item !== value);
            setlistChecked(newListChecked);
        } else {
            setlistChecked([...listCheck, value]);
        }
    };

    const handleOnChangeAll = (e) => {
        if (e.target.checked) {
            const newCheck = [];
            orders.items.forEach((item) => {
                newCheck.push(item.product);
            });
            setlistChecked(newCheck);
        } else {
            setlistChecked([]);
        }
    };
    const priceMemo = useMemo(() => {
        const result = orders?.items
            ?.filter((item) => listCheck.includes(item.product))
            .reduce((total, cur) => {
                return total + cur.price * cur.amount;
            }, 0);
        return result;
    }, [orders.items, listCheck]);

    const priceDisCountMemo = useMemo(() => {
        const result = orders?.items
            ?.filter((item) => listCheck.includes(item.product))
            .reduce((total, cur) => {
                const discountAmount = cur.price * cur.amount * (cur.discount / 100);
                return total + discountAmount;
            }, 0);
        return -result;
    }, [orders?.items, listCheck]);

    const totalPriceMemo = useMemo(() => {
        return Number(priceMemo) + Number(priceDisCountMemo);
    }, [priceMemo, priceDisCountMemo]);

    const allChecked = orders?.items?.every((item) => listCheck.includes(item.product));

    const orderID = orders._id;
    const handleDeleteById = async (idProduct) => {
        const data = {
            orderID,
            idProduct,
        };
        await Cartservice.deleteCartById(data);
        dispatch(removeOrder({ idProduct }));
    };
    const handleDeleteAllProduct = () => {
        dispatch(
            removeAllOrder({
                listChecked: listCheck,
            }),
        );
    };
    const selectedOrderItems = orderItems.filter((order) => listCheck.includes(order.product));
    const handleOrder = () => {
        if (selectedOrderItems.length === 0) {
            message.error('Vui lòng chọn ít nhất một sản phẩm để thanh toán.');
            return;
        }

        navigate('/payment', {
            state: {
                orderItems: selectedOrderItems,
                itemPrices: priceMemo,
                totalPrice: totalPriceMemo,
                priceDisCountMemo: priceDisCountMemo,
            },
        });
    };

    return (
        <div>
            {orderItems.length === 0 ? (
                <div className={styles.wrapper}>
                    <div className={styles.cardEmpty}>
                        <img
                            src="https://salt.tikicdn.com/ts/upload/43/fd/59/6c0f335100e0d9fab8e8736d6d2fbcad.png"
                            width="160px"
                            height="160px"
                        ></img>
                        <p style={{ fontSize: '1.6rem', fontWeight: '500' }}>Giỏ hàng trống</p>
                        <p style={{ fontSize: '1.3rem' }}>Tham khảo thêm bên nhé bạn IU</p>
                    </div>
                </div>
            ) : (
                <div className={styles.wrapper}>
                    <h2>Giỏ hàng</h2>
                    <Row>
                        <Col span={17}>
                            <div className={styles.wrapperTitle}>
                                <div style={{ flex: '3', display: 'flex', alignItems: 'center' }}>
                                    <Checkbox onChange={handleOnChangeAll} checked={allChecked}></Checkbox>
                                    <div style={{ marginLeft: '4px' }}>Tất cả sản phẩm</div>
                                </div>
                                <div style={{ flex: '1', color: 'rgb(120, 120, 120)' }}>Đơn giá</div>
                                <div style={{ flex: '1', color: 'rgb(120, 120, 120)' }}>Số lượng</div>
                                <div style={{ flex: '1', color: 'rgb(120, 120, 120)' }}>Thành tiền</div>
                                <div style={{ color: 'rgb(120, 120, 120)' }}>
                                    <img
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                                        alt=""
                                        onClick={handleDeleteAllProduct}
                                    />
                                </div>
                            </div>

                            {orders && orders?.items && orders?.items?.length > 0 ? (
                                orderItems.map((orderItem) => (
                                    <div className={styles.wrapperTitle} key={orderItem.product}>
                                        <div style={{ flex: '3', display: 'flex', alignItems: 'center' }}>
                                            <Checkbox
                                                value={orderItem.product}
                                                onChange={onChange}
                                                checked={listCheck.includes(orderItem.product)}
                                            ></Checkbox>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <div style={{ marginLeft: '6px' }}>
                                                    <img width="80px" height="80px" src={orderItem.image} alt="" />
                                                </div>
                                                <div style={{ padding: '8px', marginLeft: '8px' }}>
                                                    <div>
                                                        <img src={topdeal} className={styles.warpperIconItem} alt="" />
                                                        <img
                                                            src={chinhhang}
                                                            className={styles.warpperIconItem}
                                                            alt=""
                                                        />
                                                        <img
                                                            src={doitrahang}
                                                            className={styles.warpperIconItem}
                                                            alt=""
                                                        />
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
                                                    onClick={() => handleOnclickDecrease(orderItem.product, 'decreasa')}
                                                >
                                                    <img
                                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
                                                        alt=""
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                </span>
                                                <input
                                                    type="text"
                                                    className={styles.inputQuantity}
                                                    value={orderItem.amount}
                                                    readOnly
                                                />
                                                <span
                                                    className={styles.imgQuantitySum}
                                                    onClick={() => handleOnclickIncrease(orderItem.product, 'increasa')}
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
                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                                                onClick={() => handleDeleteById(orderItem.product)}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Không có sản phẩm nào trong giỏ hàng.</p>
                            )}
                        </Col>
                        <Col span={6}>
                            <div className={styles.wrapperRight}>
                                <div className={styles.wrapperRightList}>
                                    <span style={{ color: 'rgb(128, 128, 137)' }}>Giao tới</span>
                                    <a href="profile_page">Thay đổi</a>
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
                                        <p style={{ color: 'rgb(128, 128, 137)', fontWeight: '500' }}>
                                            Giảm giá từ Deal
                                        </p>
                                        <span style={{ color: 'green' }}>{convertPrice(priceDisCountMemo)}</span>
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
            )}
        </div>
    );
}

export default OrderPage;

// chinh sua luu xuong database
// chinh sua updateuser

import React, { useEffect, useMemo, useState } from 'react';
import styles from '../../pages/OrderPage/OrderPage.module.scss';
import { Col, Row, Checkbox, Empty } from 'antd';
import topdeal from '../../assets/topdeal.png';
import chinhhang from '../../assets/chinhhang.png';
import doitrahang from '../../assets/doitra.png';
import now from '../../assets/now.png';
import * as ShipService from '../../service/ShipService';
import { useDispatch, useSelector } from 'react-redux';
import { convertPrice } from '../../ultil';
import { message } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Cartservice from '../../service/CartService';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import { clearCart, decreaseItem, increaseItem, removeItem, removeAllOrder } from '../../redux/slides/CartSlide';
function OrderPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [listCheck, setlistChecked] = useState([]);
    const [checkall, setCheckAll] = useState(false);
    const [address, setAddress] = useState([]);
    const location = useLocation();
    const cartItems = useSelector((state) => state.cart.items);
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [orders, setOrder] = useState([]);
    const [carts, setCart] = useState([]);
    const dispatch = useDispatch();

    const userId = user.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Cartservice.getAllProductByCart(user?.id);
                const data = await response.json();
                setCart(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleOnclickDecrease = async (productId, altam) => {
        try {
            console.log(productId, altam);
            const data = { userId, productId, altam };

            await Cartservice.AlterAmount(data);

            const updatedCart = await Cartservice.getCartUser(userId);
            setOrder(updatedCart.data);
            dispatch(decreaseItem({ productId }));
        } catch (error) {
            console.error(error);
        }
    };
    const handleOnclickIncrease = async (productId, altam) => {
        try {
            console.log(productId, altam);
            const data = { userId, productId, altam };
            await Cartservice.AlterAmount(data);
            const updatedCart = await Cartservice.getCartUser(userId);
            setOrder(updatedCart.data);
            dispatch(increaseItem({ productId }));
        } catch (error) {
            console.error(error);
        }
    };

    const priceMemo = useMemo(() => {
        const result = cartItems
            ?.filter((item) => listCheck.includes(item.productId))
            .reduce((total, cur) => {
                return total + cur.price * cur.quantity;
            }, 0);
        return result;
    }, [cartItems, listCheck]);

    const priceDisCountMemo = useMemo(() => {
        const result = cartItems
            ?.filter((item) => listCheck.includes(item.productId))
            .reduce((total, cur) => {
                const discountAmount = (cur.price * cur.quantity * cur.discount) / 100;
                return total + discountAmount;
            }, 0);
        return -result;
    }, [cartItems, listCheck]);
    const totalPriceMemo = useMemo(() => {
        return Number(priceMemo) + Number(priceDisCountMemo);
    }, [priceMemo, priceDisCountMemo]);
    const cart = useSelector((state) => state.cart.cartId);

    const handleDelete = async (productId) => {
        const data = {
            cart,
            productId: productId,
        };

        try {
            await Cartservice.deleteCartById(data);
            dispatch(removeItem({ productId }));
        } catch (error) {
            console.error('Error deleting product from cart:', error.message);
        }
    };

    const selectedOrderItems = cartItems?.filter((order) => listCheck?.includes(order.productId));

    const handleOrder = () => {
        if (selectedOrderItems.length === 0) {
            message.error('Vui lòng chọn ít nhất một sản phẩm để thanh toán.');
            return;
        }

        dispatch(removeAllOrder({ listChecked: listCheck }));
        navigate('/payment', {
            state: {
                cartItems: selectedOrderItems,
                priceMemo: priceMemo,
                totalPrice: totalPriceMemo,
                priceDisCountMemo: priceDisCountMemo,
            },
        });
    };

    const handleAll = async () => {
        if (listCheck.length === 0) {
            console.error('No products selected to delete.');
            return;
        }
        const data = {
            cart,
            productIds: listCheck,
        };

        try {
            await Cartservice.deleteCartById(data);
            dispatch(removeAllOrder({ listChecked: listCheck }));
        } catch (error) {
            console.error('Error deleting selected products:', error.message);
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

    const allChecked = cartItems.every((item) => listCheck.includes(item.productId));

    const handleOnChangeAll = (e) => {
        if (e.target.checked) {
            const newCheck = [];
            cartItems.forEach((item) => {
                newCheck.push(item.productId);
            });
            setlistChecked(newCheck);
        } else {
            setlistChecked([]);
        }
    };

    const cartId = useSelector((state) => state.cart.cartId);

    useEffect(() => {
        const fetchShippingData = async () => {
            try {
                const res = await Cartservice.getCartById(user?.id, cartId); // Truyền userId trực tiếp
                setAddress(res); // Cập nhật dữ liệu shipping vào state
            } catch (error) {
                console.error(error);
            }
        };

        fetchShippingData();
    }, [cart, user?.id]); // Khi cart hoặc user.id thay đổi thì gọi lại

    return (
        <div>
            <div>
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
                                        onClick={handleAll}
                                    />
                                </div>
                            </div>
                            {cartItems?.map((orderItem) => (
                                <div className={styles.wrapperTitle} key={orderItem.product}>
                                    <div style={{ flex: '3', display: 'flex', alignItems: 'center' }}>
                                        <Checkbox
                                            value={orderItem.productId}
                                            onChange={onChange}
                                            checked={listCheck.includes(orderItem.productId)}
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
                                                onClick={() => handleOnclickDecrease(orderItem.productId, 'decrease')}
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
                                                value={orderItem.quantity}
                                                readOnly
                                            />

                                            <span
                                                className={styles.imgQuantitySum}
                                                onClick={() => handleOnclickIncrease(orderItem.productId, 'increase')}
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
                                        {convertPrice(orderItem.price * orderItem.quantity)}
                                    </div>
                                    <div style={{ color: 'rgb(120, 120, 120)' }}>
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                                            onClick={() => handleDelete(orderItem.productId)}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            ))}
                        </Col>

                        <Col span={6}>
                            <div className={styles.wrapperRight}>
                                <div className={styles.wrapperRightList}>
                                    <span style={{ color: 'rgb(128, 128, 137)' }}>
                                        Giao tới {address?.ward} {address?.district} {address?.city}
                                    </span>

                                    <a href="/ship">Thay đổi</a>
                                </div>
                                <div style={{ paddingTop: '8px' }}>
                                    <span>
                                        {address?.fullname} | {address?.phone}
                                    </span>
                                </div>
                                <div
                                    style={{
                                        paddingTop: '8px',
                                        color: 'rgb(128, 128, 137)',
                                        paddingBottom: '16px',
                                    }}
                                >
                                    <span>
                                        <span
                                            style={{
                                                color: 'rgb(0, 171, 86)',
                                                backgroundColor: 'rgb(239, 255, 244)',
                                            }}
                                        >
                                            Nhà {address?.address}
                                        </span>
                                        {}
                                    </span>
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
            </div>
            <FooterComponent></FooterComponent>
        </div>
    );
}

export default OrderPage;

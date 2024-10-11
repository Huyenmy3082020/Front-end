import React, { useState } from 'react';
import styles from '../../pages/OrderPage/OrderPage.module.scss';
import { Col, Row } from 'antd';
import topdeal from '../../assets/topdeal.png';
import chinhhang from '../../assets/chinhhang.png';
import doitrahang from '../../assets/doitra.png';
import now from '../../assets/now.png';
import { Checkbox } from 'antd';
import { useLocation } from 'react-router-dom';
import { convertPrice } from '../../ultil';
import { useDispatch } from 'react-redux';
import { decreaseOrder, increaseOrder } from '../../redux/slides/OrderSlide';
function OrderPage() {
    const location = useLocation(); // Lấy đối tượng location
    const orderItem = location.state?.orderItem;
    const [valueInput, setValueInput] = useState(1);

    const dispatch = useDispatch();
    const handleOnclickDecrease = () => {
        if (valueInput > 1) {
            dispatch(decreaseOrder({ idProduct: orderItem.product }));
            setValueInput(valueInput - 1); // Giảm giá trị input
        }
    };

    const handleOnclickIncrease = () => {
        dispatch(increaseOrder({ idProduct: orderItem.product }));
        setValueInput(valueInput + 1); // Tăng giá trị input
    };
    console.log(valueInput);
    const handleInputChange = (e) => {
        const newValue = parseInt(e.target.value);
        if (newValue > 0) {
            // Chỉ cho phép số dương
            setValueInput(newValue);
        }
    };

    return (
        <div className={styles.wrapper}>
            <Row>
                <Col span={16}>
                    <h2>Giỏ hàng</h2>
                    <div className={styles.wrapperTitle}>
                        <div style={{ flex: '3', display: 'flex', alignItems: 'center' }}>
                            <Checkbox></Checkbox>
                            <div style={{ marginLeft: '4px' }}>Tất cả ({orderItem.amount}) sản phẩm</div>
                        </div>
                        <div style={{ flex: '1', color: 'rgb(120, 120, 120)' }}>Đơn giá</div>
                        <div style={{ flex: '1', color: 'rgb(120, 120, 120)' }}>Số lượng</div>
                        <div style={{ flex: '1', color: 'rgb(120, 120, 120)' }}>Thành tiền</div>
                        <div style={{ color: 'rgb(120, 120, 120)' }}>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="" />
                        </div>
                    </div>

                    <div className={styles.wrapperTitle}>
                        <div style={{ flex: '3', display: 'flex', alignItems: 'center' }}>
                            <Checkbox></Checkbox>
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
                                                    maxWidth: '240px', // Giới hạn chiều rộng tối đa
                                                    overflow: 'hidden', // Ẩn văn bản vượt quá chiều rộng
                                                    textOverflow: 'ellipsis', // Thêm ba dấu chấm (...) nếu văn bản bị cắt
                                                    whiteSpace: 'normal', // Cho phép xuống dòng
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
                                <span className={styles.imgQuantityminus} onClick={handleOnclickDecrease}>
                                    <img
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
                                        alt=""
                                        style={{ cursor: 'pointer' }}
                                    />
                                </span>
                                <input
                                    onChange={handleInputChange}
                                    type="text"
                                    className={styles.inputQuantity}
                                    value={valueInput}
                                />
                                <span className={styles.imgQuantitySum} onClick={handleOnclickIncrease}>
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
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="" />
                        </div>
                    </div>
                </Col>
                <Col span={6}>asd</Col>
            </Row>
        </div>
    );
}

export default OrderPage;

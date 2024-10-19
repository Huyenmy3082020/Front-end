import React from 'react';
import { Badge, Col, Input } from 'antd';

import {
    WrapperHeader,
    WrapperTextHeader,
    WrapperHeaderAccount,
    StyledTippy,
    WrapperTextIcon,
    WrapperList,
    WrapperListItem,
    WrapperListAccount,
    WrapperListAccountIcon,
    WrapperListAccountAdd,
    WrapperListAccountLink,
    WrapperListAccountTippiLi,
} from './style';
import { DiscordOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
import * as Userservice from '../../service/Userservice';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slides/userSlide';
import { removeAllOrderLogOut } from '../../redux/slides/OrderSlide';

const { Search } = Input;

function HeaderComponent() {
    const user = useSelector((state) => state.user);
    console.log('userRedux', user);

    const order = useSelector((state) => state.order.orderItems);
    const navigate = useNavigate();
    const hanldenavigateOrder = () => {
        navigate('/order');
    };
    const dispatch = useDispatch();
    const Logout = async () => {
        const res = await Userservice.logoutUser();
        dispatch(logout());
        dispatch(removeAllOrderLogOut());
    };
    const renderPreview = () => (
        <div
            style={{
                backgroundColor: '#fff',
                width: '220px',
                paddingTop: '12px',
                border: '12px',
                borderBottom: '1px solid #ddd',
            }}
        >
            <ul style={{ listStyle: 'none', paddingLeft: '0px' }}>
                <WrapperListAccountTippiLi>
                    <a style={{ color: '#27272A', marginLeft: '12px' }} href="/profile_page">
                        Thông tin tài khoản
                    </a>
                </WrapperListAccountTippiLi>
                <WrapperListAccountTippiLi>
                    <a style={{ color: '#27272A', marginLeft: '12px' }} href="/my_order">
                        Đơn hàng của tôi
                    </a>
                </WrapperListAccountTippiLi>
                <WrapperListAccountTippiLi>
                    <a style={{ color: '#27272A', marginLeft: '12px' }} href="/support">
                        Trung tâm hỗ trợ
                    </a>
                </WrapperListAccountTippiLi>
                <WrapperListAccountTippiLi>
                    <a style={{ color: '#27272A', marginLeft: '12px' }} onClick={Logout} href="/">
                        Đăng xuất
                    </a>
                    <ToastContainer />
                </WrapperListAccountTippiLi>
                <WrapperListAccountTippiLi>
                    <a style={{ color: '#27272A', marginLeft: '12px' }} href="/sign-in">
                        Đăng nhập
                    </a>
                </WrapperListAccountTippiLi>
            </ul>
        </div>
    );

    return (
        <div>
            <WrapperHeader>
                <Col span={4}>
                    <WrapperTextHeader>
                        <a href="/">
                            <img
                                src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"
                                alt="Logo"
                                width="96px"
                                height="40px"
                            />
                        </a>
                        <WrapperTextIcon>Tốt & Nhanh</WrapperTextIcon>
                    </WrapperTextHeader>
                </Col>
                <Col span={13}>
                    <div>
                        <Search placeholder="Search" allowClear enterButton="Search" size="large" />
                        <WrapperList>
                            <li>
                                <WrapperListItem>Điện gia dụng</WrapperListItem>
                            </li>
                        </WrapperList>
                    </div>
                </Col>
                <Col span={7} style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
                    <WrapperHeaderAccount>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <WrapperListAccount>
                                <WrapperListAccountIcon src="https://salt.tikicdn.com/ts/upload/b4/90/74/6baaecfa664314469ab50758e5ee46ca.png"></WrapperListAccountIcon>
                                <WrapperListAccountLink>Trang chủ</WrapperListAccountLink>
                            </WrapperListAccount>
                            <WrapperListAccount>
                                <StyledTippy
                                    content={renderPreview()} // Sử dụng content để render tooltip
                                    interactive={true}
                                    delay={[200, 0]}
                                    offset={[-20, 0]}
                                    placement="bottom"
                                    style={{ padding: '0 0px' }}
                                >
                                    <div style={{ alignItems: 'center', display: 'flex' }}>
                                        <WrapperListAccountIcon src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png"></WrapperListAccountIcon>

                                        <WrapperListAccountLink>Tài khoản</WrapperListAccountLink>
                                    </div>
                                </StyledTippy>
                            </WrapperListAccount>
                            <div>
                                <div style={{ marginLeft: '16px' }}>
                                    <Badge count={order.length > 0 ? order.length : 0} size="small">
                                        <ShoppingCartOutlined
                                            onClick={hanldenavigateOrder}
                                            style={{ fontSize: '24px', color: '#1677ff', cursor: 'pointer' }}
                                        />
                                    </Badge>

                                    <span style={{ fontSize: '12px', color: '#fff' }}>Giỏ hàng </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                                <img
                                    src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png"
                                    alt="tiki"
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        marginRight: '4px',
                                    }}
                                />

                                <span
                                    style={{
                                        margin: '0px',
                                        display: 'block',
                                        color: 'rgb(128, 128, 137)',
                                        fontWeight: '400',
                                        fontSize: '12px',
                                        lineHeight: '150%',
                                        paddingRight: '4px',
                                    }}
                                >
                                    Giao đến
                                </span>
                                <WrapperListAccountAdd>{user?.address}</WrapperListAccountAdd>
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                </Col>
            </WrapperHeader>
            <div></div>
        </div>
    );
}

export default HeaderComponent;

import React, { useState } from 'react';
import { Badge, Col, Input } from 'antd';

import {
    WrapperHeader,
    WrapperTextHeader,
    WrapperHeaderAccount,
    StyledTippy,
    WrapperTextIcon,
    WrapperListAccount,
    WrapperListAccountIcon,
    WrapperListAccountAdd,
    WrapperListAccountLink,
    WrapperListAccountTippiLi,
} from './style';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from '../.././components/HeaderComponent/HeaderComponent.module.scss';
import { useNavigate } from 'react-router-dom';
import * as Userservice from '../../service/Userservice';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slides/userSlide';
import { removeAllOrderLogOut } from '../../redux/slides/OrderSlide';
import { searchProduct } from '../../redux/slides/ProductSlide';
import Tippy from '@tippyjs/react/headless';
import SearchComponent from './SearchComponent/Search';
function HeaderComponent() {
    const user = useSelector((state) => state.user);

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

    const [searchs, setSearch] = useState('');
    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    };
    const renderPreviewSearch = () => {
        <div>dassfsaddss</div>;
    };
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
                    <Tippy
                        interactive={true}
                        delay={[200, 0]}
                        offset={[-20, 0]}
                        visible={searchs.length > 0}
                        placement="bottom"
                        render={(attrs) => (
                            <div
                                {...attrs}
                                style={{
                                    backgroundColor: 'white',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    marginLeft: '33px',
                                    width: '674px',
                                }}
                            >
                                <SearchComponent search={searchs}></SearchComponent>
                            </div>
                        )}
                        style={{ padding: '0 0px' }}
                    >
                        <div className={styles.wrapperSearch}>
                            <img
                                src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png"
                                style={{ width: '20px', height: '20px', margin: '0px 0px 0px 18px' }}
                                alt="Tìm kiếm"
                            />
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                className={styles.SearchInput}
                                onChange={handleChange}
                            />
                            <button className={styles.btnSeacrch}>Tìm kiếm</button>
                        </div>
                    </Tippy>
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
                                        <WrapperListAccountIcon
                                            src={
                                                user.avatar ||
                                                'https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png'
                                            }
                                            alt="User Avatar"
                                        />
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

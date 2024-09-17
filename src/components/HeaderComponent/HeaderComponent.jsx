import React, { useEffect, useState } from 'react';
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
import { ShoppingCartOutlined } from '@ant-design/icons';

import { DeleteFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const { Search } = Input;

function HeaderComponent(isHiddenSearch = false, isHiddenCart = false) {
    const user = useSelector((state) => state.user);
    const [userName, setUsername] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const navigate = useNavigate();
    console.log(userAvatar);
    useEffect(() => {
        setUsername(user?.name);
        setUserAvatar(user?.avatar);
    }, [user?.name, user?.avatar]);

    const handleOnclickLogin = () => {
        navigate('/sign-in');
    };

    const handleProfile = () => {
        navigate('/profile_page');
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
                    <a style={{ color: '#27272A', marginLeft: '12px' }}>Đơn hàng của tôi</a>
                </WrapperListAccountTippiLi>
                <WrapperListAccountTippiLi>
                    <a style={{ color: '#27272A', marginLeft: '12px' }}>Trung tâm hỗ trợ</a>
                </WrapperListAccountTippiLi>
                <WrapperListAccountTippiLi>
                    <a style={{ color: '#27272A', marginLeft: '12px' }}>Đăng xuất</a>
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
                    <a href="/profile_page">alo</a>
                    <WrapperTextHeader>
                        <a>
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
                    {isHiddenSearch ? (
                        <></>
                    ) : (
                        <div>
                            <Search placeholder="input search text" allowClear enterButton="Search" size="large" />
                            <WrapperList>
                                <li>
                                    <WrapperListItem>Điện gia dụng</WrapperListItem>
                                </li>
                                <li>
                                    <WrapperListItem>Điện gia dụng</WrapperListItem>
                                </li>
                                <li>
                                    <WrapperListItem>Điện gia dụng</WrapperListItem>
                                </li>
                                <li>
                                    <WrapperListItem>Điện gia dụng</WrapperListItem>
                                </li>
                            </WrapperList>
                        </div>
                    )}
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
                                        {userAvatar ? (
                                            <WrapperListAccountIcon src={userAvatar}></WrapperListAccountIcon>
                                        ) : (
                                            <WrapperListAccountIcon src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png"></WrapperListAccountIcon>
                                        )}
                                        <WrapperListAccountLink>Tài khoản</WrapperListAccountLink>
                                    </div>
                                </StyledTippy>
                            </WrapperListAccount>
                            <div>
                                <div style={{ marginLeft: '16px' }}>
                                    {isHiddenCart ? (
                                        <></>
                                    ) : (
                                        <Badge count={4} size="small">
                                            <ShoppingCartOutlined
                                                style={{ fontSize: '24px', color: '#1677ff', cursor: 'pointer' }}
                                            />
                                        </Badge>
                                    )}

                                    <span style={{ fontSize: '12px', color: '#fff' }}>Giỏ hàng </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            {isHiddenCart ? (
                                <></>
                            ) : (
                                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                                    <img
                                        src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png"
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
                                    <WrapperListAccountAdd>Bạn muốn giao hàng tới đâu</WrapperListAccountAdd>
                                </div>
                            )}
                        </div>
                    </WrapperHeaderAccount>
                </Col>
            </WrapperHeader>
        </div>
    );
}

export default HeaderComponent;
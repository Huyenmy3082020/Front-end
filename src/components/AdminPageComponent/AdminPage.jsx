import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import AdminProduct from './AdminProduct/AdminProduct';
import AdminUser from './AdminUser/AdminUser';

const items = [
    {
        key: 'user',
        label: 'User',
        icon: <MailOutlined />,
    },
    {
        key: 'product',
        label: 'Product',
        icon: <MailOutlined />,
    },
];
const renderPage = (key) => {
    switch (key) {
        case 'user':
            return <AdminUser></AdminUser>;
        case 'product':
            return <AdminProduct></AdminProduct>;
        default: {
            return <></>;
        }
    }
};
const App = () => {
    const [selectedKey, setSelectedKey] = useState('product');

    const onClick = (e) => {
        console.log('click ', e);
        setSelectedKey(e.key);
    };

    return (
        <>
            <HeaderComponent isHiddenSearch isHiddenCart />
            <div style={{ display: 'flex' }}>
                <Menu
                    onClick={onClick}
                    style={{
                        width: 256,
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />
                <div style={{ width: '1260px' }}>{renderPage(selectedKey)}</div>
            </div>
        </>
    );
};

export default App;

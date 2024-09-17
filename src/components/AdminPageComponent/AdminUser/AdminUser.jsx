import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TableComponent from '../../TableComponent/TableComponent';
function AdminUser() {
    return (
        <div style={{ marginTop: '20px', marginLeft: '20px' }}>
            <h1 style={{ fontSize: '2.6rem' }}>Thong tin nguoi dung</h1>
            <Button style={{ height: '150px', width: '150px', borderRadius: '6px', borderStyle: 'dashed' }}>
                <PlusOutlined style={{ fontSize: '5rem' }}></PlusOutlined>
            </Button>
            <TableComponent></TableComponent>
        </div>
    );
}

export default AdminUser;

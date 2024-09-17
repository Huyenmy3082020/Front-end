import React, { useEffect, useState } from 'react';
import { Divider, Radio, Table, Button, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import * as Productservice from '../../service/Productservice';

// Định nghĩa các cột cho bảng
const columns = (onRestore, onDelete) => [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Actions',
        key: 'actions',
        render: (_, record) => (
            <div>
                <Button icon={<EditOutlined />} onClick={() => onRestore(record)} style={{ marginRight: 8 }}>
                    Restore
                </Button>
                <Popconfirm title="Are you sure you want to delete this item?" onConfirm={() => onDelete(record._id)}>
                    <Button icon={<DeleteOutlined />} type="danger">
                        delete
                    </Button>
                </Popconfirm>
            </div>
        ),
    },
];

const ProductTrash = () => {
    const [selectionType, setSelectionType] = useState('checkbox');
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [dataProduct, setDataProduct] = useState([]);

    // Hàm gọi API và cập nhật trạng thái
    const fetchAPI = async () => {
        try {
            const result = await Productservice.getAllProductTrash();
            setDataProduct(result.data);
        } catch (error) {
            console.error('Failed to fetch products', error);
        }
    };

    useEffect(() => {
        fetchAPI(); // Gọi API khi component mount
    }, []);

    const handleSelectAll = (selected, selectedRows) => {
        const allKeys = selectedRows.map((row) => row._id); // Sử dụng _id làm khóa
        setSelectedRowKeys(selected ? allKeys : []);
    };

    const rowSelection = {
        type: selectionType,
        selectedRowKeys,
        onChange: (selectedRowKeys) => {
            setSelectedRowKeys(selectedRowKeys);
        },
        onSelectAll: handleSelectAll,
    };

    const handleRestore = (record) => {
        Productservice.restoreProduct(record);
    };

    const handleDelete = async (id) => {
        try {
            alert(id);
            const response = await Productservice.destroyProduct(id); // Gửi id của sản phẩm
            window.location.reload();
        } catch (error) {
            console.error('Error deleting product:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <Radio.Group
                onChange={({ target: { value } }) => {
                    setSelectionType(value);
                    setSelectedRowKeys([]); // Reset selected rows khi thay đổi kiểu chọn
                }}
                value={selectionType}
            ></Radio.Group>

            <Divider />

            <Table
                rowSelection={rowSelection}
                columns={columns(handleRestore, handleDelete)}
                dataSource={dataProduct}
                rowKey="_id"
            />
        </div>
    );
};

export default ProductTrash;

import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TableComponent from '../../TableComponent/TableComponent';
import * as Productservice from '../../../service/Productservice';
import * as CategoriService from '../../../service/CategoriService.js';
import ModalComponent from '../../ModalComponent/ModalComponent.jsx';
function AdminProduct() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [avatar, setAvatar] = useState('');
    const [productType, setProductType] = useState(''); // State để lưu type

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const limit = 12;
    useEffect(() => {
        const fetchProductAll = async () => {
            try {
                const res = await Productservice.getAllProduct(limit);
                setProducts(res.data || []);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
            }
        };

        fetchProductAll();
    }, []);
    const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchCategoryByName = async () => {
            try {
                const res = await CategoriService.getOrderByName(productType);
                setCategory(res);
            } catch (error) {
                console.error('Error fetching category:', error);
            }
        };

        if (productType) {
            fetchCategoryByName();
        }
    }, [productType]);

    const onFinish = (values) => {
        setProductType(values.type);
        handleOnCreateProduct(
            values.Name,
            values.image,
            category._id,
            values.price,
            values.countInStock,
            values.rating,
            values.discount,
            values.selled,
            values.description,
        );
        // setIsModalOpen(false);
    };

    const onFinishFailed = (errorInfo) => {};

    const handleOnCreateProduct = async (
        name,
        image,
        type,
        price,
        countInStock,
        rating,
        discount,
        selled,
        description,
    ) => {
        const productData = {
            name,
            image,
            type,
            price,
            countInStock,
            rating,
            discount,
            selled,
            description,
        };

        try {
            const res = await Productservice.createProduct(productData);
        } catch (error) {}
    };

    return (
        <div style={{ marginTop: '20px', marginLeft: '20px' }}>
            <h1 style={{ fontSize: '2.6rem' }}>Thông tin sản phẩm</h1>
            <Button
                style={{ height: '150px', width: '150px', borderRadius: '6px', borderStyle: 'dashed' }}
                onClick={() => {
                    setIsModalOpen(true);
                }}
            >
                <PlusOutlined style={{ fontSize: '5rem' }} />
            </Button>
            <TableComponent data={products} />

            <a href="/product/trash">Thung rac</a>

            <ModalComponent
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            />
        </div>
    );
}

export default AdminProduct;

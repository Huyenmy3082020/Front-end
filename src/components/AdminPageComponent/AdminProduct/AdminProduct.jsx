import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TableComponent from '../../TableComponent/TableComponent';
import * as Productservice from '../../../service/Productservice';

import ModalComponent from '../../ModalComponent/ModalComponent.jsx';
function AdminProduct() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [avatar, setAvatar] = useState('');
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
    console.log(products);
    const onFinish = (values) => {
        handleOnCreateProduct(
            values.Name,
            values.image,
            values.type,
            values.price,
            values.countInStock,
            values.rating,
            values.discount,
            values.selled,
            values.description,
        );
        setIsModalOpen(false);
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
        // Chỉ sử dụng các giá trị đơn giản từ form
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
            // Gọi API để tạo sản phẩm
            const res = await Productservice.createProduct(productData);
            console.log('Product created successfully:', res);
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    // const handleOnChangeAvatar = async ({ file }) => {
    //     // Kiểm tra nếu `file.originFileObj` có tồn tại và là đối tượng File/Blob
    //     const fileObj = file?.originFileObj;

    //     if (fileObj && (fileObj instanceof Blob || fileObj instanceof File)) {
    //         // Kiểm tra xem file có url hay preview không
    //         if (!file.url && !file.preview) {
    //             try {
    //                 // Chuyển đổi file sang base64
    //                 file.preview = await getBase64(fileObj);
    //             } catch (error) {
    //                 console.error('Error reading file:', error);
    //             }
    //         }
    //         setAvatar(file.preview);
    //     } else {
    //         console.error('Invalid file object:', file);
    //     }
    // };
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

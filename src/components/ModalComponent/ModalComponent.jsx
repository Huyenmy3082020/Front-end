import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

const ModalComponent = ({ isModalOpen, handleOk, handleCancel, onFinish, onFinishFailed }) => {
    return (
        <Modal title="Tạo sản phẩm" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Name Product"
                    name="Name"
                    rules={[{ required: true, message: 'Please input your Name Product!' }]}
                >
                    <Input placeholder="Enter name product" />
                </Form.Item>

                <Form.Item label="Image" name="image" rules={[{ required: true, message: 'Please input your image!' }]}>
                    <Input placeholder="Enter image URL" />
                </Form.Item>

                <Form.Item label="Type" name="type" rules={[{ required: true, message: 'Please input your type!' }]}>
                    <Input placeholder="Enter type product" />
                </Form.Item>

                <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please input your price!' }]}>
                    <Input placeholder="Enter price" />
                </Form.Item>

                <Form.Item
                    label="Count In Stock"
                    name="countInStock"
                    rules={[{ required: true, message: 'Please input your count in stock!' }]}
                >
                    <Input placeholder="Enter count in stock" />
                </Form.Item>

                <Form.Item
                    label="Rating"
                    name="rating"
                    rules={[{ required: true, message: 'Please input your rating!' }]}
                >
                    <Input placeholder="Enter rating" />
                </Form.Item>

                <Form.Item
                    label="Discount"
                    name="discount"
                    rules={[{ required: true, message: 'Please input your discount!' }]}
                >
                    <Input placeholder="Enter discount" />
                </Form.Item>

                <Form.Item
                    label="Selled"
                    name="selled"
                    rules={[{ required: true, message: 'Please input your selled!' }]}
                >
                    <Input placeholder="Enter selled" />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input placeholder="Enter description" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalComponent;

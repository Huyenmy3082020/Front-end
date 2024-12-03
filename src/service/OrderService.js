import axios from 'axios';

// Tạo instance của axios với URL từ biến môi trường
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const createOrder = async (data) => {
    try {
        console.log(data);
        const res = await axiosInstance.post(`/order/createOrder`, data);
        return res.data;
    } catch (error) {
        console.error('Error creating order:', error.response || error.message || error);
        throw new Error('Failed to create order');
    }
};

export const getOrder = async () => {
    try {
        const res = await axiosInstance.get(`/order/getOrder`);
        return res.data;
    } catch (error) {
        console.error('Error fetching orders:', error.response || error.message || error);
        throw new Error('Failed to fetch orders');
    }
};

export const getOrderPaid = async () => {
    try {
        const res = await axiosInstance.get(`/order/getOrderPage`);
        return res.data;
    } catch (error) {
        console.error('Error fetching paid orders:', error.response || error.message || error);
        throw new Error('Failed to fetch paid orders');
    }
};

export const deleteOrder = async (id) => {
    try {
        const res = await axiosInstance.delete(`/order/deleteOrder/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error deleting order:', error.response || error.message || error);
        throw new Error('Failed to delete order');
    }
};



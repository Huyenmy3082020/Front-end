import axios from 'axios';

// Tạo instance của axios với URL từ biến môi trường
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const creataCart = async (data) => {
    try {
        const res = await axiosInstance.post(`/cart/createCart`, data);
        console.log(res);
        return res.data;
    } catch (error) {
        console.error('Error fetching category by slug:', error.response || error.message || error);
        throw new Error('Failed to fetch category by slug');
    }
};
export const getCartUser = async (userId) => {
    try {
        const res = await axiosInstance.get(`/cart/getCartByUser/${userId}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching orders:', error.response || error.message || error);
        throw new Error('Failed to fetch orders');
    }
};
export const AlterAmount = async (data) => {
    try {
        const res = await axiosInstance.put(`/cart/alterAmount`, data);
        return res.data;
    } catch (error) {
        console.error('Error fetching orders:', error.response || error.message || error);
        throw new Error('Failed to fetch orders');
    }
};
export const deleteCartById = async (data) => {
    try {
        console.log(data);
        const res = await axiosInstance.delete(`${process.env.REACT_APP_API_URL}/cart/delete`, {
            data,
        });
        return res.data;
    } catch (error) {
        console.error('Error fetching user details:', error.response || error.message || error);
        throw new Error('Failed to fetch user details');
    }
};

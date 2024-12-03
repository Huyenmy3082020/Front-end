import axios from 'axios';
import { setCartId } from '../redux/slides/CartSlide';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const creataCart = async (data) => {
    try {
        console.log(data.access_token);
        const res = await axiosInstance.post(`/cart/createCart/${data.cartData.userId}`, data.cartData, {
            headers: {
                authorization: `Bearer ${data.access_token}`, // Đảm bảo truyền token vào header
            },
        });
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
        const res = await axiosInstance.delete(`${process.env.REACT_APP_API_URL}cart/delete`, {
            data,
        });

        console.log('Delete response:', res.data);
        return res.data;
    } catch (error) {
        console.error('Error deleting product from cart:', error.response?.data || error.message);
        throw new Error('Failed to delete product from cart');
    }
};
export const deleteCartSoft = async (data) => {
    try {
        const res = await axiosInstance.delete(`${process.env.REACT_APP_API_URL}cart/deleteSoft`, data);
        console.log('Delete response:', res.data);
        return res.data;
    } catch (error) {
        console.error('Error deleting product from cart:', error.response?.data || error.message);
        throw new Error('Failed to delete product from cart');
    }
};
export const getCartById = async (userId, cartId) => {
    try {
        const res = await axiosInstance.get(`/cart/getCartById/${userId}/${cartId}`); // Truyền userId trong URL
        return res.data;
    } catch (error) {
        console.error('Error fetching paid orders:', error.response || error.message || error);
        throw new Error('Failed to fetch paid orders');
    }
};

export const updateShipCart = async (data) => {
    try {
        const res = await axiosInstance.put(`/cart/updateShipCart`, { data });

        return res.data;
    } catch (error) {
        console.error('Error fetching paid orders:', error.response || error.message || error);
        throw new Error('Failed to fetch paid orders');
    }
};

export const getAllProductByCart = async (id) => {
    try {
        const res = await axiosInstance.get(`/cart/getAllProductByCart/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching paid orders:', error.response || error.message || error);
        throw new Error('Failed to fetch paid orders');
    }
};

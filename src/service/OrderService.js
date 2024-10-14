import axios from 'axios';

export const createOrder = async (data) => {
    try {
        const res = await axios.post(`http://localhost:2000/order/createOrder`, data);
        return res.data;
    } catch (error) {
        console.error('Error creating order:', error.response || error.message || error);
        throw new Error('Failed to create order');
    }
};
export const getOrder = async () => {
    try {
        const res = await axios.get('http://localhost:2000/order/getOrder');
        return res.data;
    } catch (error) {}
};
export const deleteOrder = async (id) => {
    const res = await axios.delete(`http://localhost:2000/order/deleteOrder/${id}`);
    return res.data;
};

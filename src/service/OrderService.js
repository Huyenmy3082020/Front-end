import axios from 'axios'; // Đảm bảo rằng bạn đã import axios

export const createOrder = async (data) => {
    try {
        const res = await axios.post(`http://localhost:2000/order/createOrder`, data);
        return res.data;
    } catch (error) {
        console.error('Error creating order:', error.response || error.message || error);
        throw new Error('Failed to create order');
    }
};

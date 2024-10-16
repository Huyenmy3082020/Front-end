import axios from 'axios';

export const getOrderByName = async (name) => {
    try {
        const res = await axios.get(`http://localhost:2000/category/getCategoryByName/${name}`);
        return res.data;
    } catch (error) {
        console.error('Error creating order:', error.response || error.message || error);
        throw new Error('Failed to create order');
    }
};

export const getCategoryname = async () => {
    try {
        const res = await axios.get(`http://localhost:2000/category/getCategory`);
        return res.data;
    } catch (error) {
        console.error('Error creating order:', error.response || error.message || error);
        throw new Error('Failed to create order');
    }
};

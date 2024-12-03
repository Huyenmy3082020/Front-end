import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const createShip = async (data) => {
    try {
        const res = await axiosInstance.post(`/ship/ship`, data);
        return res.data;
    } catch (error) {
        console.error('Error creating order:', error.response || error.message || error);
        throw new Error('Failed to create order');
    }
};
export const getAllShip = async () => {
    try {
        const res = await axiosInstance.get(`/ship/getAllShip`);
        return res.data;
    } catch (error) {
        console.error('Error creating order:', error.response || error.message || error);
        throw new Error('Failed to create order');
    }
};
export const getShipByCart = async (data) => {
    try {
        console.log(data);
        const res = await axiosInstance.get(`/ship/getAllShip`, data);
        return res.data;
    } catch (error) {
        console.error('Error creating order:', error.response || error.message || error);
        throw new Error('Failed to create order');
    }
};

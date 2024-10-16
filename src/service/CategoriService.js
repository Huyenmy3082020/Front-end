import axios from 'axios';

// Tạo instance của axios với URL từ biến môi trường
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const getOrderByName = async (name) => {
    try {
        const res = await axiosInstance.get(`/category/getCategoryByName/${name}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching category by name:', error.response || error.message || error);
        throw new Error('Failed to fetch category by name');
    }
};

export const getCategoryname = async () => {
    try {
        const res = await axiosInstance.get(`/category/getCategory`);
        return res.data;
    } catch (error) {
        console.error('Error fetching categories:', error.response || error.message || error);
        throw new Error('Failed to fetch categories');
    }
};

export const getCategoryslug = async (slug) => {
    try {
        const res = await axiosInstance.get(`/category/getCategoryByslug/${slug.slug}`);
        console.log(res);
        return res.data;
    } catch (error) {
        console.error('Error fetching category by slug:', error.response || error.message || error);
        throw new Error('Failed to fetch category by slug');
    }
};

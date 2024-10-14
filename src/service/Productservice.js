import axios from 'axios';

export const getAllProduct = async (limit) => {
    let url = 'http://localhost:2000/product/getAllProduct';
    if (limit) {
        url += `?limit=${limit}`;
    }

    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
export const getAllProductTrash = async () => {
    try {
        const res = await axios.get(`http://localhost:2000/product/getAllProductTrash`);
        return res.data;
    } catch (error) {}
};
export const createProduct = async (data) => {
    const res = await axios.post(`http://localhost:2000/product/create`, data);
    return res.data;
};
export const deleteProduct = async (id) => {
    const res = await axios.delete(`http://localhost:2000/product/deleteProduct/${id}`);
    return res.data;
};
export const restoreProduct = async (data) => {
    const res = await axios.put(`http://localhost:2000/product/restoreProduct`, data);
    return res.data;
};

export const destroyProduct = async (id) => {
    const res = await axios.delete(`http://localhost:2000/product/destroyProduct/${id}`);
    return res.data;
};
export const updateProduct = async (id, data) => {
    const res = await axios.put(`http://localhost:2000/product/updateProduct/${id}`, data);
    return res.data;
};

export const deleteMany = async (id) => {
    try {
        const res = await axios.delete('http://localhost:2000/product/deleteMany', {
            id,
        });
        return res.data;
    } catch (error) {
        console.error('Error in deleteMany:', error);
        throw error;
    }
};
export const getProductById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:2000/product/getProductbyId/${id}`);
        return res.data.data;
    } catch (error) {
        console.error('Error in deleteMany:', error);
        throw error;
    }
};
export const getAllType = async () => {
    try {
        const res = await axios.get(`http://localhost:2000/product/getAllType`);
        return res.data;
    } catch (error) {
        throw error;
    }
};
export const getProductType = async (type) => {
    try {
        const res = await axios.get(`http://localhost:2000/product/product/${type}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

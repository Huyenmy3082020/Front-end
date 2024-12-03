import axios from 'axios';

// Tạo instance của axios với URL từ biến môi trường
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const getAllProduct = async (limit) => {
    let url = '/product/getAllProduct';

    if (limit) {
        url += `?limit=${limit}`;
    }

    try {
        const res = await axiosInstance.get(url);
        return res.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getAllProduct1 = async (search) => {
    try {
        const res = await axiosInstance.get(`product/getAllProduct?filter=name&filter=${search}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching trashed products:', error);
        throw error;
    }
};
export const getAllProductTrash = async () => {
    try {
        const res = await axiosInstance.get(`product/getAllProductTrash`);
        return res.data;
    } catch (error) {
        console.error('Error fetching trashed products:', error);
        throw error;
    }
};

export const createProduct = async (data) => {
    const res = await axiosInstance.post(`product/create`, data);
    return res.data;
};

export const deleteProduct = async (id) => {
    const res = await axiosInstance.delete(`product/deleteProduct/${id}`);
    return res.data;
};

export const restoreProduct = async (data) => {
    const res = await axiosInstance.put(`product/restoreProduct`, data);
    return res.data;
};

export const destroyProduct = async (id) => {
    const res = await axiosInstance.delete(`product/destroyProduct/${id}`);
    return res.data;
};

export const updateProduct = async (id, data) => {
    const res = await axiosInstance.put(`product/updateProduct/${id}`, data);
    return res.data;
};

export const deleteMany = async (ids) => {
    // Sửa `id` thành `ids` nếu cần
    try {
        const res = await axiosInstance.delete('product/deleteMany', {
            data: { ids }, // Gửi ids trong body
        });
        return res.data;
    } catch (error) {
        console.error('Error in deleteMany:', error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const res = await axiosInstance.get(`/product/getProductbyId/${id}`);
        return res.data.data;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
};

export const getAllType = async () => {
    try {
        const res = await axiosInstance.get(`/product/getAllType`);
        return res.data;
    } catch (error) {
        console.error('Error fetching all product types:', error);
        throw error;
    }
};

export const getProductType = async (type) => {
    try {
        const res = await axiosInstance.get(`/product/product/${type}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching product type:', error);
        throw error;
    }
};

export const search = async (data) => {
    const res = await axiosInstance.get(`/product/search`, data);
    return res.data;
};

export const productCategories = async (id, filterName, sortPrice) => {
    console.log(sortPrice);
    const res = await axiosInstance.get(`product/productWithCategory/${id}?filter=${filterName}&sort=${sortPrice}`);
    return res.data;
};

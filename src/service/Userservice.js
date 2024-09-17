import axios from 'axios';
export const axiosJWT = axios.create();

export const loginUser = async (data) => {
    const res = await axios.post(`http://localhost:2000/api/user/sign-in`, data);
    return res.data;
};

export const signUpUser = async (data) => {
    const res = await axios.post(`http://localhost:2000/api/user/sign-up`, data);
    return res.data;
};

export const getDetailUser = async (id, access_token) => {
    try {
        const res = await axiosJWT.get(`http://localhost:2000/api/user/getUser/${id}`, {
            headers: {
                authorization: `Bearer ${access_token}`,
            },
        });
        return res.data;
    } catch (error) {
        console.error('Error fetching user details:', error.response || error.message || error);
        throw new Error('Failed to fetch user details');
    }
};

export const refreshToken = async () => {
    try {
        const res = await axios.post(
            `http://localhost:2000/api/user/refresh-token`,
            {},
            {
                withCredentials: true,
            },
        );
    } catch (error) {
        console.error('Error in refreshToken:', error);
        throw error;
    }
};

export const UpdateUser = async (id, data, access_token) => {
    try {
        const res = await axiosJWT.put(`http://localhost:2000/api/user/update-user/${id}`, data, {
            headers: {
                authorization: `Bearer ${access_token}`,
            },
        });
        return res.data;
    } catch (error) {}
};

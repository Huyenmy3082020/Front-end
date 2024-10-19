import axios from 'axios';

export const axiosJWT = axios.create();
export const loginUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/sign-in`, data, {
        withCredentials: true, // Thêm dòng này để gửi cookie
    });
    return res.data;
};

export const signUpUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/sign-up`, data);
    return res.data;
};

export const getDetailUser = async (id, access_token) => {
    try {
        const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/api/user/getUser/${id}`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
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
            `${process.env.REACT_APP_API_URL}/api/user/refreshtoken`,
            {},
            { withCredentials: true },
        );
        console.log('New access token:', res.data);
        return res.data;
    } catch (error) {
        console.error('Error in refreshToken:', error);
        throw error;
    }
};

export const UpdateUser = async (id, data, access_token) => {
    try {
        console.log(data);

        const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/api/user/update-user/${id}`, data, {
            headers: {
                authorization: `Bearer ${access_token}`,
            },
        });
        return res.data;
    } catch (error) {
        console.error('Error updating user:', error.response || error.message || error);
        throw new Error('Failed to update user');
    }
};
export const logoutUser = async () => {
    const res = await axios.post('http://localhost:2000/api/user/logout', {}, { withCredentials: true });

    return res.data;
};

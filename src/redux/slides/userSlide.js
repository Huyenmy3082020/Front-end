import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    avatar: '',
    access_token: '',
    id: '',
    isAdmin: false,
};

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const {
                name = '',
                email = '',
                phone = '',
                avatar = '',
                address = '',
                access_token = '',
                _id = '',
                isAdmin = state.isAdmin,
            } = action.payload;
            state.name = name || email;
            state.email = email;
            state.phone = phone;
            state.address = address;
            state.avatar = avatar;
            state.access_token = access_token;
            state.id = _id;
            state.isAdmin = isAdmin;
        },
        logout(state) {
            return initialState;
        },
    },
});

export const { updateUser, logout } = userSlide.actions;

export default userSlide.reducer;

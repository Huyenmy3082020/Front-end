// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/slides/userSlide'; // Đảm bảo đường dẫn đúng
import OrderReducer from '../redux/slides/OrderSlide'; // Đảm bảo đường dẫn đúng

// Lấy dữ liệu người dùng từ localStorage
const persistedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};

// Tạo store với preloadedState từ localStorage
export const store = configureStore({
    reducer: {
        user: userReducer,
        order: OrderReducer,
    },
});

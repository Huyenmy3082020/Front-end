// redux/slides/CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItems = action.payload.items; // Lấy danh sách sản phẩm từ cartData
            newItems.forEach((newItem) => {
                const existingItem = state.items.find((item) => item.product === newItem.product);
                if (existingItem) {
                    existingItem.amount += newItem.amount; // Cập nhật số lượng
                } else {
                    state.items.push(newItem); // Thêm sản phẩm mới vào giỏ
                }

                state.totalPrice += newItem.price * newItem.amount; // Cập nhật tổng giá trị
            });
        },

        updateItem: (state, action) => {
            const { product, amount } = action.payload;
            const existingItem = state.items.find((item) => item.product === product);

            if (existingItem) {
                const priceDifference = (amount - existingItem.amount) * existingItem.price;
                existingItem.amount = amount; // Cập nhật số lượng
                state.totalPrice += priceDifference; // Cập nhật tổng giá trị
            }
        },
        removeItem: (state, action) => {
            const productId = action.payload;
            const existingItem = state.items.find((item) => item.product === productId);

            if (existingItem) {
                state.totalPrice -= existingItem.price * existingItem.amount; // Cập nhật tổng giá trị
                state.items = state.items.filter((item) => item.product !== productId); // Xóa sản phẩm khỏi giỏ
            }
        },
        clearCart: (state) => {
            state.items = []; // Xóa tất cả sản phẩm trong giỏ
            state.totalPrice = 0; // Đặt lại tổng giá trị
        },
    },
});

export const { addItem, updateItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

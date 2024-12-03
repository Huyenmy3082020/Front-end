import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    cartId: null,
    totalPrice: 0, // Tổng giá tiền
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartId: (state, action) => {
            state.cartId = action.payload;
        },

        addItem: (state, action) => {
            const { productId, quantity, productDetails } = action.payload;

            const existingItem = state.items.find((item) => item.productId === productId);

            if (existingItem) {
                existingItem.quantity += quantity; // Cập nhật số lượng
            } else {
                state.items.push({ productId, quantity, ...productDetails }); // Thêm sản phẩm mới
            }

            state.totalPrice += productDetails.price * quantity; // Cập nhật tổng giá tiền
        },

        // Xóa tất cả sản phẩm trong giỏ hàng
        clearCart: (state) => {
            state.items = []; // Xóa tất cả sản phẩm trong giỏ
            state.totalPrice = 0; // Đặt lại tổng giá tiền
        },

        removeItem: (state, action) => {
            const productId = action.payload;
            const itemToRemove = state.items.find((item) => item.productId === productId.productId);

            if (itemToRemove) {
                state.totalPrice -= itemToRemove.quantity * itemToRemove.price; // Cập nhật tổng giá tiền
                state.items = state.items.filter((item) => item.productId !== productId.productId); // Xóa sản phẩm khỏi giỏ
            }
        },

        removeAllOrder: (state, action) => {
            const { listChecked } = action.payload;
            state.items = state.items.filter((item) => !listChecked.includes(item.productId));
        },
        increaseItem: (state, action) => {
            const { productId } = action.payload;
            const existingItem = state.items.find((item) => item.productId === productId);

            if (existingItem) {
                existingItem.quantity += 1; // Tăng số lượng
                state.totalPrice += existingItem.price * 1; // Cập nhật tổng giá tiền
            }
        },

        decreaseItem: (state, action) => {
            const { productId } = action.payload;
            const existingItem = state.items.find((item) => item.productId === productId);

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    // Nếu số lượng sản phẩm lớn hơn 1, giảm số lượng
                    existingItem.quantity -= 1;
                    state.totalPrice -= existingItem.price; // Giảm tổng giá theo giá của sản phẩm
                } else {
                    // Nếu số lượng sản phẩm là 1, giữ sản phẩm trong giỏ với số lượng là 1
                    state.totalPrice -= existingItem.price; // Giảm tổng giá
                }
            }
        },

        updateItem: (state, action) => {
            const { productId, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.productId === productId);

            if (existingItem) {
                const priceDifference = (quantity - existingItem.quantity) * existingItem.price;
                existingItem.quantity = quantity; // Cập nhật số lượng
                state.totalPrice += priceDifference; // Cập nhật tổng giá tiền
            }
        },
        resetCard: () => {
            return initialState;
        },
    },
});

export const { addItem, clearCart, removeItem, setCartId, increaseItem, decreaseItem, updateItem, removeAllOrder } =
    cartSlice.actions;
export default cartSlice.reducer;

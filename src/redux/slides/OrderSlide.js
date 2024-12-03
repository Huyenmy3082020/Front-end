import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    orderItems: [], // Mảng các sản phẩm trong đơn hàng
    shippingAddress: {}, // Địa chỉ giao hàng
    paymentMethod: '', // Phương thức thanh toán
    itemsPrice: 0, // Giá trị tổng của các sản phẩm
    shippingPrice: 0, // Giá trị phí giao hàng
    taxPrice: 0, // Giá trị thuế
    totalPrice: 0, // Giá trị tổng của đơn hàng
    user: null, // Thông tin người dùng, khởi tạo là null
    isPaid: false, // Trạng thái đã thanh toán
    paidAt: null, // Thời điểm thanh toán
    isDelivered: false, // Trạng thái đã giao hàng
    deliveredAt: null, // Thời điểm giao hàng
};

export const OrderSlide = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newOrder = action.payload; // result.data từ API
            state.items = [...state.items, ...newOrder.items]; // Gộp các sản phẩm vào giỏ hàng
            state.totalPrice = newOrder.totalPrice || 0; // Tổng giá trị nếu có trả về từ API
            state.orderId = newOrder.orderId || null; // Lưu Order ID nếu có
        },

        removeOrder: (state, action) => {
            const { productId } = action.payload;
            state.orderItems = state.orderItems.filter((item) => item.productId !== productId);
        },

        removeAllOrder: (state, action) => {
            const { listChecked } = action.payload;
            state.orderItems = state.orderItems.filter((item) => !listChecked.includes(item.product));
        },

        increaseOrder: (state, action) => {
            const { productId } = action.payload;

            const itemOrder = state.orderItems.find((item) => item.product === productId);

            if (itemOrder) {
                itemOrder.amount += 1;
            }
        },

        decreaseOrder: (state, action) => {
            const { productId } = action.payload;
            const itemOrder = state.orderItems.find((item) => item.product === productId);
            if (itemOrder) {
                itemOrder.amount -= 1;
                if (itemOrder.amount <= 0) {
                    state.orderItems = state.orderItems.filter((item) => item.product !== productId);
                }
            }
        },
        removeAllOrderLogOut: (state, action) => {
            return initialState;
        },
    },
});

// Tạo action creators cho từng reducer
export const { addOrder, increaseOrder, decreaseOrder, removeOrder, removeAllOrder, removeAllOrderLogOut } =
    OrderSlide.actions;

export default OrderSlide.reducer;

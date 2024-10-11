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
        addOrder: (state, action) => {
            const { orderItem } = action.payload;
            const itemOrder = state?.orderItems?.find((item) => item.product === orderItem.product);

            if (itemOrder) {
                // Nếu sản phẩm đã tồn tại, cộng thêm số lượng
                itemOrder.amount += orderItem.amount;
            } else {
                // Nếu sản phẩm chưa tồn tại, thêm vào danh sách
                state.orderItems.push(orderItem);
            }
        },

        removeOrder: (state, action) => {
            const { idProduct } = action.payload;
            state.orderItems = state.orderItems.filter((item) => item.product !== idProduct);
        },

        removeAllOrder: (state, action) => {
            const { listChecked } = action.payload;
            // Lọc ra những sản phẩm không nằm trong listChecked
            state.orderItems = state.orderItems.filter((item) => !listChecked.includes(item.product));
        },

        increaseOrder: (state, action) => {
            const { idProduct } = action.payload;
            const itemOrder = state.orderItems.find((item) => item.product === idProduct);

            if (itemOrder) {
                // Tăng số lượng sản phẩm lên 1
                itemOrder.amount += 1;
            }
        },

        decreaseOrder: (state, action) => {
            const { idProduct } = action.payload;
            const itemOrder = state.orderItems.find((item) => item.product === idProduct);

            if (itemOrder) {
                // Giảm số lượng sản phẩm xuống 1
                itemOrder.amount -= 1;

                // Nếu số lượng sản phẩm bằng 0, loại bỏ sản phẩm khỏi danh sách
                if (itemOrder.amount <= 0) {
                    state.orderItems = state.orderItems.filter((item) => item.product !== idProduct);
                }
            }
        },
    },
});

// Tạo action creators cho từng reducer
export const { addOrder, increaseOrder, decreaseOrder, removeOrder, removeAllOrder } = OrderSlide.actions;

export default OrderSlide.reducer;

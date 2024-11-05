import { useEffect, useState } from 'react';

export const convertPrice = (amount) => {
    if (typeof amount !== 'number' || isNaN(amount)) {
        return 'N/A'; // Trả về 'N/A' nếu giá trị không hợp lệ
    }

    // Chuyển số thành chuỗi và thêm dấu phân cách hàng nghìn
    const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Thêm ký hiệu tiền tệ "₫"
    return formattedAmount + ' ₫';
};
export const PaymentMethod = () => {
    return {
        payment: {
            tienmat: 'Thanh toán bằng tiền mặt',
            vnpay: 'Thanh toán bằng VNPay',
            zalopay: 'Thanh toán bằng ZaloPay',
            thetindung: 'Thanh toán bằng thẻ tín dụng',
            viettelmoney: 'Thanh toán bằng ViettelMoney',
        },
    };
};

export const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
// hooks/useDebounce.js

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup function
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;

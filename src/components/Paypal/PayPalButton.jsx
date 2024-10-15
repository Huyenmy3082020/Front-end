import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = () => {
    const handleApprove = async (data, actions) => {
        const order = await actions.order.capture();
        console.log('Order', order);
        // Thực hiện các bước xử lý sau khi thanh toán thành công (như thông báo cho server, lưu vào DB, v.v.)
    };

    return (
        <PayPalScriptProvider options={{ 'client-id': 'YOUR_CLIENT_ID' }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return fetch('http://localhost:5000/api/payment', {
                        method: 'post',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify({
                            // Dữ liệu thanh toán, nếu cần
                        }),
                    })
                        .then((response) => response.json())
                        .then((data) => data.id);
                }}
                onApprove={handleApprove}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalButton;

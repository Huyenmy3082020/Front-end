import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = () => {
    const handleApprove = async (data, actions) => {
        const order = await actions.order.capture();
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

import React from 'react';
import ProductDetailComponent from '../../components/ProductDetailComponent/ProductDetailComponent';
function ProductDetailPage() {
    return (
        <div style={{ padding: '0 90px', background: '#efefef', height: '1000px' }}>
            <h1> Trang chu</h1>
            <ProductDetailComponent style={{ display: 'flex', background: '#fff' }} />
        </div>
    );
}

export default ProductDetailPage;

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Thêm import này
import TypeProduct from '../../components/TypeProcduct/TypeProcduct';
import { WrapperTypeProduct, WrapperBtnMore } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/slider1.png';
import slider2 from '../../assets/images/slider2.png';
import slider3 from '../../assets/images/slider3.png';
import CardComponent from '../../components/CardComponent/CardComponent';
import * as Productservice from '../../service/Productservice';

function HomePage() {
    const user = useSelector((state) => state.user);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate(); // Khởi tạo useNavigate

    useEffect(() => {
        const fetchProductAll = async () => {
            try {
                const res = await Productservice.getAllProduct();
                setProducts(res.data || []);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProductAll();
    }, []);

    const handleOnClick = (productId) => {
        console.log(productId);
    };

    if (isLoading) {
        return <div>Loading...</div>; // Hiển thị thông báo tải
    }

    return (
        <div style={{ padding: '0 90px' }}>
            <div id="container">
                <SliderComponent arrImg={[slider1, slider2, slider3]} />
                <div
                    style={{ marginTop: '70px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}
                >
                    {products.map((product) => (
                        <CardComponent
                            key={product._id}
                            countInStock={product.countInStock}
                            description={product.description}
                            id={product._id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            rating={product.rating}
                            type={product.type}
                            discount={product.discount}
                            selled={product.selled}
                        />
                    ))}
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <WrapperBtnMore
                        textButton="Xem thêm đi"
                        styleButton={{
                            border: '1px solid rgb(11,116,229)',
                            color: 'rgb(11,116,229)',
                            width: '240px',
                            height: '28px',
                            borderRadius: '4px',
                        }}
                        styleTextButton={{ color: '#1890ff', fontWeight: 500 }}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;

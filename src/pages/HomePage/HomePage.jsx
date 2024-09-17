import React, { useEffect, useState } from 'react';
import TypeProduct from '../../components/TypeProcduct/TypeProcduct';
import { WrapperTypeProduct, WrapperBtnMore } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/slider1.png';
import slider2 from '../../assets/images/slider2.png';
import slider3 from '../../assets/images/slider3.png';
import CardComponent from '../../components/CardComponent/CardComponent';
import { useQuery } from '@tanstack/react-query';
import * as Productservice from '../../service/Productservice';
import { resolvePath } from 'react-router-dom';
import { useSelector } from 'react-redux';

function HomePage() {
    const user = useSelector((state) => state.user);
    localStorage.setItem('user', JSON.stringify(user));

    const arr = ['may giat', 'a', 'sfs', 'sdsd'];
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
    return (
        <div style={{ padding: '0 90px' }}>
            <WrapperTypeProduct>
                {arr.map((item) => (
                    <TypeProduct name={item} key={item} />
                ))}
            </WrapperTypeProduct>

            <div id="container">
                <SliderComponent arrImg={[slider1, slider2, slider3]} />

                <div
                    style={{ marginTop: '60px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}
                >
                    {products.map((product) => {
                        return (
                            <CardComponent
                                key={product._id}
                                countInStock={product.countInStock}
                                description={product.description}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                rating={product.rating}
                                type={product.type}
                                discount={product.discount}
                                selled={product.selled}
                            />
                        );
                    })}
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
                        }} // Style object for ButtonComponent
                        styleTextButton={{ color: '#1890ff', fontWeight: 500 }} // Style object for text inside ButtonComponent
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;

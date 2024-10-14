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
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [limit, setLimit] = useState(5); // Số lượng sản phẩm hiển thị ban đầu
    const [types, setType] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAllType = async () => {
            try {
                const res = await Productservice.getAllType();
                setType(res.data);
            } catch (error) {
                console.error('Error fetching all types:', error);
            }
        };
        fetchAllType();
    }, []);

    const fetchProductAll = async (limit) => {
        try {
            const res = await Productservice.getAllProduct(limit);
            return res.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    };
    // Sử dụng useEffect để fetch sản phẩm khi limit thay đổi
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const newProducts = await fetchProductAll(limit);
            setProducts(newProducts);
            setIsLoading(false);
        };

        fetchData();
    }, [limit]); // Mỗi khi limit thay đổi, gọi lại API để lấy thêm sản phẩm

    const handleLoadMore = () => {
        setLimit((prevLimit) => prevLimit + 6); // Tăng limit thêm 6 mỗi lần nhấn
    };

    if (isLoading) {
        return <div>Loading...</div>; // Hiển thị thông báo tải
    }

    const handleType = (type) => {
        navigate(`/product/${type}`);
    };

    return (
        <div style={{ padding: '0 90px' }}>
            <div>
                {types.map(
                    (
                        type,
                        index, // Đảm bảo bạn truyền index nếu cần
                    ) => (
                        <ul
                            key={index}
                            style={{ display: 'flex', listStyle: 'none', margin: '0 0', padding: '4px 0px' }}
                        >
                            <li
                                onClick={() => handleType(type)}
                                style={{
                                    padding: '4px',
                                    fontSize: '1.3rem',
                                    color: 'rgb(128, 128, 137)',
                                    cursor: 'pointer',
                                }}
                            >
                                {type}
                            </li>
                        </ul>
                    ),
                )}
            </div>

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
                        onClick={handleLoadMore} // Gọi hàm handleLoadMore khi nhấn vào
                        textButton="Xem thêm"
                        styleButton={{
                            border: '1px solid rgb(11,116,229)',
                            color: 'rgb(11,116,229)',
                            width: '240px',
                            height: '28px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                        styleTextButton={{ color: '#1890ff', fontWeight: 500 }}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;

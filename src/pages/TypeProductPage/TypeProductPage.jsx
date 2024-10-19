import { useEffect, useState } from 'react';
import CardComponent from '../../components/CardComponent/CardComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import { Pagination } from 'antd';
import { Col, Row } from 'antd';
import * as Productservice from '../../service/Productservice';
import { useParams } from 'react-router-dom';
function TypeProductPage() {
    const { type } = useParams(); // Lấy loại sản phẩm từ params
    const [productType, setProductType] = useState([]);
    useEffect(() => {
        const fetchProductType = async () => {
            try {
                const res = await Productservice.getProductType(type);
                setProductType(res.data);
            } catch (error) {
                console.error('Error fetching product type:', error);
            }
        };

        fetchProductType(); // Gọi hàm fetchProductType
    }, [type]);
    return (
        <Row style={{ padding: '0 90px', background: '#efefef', flexWrap: 'nowrap', paddingTop: '16px' }}>
            <Col span={5} style={{ background: '#fff', marginRight: '16px', borderRadius: '6px', marginTop: '16px' }}>
                <NavbarComponent type={type} productType={productType} />
            </Col>

            <Col span={19}>
                <Col
                    style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}
                >
                    {productType.map((product) => {
                        return (
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
                        );
                    })}
                </Col>
                <Pagination defaultCurrent={1} total={50} style={{ marginTop: '16px' }} />
            </Col>
        </Row>
    );
}

export default TypeProductPage;

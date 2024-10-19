import { Col, Row, Slider } from 'antd';
import styles from '../../pages/CategoryProduct/CategoryProduct.module.scss';
import { useEffect, useState } from 'react';
import * as Categoryservice from '../../service/CategoriService';
import { useParams } from 'react-router-dom';
import CardComponent from '../../components/CardComponent/CardComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';

function CategoryProduct() {
    const slug = useParams();
    const [categoryProduct, setCategoryProduct] = useState([]);
    const [categoryProduct1, setCategoryProduct1] = useState([]);
    console.log('categoryProduct', categoryProduct1);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await Categoryservice.getCategoryslug(slug);
                setCategoryProduct(res.products);
                setCategoryProduct1(res.category);
            } catch (error) {
                console.log('error', error);
            }
        };

        fetchCategories();
    }, []);
    return (
        <div className={styles.wrapper}>
            <div>
                <Row>
                    <Col span={6}>
                        <NavbarComponent></NavbarComponent>
                    </Col>
                    <Col span={18}>
                        <div
                            style={{
                                padding: '8px',
                                marginTop: ' 12px',
                                background: ' #fff',
                                borderRadius: ' 4px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            {' '}
                            <h1 style={{ margin: '0 0' }}>{categoryProduct1.name}</h1>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                gap: '16px',
                                flexWrap: 'wrap',
                                backgroundColor: '#fff',
                                padding: '16px',
                                marginTop: '14px',
                            }}
                        >
                            {categoryProduct.map((product) => (
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
                                    width="200px"
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default CategoryProduct;

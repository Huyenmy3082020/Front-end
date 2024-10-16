import React, { useEffect, useState } from 'react';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import styles from '../../pages/HomePage/HomePage.module.scss';
import slider1 from '../../assets/slider/slider1.jpg.webp';
import slider2 from '../../assets/slider/slider2.jpg.webp';
import slider3 from '../../assets/slider/slider3.jpg.webp';
import slider4 from '../../assets/slider/slider4.jpg.webp';
import slider5 from '../../assets/slider/slider5.jpg.webp';
import slider6 from '../../assets/slider/slider6.jpg.webp';

import chamsoc from '../../assets/nav/chamsoc.jpg.webp';
import motsach from '../../assets/nav/motsach.jpg.webp';
import nhinlai from '../../assets/nav/nhinlai.png';
import sieusale from '../../assets/nav/sieusale.png';
import vongquaytrian from '../../assets/nav/vongquaytrian.png';
import noicom from '../../assets/nav/noicom.jpg.webp';
import thegioicongnghe from '../../assets/nav/thegioicongnghe.jpg.webp';
import tititrading from '../../assets/nav/tititrading.png';
import topdeal from '../../assets/nav/topdeal.png';

import CardComponent from '../../components/CardComponent/CardComponent';
import * as Productservice from '../../service/Productservice';
import { Col, Row, Spin } from 'antd';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import * as CategorySevice from '../../service/CategoriService';
function HomePage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [limit, setLimit] = useState(6);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await CategorySevice.getCategoryname();
                setCategories(data); // Lưu danh sách vào state
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchAllType = async () => {
            try {
                const res = await Productservice.getAllType();
                return res.data;
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
        return <Spin></Spin>; // Hiển thị thông báo tải
    }
    const width = '150px';
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperList}>
                <Row>
                    <Col span={5}>
                        <NavbarComponent></NavbarComponent>
                    </Col>
                    <Col span={19}>
                        <div className={styles.WrapperItemRightLan1}>
                            <div className={styles.WrapperItemRight}>
                                <div
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#fff',
                                        paddingBottom: '30px',
                                    }}
                                >
                                    <SliderComponent arrImg={[slider1, slider2, slider3, slider4, slider5, slider6]} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.WrapperItemRightLan1}>
                            <div className={styles.WrapperItemRight}>
                                <ul className={styles.wrapperList}>
                                    <li className={styles.wrapperItem}>
                                        <a className={styles.wrapperItemLink} href="/cham-soc">
                                            <img
                                                src={chamsoc}
                                                alt="chamsoc"
                                                width="44px"
                                                height="44px"
                                                style={{ borderRadius: '14px' }}
                                            />
                                            <span className={styles.ItemTitle}>Cùng mẹ chăm sóc</span>
                                        </a>
                                    </li>
                                    <li className={styles.wrapperItem}>
                                        <a className={styles.wrapperItemLink} href="/mot-sach">
                                            <img
                                                src={motsach}
                                                alt="mot-sach"
                                                width="44px"
                                                height="44px"
                                                style={{ borderRadius: '14px' }}
                                            />
                                            <span className={styles.ItemTitle}>Mọt sách</span>
                                        </a>
                                    </li>
                                    <li className={styles.wrapperItem}>
                                        <a className={styles.wrapperItemLink} href="/nhin-lai">
                                            <img
                                                src={nhinlai}
                                                alt="nhin-lai"
                                                width="44px"
                                                height="44px"
                                                style={{ borderRadius: '14px' }}
                                            />
                                            <span className={styles.ItemTitle}>Nhìn lại</span>
                                        </a>
                                    </li>
                                    <li className={styles.wrapperItem}>
                                        <a className={styles.wrapperItemLink} href="/yeu-bep">
                                            <img
                                                src={noicom}
                                                alt="yeu-bep"
                                                width="44px"
                                                height="44px"
                                                style={{ borderRadius: '14px' }}
                                            />
                                            <span className={styles.ItemTitle}>Yêu bếp</span>
                                        </a>
                                    </li>
                                    <li className={styles.wrapperItem}>
                                        <a className={styles.wrapperItemLink} href="/sieu-sale">
                                            <img
                                                src={sieusale}
                                                alt="sieu-sale"
                                                width="44px"
                                                height="44px"
                                                style={{ borderRadius: '14px' }}
                                            />
                                            <span className={styles.ItemTitle}>Siêu sale tháng 10</span>
                                        </a>
                                    </li>
                                    <li className={styles.wrapperItem}>
                                        <a className={styles.wrapperItemLink} href="/cung-me-cham-be">
                                            <img
                                                src={thegioicongnghe}
                                                alt="cung-me-cham-be"
                                                width="44px"
                                                height="44px"
                                                style={{ borderRadius: '14px' }}
                                            />
                                            <span className={styles.ItemTitle}>Cùng mẹ chăm bé</span>
                                        </a>
                                    </li>
                                    <li className={styles.wrapperItem}>
                                        <a className={styles.wrapperItemLink} href="/tiki-trading">
                                            <img
                                                src={tititrading}
                                                alt="tiki-trading"
                                                width="44px"
                                                height="44px"
                                                style={{ borderRadius: '14px' }}
                                            />
                                            <span className={styles.ItemTitle}>Tiki Trading</span>
                                        </a>
                                    </li>
                                    <li className={styles.wrapperItem}>
                                        <a className={styles.wrapperItemLink} href="/top-deal">
                                            <img
                                                src={topdeal}
                                                alt="top-deal"
                                                width="44px"
                                                height="44px"
                                                style={{ borderRadius: '14px' }}
                                            />
                                            <span className={styles.ItemTitle}>Top Deal</span>
                                        </a>
                                    </li>
                                    <li className={styles.wrapperItem}>
                                        <a className={styles.wrapperItemLink} href="/vong-quay-tri-an">
                                            <img
                                                src={vongquaytrian}
                                                alt="vong-quay-tri-an"
                                                width="44px"
                                                height="44px"
                                                style={{ borderRadius: '14px' }}
                                            />
                                            <span className={styles.ItemTitle}>Vòng quay tri ân</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.WrapperItemRightLan1}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <img
                                    alt="tiki"
                                    src="https://salt.tikicdn.com/ts/upload/f8/77/0b/0923990ed377f50c3796f9e6ce0dddde.png"
                                    width="204px"
                                    height="32px"
                                    style={{ marginBottom: '10px' }}
                                ></img>

                                <div
                                    className={styles.btnGetAll}
                                    onClick={handleLoadMore}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Xem tất cả
                                </div>
                            </div>
                            <div className={styles.WrapperItemRight}>
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
                                        width={width}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={styles.WrapperItemRightLan1}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '10px',
                                    fontSize: '1.8rem',
                                    fontWeight: '500',
                                }}
                            >
                                Sản phẩm bạn quan tâm
                            </div>
                            <div className={styles.WrapperItemRight}>
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
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default HomePage;

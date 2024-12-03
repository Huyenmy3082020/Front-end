import { Col, Row, Slider } from 'antd';
import styles from '../../pages/CategoryProduct/CategoryProduct.module.scss';
import { useEffect, useState } from 'react';
import * as ProductService from '../../service/Productservice';
import { useParams } from 'react-router-dom';
import CardComponent from '../../components/CardComponent/CardComponent';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import { CaretDownOutlined, CheckOutlined } from '@ant-design/icons';
import Tippy from '@tippyjs/react';
function CategoryProduct() {
    const { id } = useParams();

    const [categoryProduct, setCategoryProduct] = useState([]);
    const [categoryInfo, setCategoryInfo] = useState('');

    const [sortPrice, setSortPrice] = useState('priceASC');

    console.log(sortPrice);
    const [activeButton, setActiveButton] = useState('');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };
    const [filterName, setFilterName] = useState('newest');

    const onClickHandlFilterName = (value) => {
        setFilterName(value);
    };

    useEffect(() => {
        const fetchCategoryProduct = async () => {
            try {
                const res = await ProductService.productCategories(id, filterName, sortPrice);
                if (res && res.data) {
                    setCategoryProduct(res.data);
                    setCategoryInfo(res.data[0].category);
                }
            } catch (error) {
                console.error('Failed to fetch category products:', error);
            }
        };
        if (id) {
            fetchCategoryProduct();
        }
    }, [id, filterName, sortPrice]);

    const handleOnClickPrice = (sort) => {
        setSortPrice(sort);
        setActiveButton('price');
    };
    const ComponenentPrice = () => {
        return (
            <div className={styles.price} style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '10px' }}>
                <div className={styles.wrapperPrice}>
                    <div
                        className={styles.wrapperPriceItem}
                        onClick={() => {
                            onClickHandlFilterName('price');
                        }}
                    >
                        <label
                            className={styles.priceOption}
                            onClick={() => {
                                handleOnClickPrice('priceASC');
                            }}
                        >
                            Giá từ thấp đến cao
                            <CheckOutlined className={styles.iconCheck} />
                        </label>
                    </div>
                    <div className={styles.wrapperPriceItem}>
                        <label
                            className={styles.priceOption}
                            onClick={() => {
                                handleOnClickPrice('priceDESC');
                            }}
                        >
                            Giá từ cao đến thấp
                            <CheckOutlined className={styles.iconCheck} />
                        </label>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.wrapper}>
            <div>
                <Row gutter={24}>
                    <Col span={6}></Col>
                    <Col span={18}>
                        <div className={styles.wrapperList}>
                            <div className={styles.wrapperItem}>
                                <h2>{categoryInfo?.name}</h2>
                            </div>

                            <div className={styles.wrapperItem}>
                                <h2>Khám phá theo danh mục</h2>
                                <div className={styles.discoverCategory}>
                                    <div className={styles.subItemCategory}>
                                        <div>
                                            <img
                                                width="88px"
                                                height="88px"
                                                style={{ borderRadius: '50%', filter: 'brightness(1) invert(0.04)' }}
                                                src="https://salt.tikicdn.com/ts/category/cc/66/3d/4e4f1b8b1e772fe9e09611c6bec98746.png"
                                                alt=""
                                            />
                                        </div>
                                        <a href="">Sách tiếng anh</a>
                                    </div>
                                    <div className={styles.subItemCategory}>
                                        <div>
                                            <img
                                                width="88px"
                                                height="88px"
                                                style={{ borderRadius: '50%', filter: 'brightness(1) invert(0.04)' }}
                                                src="https://salt.tikicdn.com/ts/category/17/59/4f/af1292bf74c4d2862afd269bdfd42a62.png"
                                                alt=""
                                            />
                                        </div>
                                        <a href="">Quà lưu niệm</a>
                                    </div>
                                    <div className={styles.subItemCategory}>
                                        <div>
                                            <img
                                                width="88px"
                                                height="88px"
                                                style={{ borderRadius: '50%', filter: 'brightness(1) invert(0.04)' }}
                                                src="https://salt.tikicdn.com/ts/category/53/0f/bc/f6e936554ec845b45af8f94cbd4f1569.png"
                                                alt=""
                                            />
                                        </div>
                                        <a href="">Sách tiếng việt</a>
                                    </div>
                                    <div className={styles.subItemCategory}>
                                        <div>
                                            <img
                                                width="88px"
                                                height="88px"
                                                style={{ borderRadius: '50%', filter: 'brightness(1) invert(0.04)' }}
                                                src="https://salt.tikicdn.com/ts/category/45/ab/0f/cffe9f60a7b37e0f87a9c50c4478aed9.png"
                                                alt=""
                                            />
                                        </div>
                                        <a href="">Máy tính cá nhân</a>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.wrapperItem} style={{ background: '#ddd' }}>
                                <div className={styles.filterWrapper}>
                                    <div>
                                        <p style={{ color: '#ccc', margin: '0 0 ' }}>Sắp xếp theo</p>
                                    </div>
                                    <div
                                        onClick={() => {
                                            onClickHandlFilterName('bestseller');
                                        }}
                                    >
                                        <button
                                            className={
                                                activeButton === 'related' ? styles.btnFilter : styles.btnFilterActive
                                            }
                                            onClick={() => handleButtonClick('related')}
                                        >
                                            Bán chạy
                                        </button>
                                    </div>
                                    <div
                                        onClick={() => {
                                            onClickHandlFilterName('newest');
                                        }}
                                    >
                                        <button
                                            className={
                                                activeButton === 'related2' ? styles.btnFilter : styles.btnFilterActive
                                            }
                                            onClick={() => handleButtonClick('related2')}
                                        >
                                            Mới nhất
                                        </button>
                                    </div>
                                    <div>
                                        <Tippy
                                            content={<ComponenentPrice></ComponenentPrice>}
                                            placement="bottom-start"
                                            offset={[0, 0]}
                                            interactive
                                        >
                                            <button
                                                className={
                                                    activeButton === 'price' ? styles.btnFilter : styles.btnFilterActive
                                                }
                                                onClick={() => handleButtonClick('price')}
                                            >
                                                {sortPrice === 'priceASC' ? (
                                                    <>Giá từ thấp đến cao</>
                                                ) : (
                                                    <>Giá từ cao đến thấp</>
                                                )}
                                                <CaretDownOutlined />
                                            </button>
                                        </Tippy>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.wrapperItem}>
                                <div className={styles.productList}>
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
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <FooterComponent />
        </div>
    );
}

export default CategoryProduct;

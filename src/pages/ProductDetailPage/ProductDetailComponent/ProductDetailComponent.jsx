import React, { startTransition, useEffect, useMemo, useState } from 'react';
import styles from '../../../pages/ProductDetailPage/ProductDetailComponent/ProductDetail.module.scss';
import * as Productservice from '../../../service/Productservice';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, InputNumber, Row } from 'antd';
import tick from '../../../assets/tick.png';
import chinhhang from '../../../assets/chinhhang.png';
import doitra from '../../../assets/doitra.png';
import freeship from '../../../assets/freeship.png';
import topdeal from '../../../assets/topdeal.png';
import { IconStart } from '../../../components/IconComponent/IconComponent';
import sun from '../../../assets/images/sun.png';
import now from '../../../assets/now.png';
import rose from '../../../assets/images/rose.jpg';
import doitrahang from '../../../assets/doitrahang.png';
import dongkiemhang from '../../../assets/dongkiemhang.png';

import thanhtoan from '../../../assets/thanhtoan.png';
import * as Cartservice from '../../../service/CartService';
import SliderComponentCustom from '../../../components/SliderProductDetail/SliderProductDetail';
import { convertPrice } from '../../../ultil';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../../../redux/slides/OrderSlide';
import FooterComponent from '../../../components/FooterComponent/FooterComponent';
import { addItem, setCartId } from '../../../redux/slides/CartSlide';

function ProductDetailComponent() {
    const [numProduct, setNumproduct] = useState(1);
    const user = useSelector((state) => state.user);
    const { id } = useParams();
    const [products, setProduct] = useState('');
    const dispatch = useDispatch();
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const result = await Productservice.getProductById(id); // Gọi API để lấy sản phẩm
                setProduct(result); // Lưu sản phẩm vào state
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const onchangeInput = (value) => {
        setNumproduct(value);
    };
    const navigate = useNavigate();
    const access_token = localStorage.getItem('access_token');

    const handleAddOrderProduct = async () => {
        if (user?.id) {
            const itemss = {
                quantity: numProduct,
                productId: products._id,
            };

            try {
                const cartData = {
                    userId: user.id,
                    items: [itemss],
                };

                const result = await Cartservice.creataCart({ cartData, access_token: access_token });

                // Sau khi tạo giỏ hàng mới, dispatch để lưu cartId vào Redux
                dispatch(setCartId(result.data.cartId));

                // Gọi API để lấy lại thông tin giỏ hàng và cập nhật Redux
                await fetchCartData(user.id); // Gọi hàm fetchCartData sau khi giỏ hàng được tạo
            } catch (error) {
                console.error('Failed to create cart:', error.message);
            }
        } else {
            navigate('/sign-in');
        }
    };

    const handleBuyProduct = () => {};
    const fetchCartData = async (userId) => {
        try {
            const response = await Cartservice.getAllProductByCart(userId);
            console.log(response);

            // Lưu dữ liệu giỏ hàng vào state (nếu cần) và dispatch vào Redux

            response.items.forEach((item) => {
                dispatch(
                    addItem({
                        productId: item.productId,
                        quantity: item.quantity,
                        productDetails: item.productDetails,
                    }),
                );
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Bạn có thể gọi fetchCartData trong useEffect khi component mount nếu cần
    useEffect(() => {
        if (user?.id) {
            fetchCartData(user.id); // Lấy dữ liệu giỏ hàng khi component load
        }
    }, [user?.id]); // Gọi lại mỗi khi user.id thay đổi

    return (
        <div style={{ paddingTop: '40px' }}>
            <div className={styles.wrapper}>
                <Row>
                    <Col span={9}>
                        <div className={styles.wrapperList}>
                            <div className={styles.wrapperImg}>
                                <div>
                                    <img className={styles.wrapperImgBig} src={products.image}></img>
                                </div>
                                <div
                                    style={{
                                        display: ' flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <a href="" className={styles.wrapperImgLink}>
                                        <img src={products.image} className={styles.wrapperImgSmall} alt="" />
                                    </a>
                                    <a href="" className={styles.wrapperImgLink}>
                                        <img src={products.image} className={styles.wrapperImgSmall} alt="" />
                                    </a>
                                    <a href="" className={styles.wrapperImgLink}>
                                        <img src={products.image} className={styles.wrapperImgSmall} alt="" />
                                    </a>
                                    <a href="" className={styles.wrapperImgLink}>
                                        <img src={products.image} className={styles.wrapperImgSmall} alt="" />
                                    </a>
                                    <a href="" className={styles.wrapperImgLink}>
                                        <img src={products.image} className={styles.wrapperImgSmall} alt="" />
                                    </a>
                                    <a href="" className={styles.wrapperImgLink}>
                                        <img src={products.image} className={styles.wrapperImgSmall} alt="" />
                                    </a>
                                    <a href="" className={styles.wrapperImgLink}>
                                        <img src={products.image} className={styles.wrapperImgSmall} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div style={{ paddingTop: '8px', paddingBottom: '16px' }}>
                                <h2>Đặc điểm nổi bật</h2>
                                <div className={styles.wrapperDes}>
                                    <img src={tick} width="16px" s alt="" />
                                    <span style={{ marginLeft: '4px' }}>
                                        Công nghệ Amino Acid làm sạch sâu da nhẹ nhàng.
                                    </span>
                                </div>
                                <div className={styles.wrapperDes}>
                                    <img src={tick} width="16px" s alt="" />
                                    <span style={{ marginLeft: '4px' }}>
                                        Công nghệ Amino Acid làm sạch sâu da nhẹ nhàng.
                                    </span>
                                </div>
                                <div className={styles.wrapperDes}>
                                    <img src={tick} width="16px" s alt="" />
                                    <span style={{ marginLeft: '4px' }}>
                                        Công nghệ Amino Acid làm sạch sâu da nhẹ nhàng.
                                    </span>
                                </div>
                                <div className={styles.wrapperDes}>
                                    <img src={tick} width="16px" s alt="" />
                                    <span style={{ marginLeft: '4px' }}>
                                        Công nghệ Amino Acid làm sạch sâu da nhẹ nhàng.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className={styles.wrapperList}>
                            <div>
                                <div className={styles.wrapperIcon}>
                                    <div style={{ display: 'flex' }}>
                                        <div>
                                            <img className={styles.warpperIconItem} src={topdeal}></img>
                                        </div>
                                        <div>
                                            <img className={styles.warpperIconItem} src={chinhhang}></img>
                                        </div>
                                        <div>
                                            <img className={styles.warpperIconItem} src={freeship}></img>
                                        </div>
                                        <div>
                                            <img className={styles.warpperIconItem} src={doitra}></img>
                                        </div>
                                    </div>
                                </div>
                                <p className={styles.wrapperProductName}>{products.name}</p>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ marginRight: '6px' }}>4.6</span>
                                    <IconStart></IconStart>
                                    <IconStart></IconStart>
                                    <IconStart></IconStart>
                                    <IconStart></IconStart>
                                    <IconStart></IconStart>
                                    <span className={styles.stock}>({products.countInStock})</span>
                                    <span className={styles.stock}>| Đã bán {products.countInStock}</span>
                                </div>
                                <p className={styles.priceProduct}>{convertPrice(products.price)}</p>
                            </div>
                        </div>
                        <div className={styles.wrapperList}>
                            <div>
                                <h3>Thông tin vận chuyển</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p>Giao đến :{user.address}</p>
                                    <a href="">Đổi</a>
                                </div>
                            </div>
                            <div>
                                <div className={styles.wrapperGiao}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                        <img width="32px" height="16px" src={now} alt="" />
                                        <span style={{ paddingLeft: '6px' }}>Giao siêu tốc 2h</span>
                                    </div>
                                    <span> Trước 10h ngày mai: 10.000₫ 25.000₫</span>
                                </div>
                                <div className={styles.wrapperGiao}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                        <img width="32px" height="16px" src={sun} alt="" />
                                        <span style={{ paddingLeft: '6px' }}>Giao đúng chiều mai</span>
                                    </div>
                                    <span> Trước 10h ngày mai: 10.000₫ 25.000₫</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.wrapperList}>
                            <h3>An toàn mua sắm</h3>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img width="20px" height="20px" src={thanhtoan}></img>
                                <span className={styles.wrapperAnToan}>Được đồng kiểm khi nhận hàng</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img width="20px" height="20px" src={dongkiemhang}></img>
                                <span className={styles.wrapperAnToan}>Được hoàn tiền 200% nếu là hàng giả.</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img width="20px" height="20px" src={doitrahang} alt=""></img>
                                <span className={styles.wrapperAnToan}>
                                    Đổi trả miễn phí trong 30 ngày. Được đổi ý. Chi tiết
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col span={7}>
                        <div className={styles.wrapperList}>
                            <p>Số lượng</p>
                            <InputNumber min={1} value={numProduct} onChange={onchangeInput}></InputNumber>
                            <p className={styles.tamtinh}>Tạm tính</p>
                            <span style={{ fontSize: '24px', fontWeight: '500', marginBottom: '8px' }}>
                                {convertPrice(products.price)}
                            </span>
                            <div style={{ paddingTop: '16px' }}>
                                {' '}
                                <button className={styles.muangay} onClick={handleBuyProduct}>
                                    Mua ngay
                                </button>
                            </div>
                            <div style={{ paddingTop: '16px' }}>
                                {' '}
                                <button className={styles.muatruoctrasau}>Mua trước trả sau </button>
                            </div>
                            <div style={{ paddingTop: '16px' }}>
                                {' '}
                                <button className={styles.muatruoctrasau} onClick={handleAddOrderProduct}>
                                    Thêm vào giỏ
                                </button>
                            </div>
                        </div>
                        <div style={{ paddingTop: '16px' }}></div>
                    </Col>
                </Row>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    );
}

export default ProductDetailComponent;

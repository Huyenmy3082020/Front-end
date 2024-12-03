import { useEffect, useState } from 'react';
import ModalAddShipComponent from '../../components/ModalAddShipComponent/ModalAddShipComponent';
import styles from '../../pages/Shipping/Shipping.module.scss';
import useSelection from 'antd/es/table/hooks/useSelection';
import { useSelector } from 'react-redux';
import * as Cartservice from '../../service/CartService';
import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
function ShippingPage() {
    const [inforShip, setInforShip] = useState([]);
    const [selectedShip, setSelectedShip] = useState('');
    const user = useSelector((state) => state.user);

    const [isvisible, setIsVisible] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:2000/ship/getAllShipByUser/${user?.id}`);
                const data = await response.json();

                setInforShip(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const handleNewShip = async (ship) => {
        setInforShip((prev) => [...prev, ship]);
        setIsVisible(false);
    };
    const navigate = useNavigate();
    const cartId = useSelector((state) => state.cart.cartId);
    const handleOnClickUpdateCart = async (id, cartId) => {
        try {
            setSelectedShip(id);
            const res = await Cartservice.updateShipCart({ id, cartId });

            navigate('/order', { state: { shipData: res.ship } });
            return res;
        } catch (error) {
            console.error('Error updating cart:', error.response || error.message || error);
        }
    };
    const handleOpenAddShipAddress = () => {
        setIsVisible(true);
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperItem}>
                <h2>Địa chỉ giao hàng</h2>
                <p style={{ fontSize: '1.4rem' }}>Chọn địa chỉ ở dưới có sẵn</p>
            </div>
            <div className={styles.wrapperItem}>
                {inforShip?.map((ship) => {
                    return (
                        <div className={styles.container}>
                            <p style={{ fontSize: '1.3rem', fontWeight: '500' }}>{ship.fullname}</p>
                            <p style={{ fontSize: '1.3rem' }}>
                                Địa chỉ:{ship.address},{ship.ward},{ship.district}, {ship.city} Việt Nam
                            </p>
                            <p style={{ fontSize: '1.3rem' }}>Điện thoại: {ship.phone}</p>
                            <div className={styles.btnContainer}>
                                <button
                                    className={
                                        ship.cartId === null ? styles.btnEnableShipAddress : styles.btnCreateShipAddress
                                    }
                                    onClick={() => handleOnClickUpdateCart(ship._id, cartId)}
                                >
                                    Giao đến địa chỉ này
                                </button>
                                <button className={styles.btnUpdateShipAddress}>Cập nhật</button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={styles.wrapperItem}>
                <p style={{ fontSize: '1.4rem' }}>
                    Bạn muốn giao hàng đến địa chỉ khác?{' '}
                    <span onClick={handleOpenAddShipAddress} style={{ cursor: 'pointer', color: 'rgb(0, 182, 240)' }}>
                        Thêm địa chỉ giao hàng mới
                    </span>
                </p>
            </div>
            {isvisible && <ModalAddShipComponent onAddShip={handleNewShip}></ModalAddShipComponent>}
        </div>
    );
}

export default ShippingPage;

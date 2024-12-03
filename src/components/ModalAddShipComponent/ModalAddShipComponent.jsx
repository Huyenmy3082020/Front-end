import React, { useEffect, useState } from 'react';
import styles from '../../components/ModalAddShipComponent/ModalAddShipComponent.module.scss';
import * as ShipService from '../../service/ShipService';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
const ModalAddShipComponent = ({ onAddShip }) => {
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectWard, setSelectWard] = useState('');
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const user = useSelector((state) => state.user);
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://provinces.open-api.vn/api/?depth=3');
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleProvinceChange = async (e) => {
        const provice = e.target.value;
        setSelectedProvince(provice);

        const selectDistance = data.find((p) => p.name === provice);
        setDistricts(selectDistance ? selectDistance.districts : []);
        setSelectedDistrict('');
        setSelectWard('');
        setWards([]);
    };

    const handleDistrictChange = (e) => {
        const district = e.target.value;
        setSelectedDistrict(district);
        const setSelectWard = districts.find((d) => d.name === district);
        setWards(setSelectWard ? setSelectWard.wards : []);
    };
    const cart = useSelector((state) => state.cart.cartId);

    const handleOnClick = async () => {
        try {
            let cartIdToUse = null;

            const existingShip = await ShipService.getShipByCart(cart);

            if (existingShip && existingShip.data && Array.isArray(existingShip.data)) {
                if (existingShip.data.length > 0) {
                    cartIdToUse = null;
                } else {
                    cartIdToUse = cart;
                }
            }

            const res = await ShipService.createShip({
                fullname: name,
                address: address,
                city: selectedProvince,
                district: selectedDistrict,
                ward: selectWard,
                phone: phone,
                status: 'pending',
                cartId: cartIdToUse,
                userId: user.id,
            });

            onAddShip(res);

            return res.data;
        } catch (error) {
            console.error('Error in handleOnClick:', error);
        }
    };

    const handleOnChaneFullName = (e) => {
        setName(e.target.value);
    };
    const handleOnChangePhone = (e) => {
        setPhone(e.target.value);
    };
    const handleOnChaneAddress = (e) => {
        setAddress(e.target.value);
    };

    const handleOnChangeWard = (e) => {
        setSelectWard(e.target.value);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.wrapperItem}>
                    <label htmlFor="fullname">Họ tên:</label>
                    <input
                        className={styles.wrapperItemInput}
                        onChange={handleOnChaneFullName}
                        type="text"
                        id="fullname"
                        name="fullname"
                    />
                </div>
                <div className={styles.wrapperItem}>
                    <label htmlFor="phone">Số điện thoại:</label>
                    <input
                        className={styles.wrapperItemInput}
                        onChange={handleOnChangePhone}
                        type="text"
                        id="phone"
                        name="phone"
                    />
                </div>
                <div className={styles.wrapperItem}>
                    <label htmlFor="city">Tỉnh/Thành phố:</label>
                    <select id="city" name="city" onChange={handleProvinceChange}>
                        <option value="">Chọn Tỉnh/Thành phố</option>
                        {data?.map((provice) => {
                            return <option value={provice.name}>{provice.name}</option>;
                        })}
                    </select>
                </div>
                <div className={styles.wrapperItem}>
                    <label htmlFor="district">Quận/Huyện:</label>
                    <select id="district" name="district" onChange={handleDistrictChange}>
                        <option value="">Chọn Quan/huyen</option>
                        {districts?.map((district) => (
                            <option value={district.name}>{district.name}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.wrapperItem}>
                    <label htmlFor="ward">Phường/Xã:</label>
                    <select id="ward" name="ward" onChange={handleOnChangeWard}>
                        <option value="">Chọn Phường/Xã </option>
                        {wards.map((ward) => (
                            <option value={ward.name}>{ward.name}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.wrapperItem}>
                    <label htmlFor="address">Địa chỉ chi tiết:</label>
                    <input
                        className={styles.wrapperItemInput}
                        onChange={handleOnChaneAddress}
                        type="text"
                        id="address"
                    />
                </div>
                <div className={styles.wrapperItem}>
                    <label>Loại địa chỉ:</label>
                    <div>
                        <label>
                            <input type="radio" name="addressType" />
                            Nhà riêng
                        </label>
                        <label>
                            <input type="radio" name="addressType" />Ở quận
                        </label>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button
                        onClick={handleOnClick}
                        style={{
                            flex: '1 0 40%',
                            background: 'rgb(0, 182, 240)',
                            borderColor: 'rgb(225, 225, 225)',
                            outlineColor: 'rgb(204, 204, 204)',
                            fontSize: '13px',
                            padding: '10px 0px',
                            borderRadius: '2px',
                            marginRight: '8px',
                            cursor: 'pointer',
                            width: '150px',
                            color: 'rgb(255, 255, 255)',
                        }}
                    >
                        Giao đến địa chỉ này
                    </button>{' '}
                    <button
                        onClick={handleOnClick}
                        style={{
                            flex: '1 0 40%',
                            background: 'rgb(247, 247, 247)',
                            borderColor: 'rgb(225, 225, 225)',
                            outlineColor: 'rgb(204, 204, 204)',
                            fontSize: '13px',
                            padding: '10px 0px',
                            borderRadius: '2px',
                            width: '150px',
                            cursor: 'pointer',
                            marginRight: '10px',
                        }}
                    >
                        Huỷ bỏ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalAddShipComponent;

import React, { useEffect, useState } from 'react';
import styles from '../../pages/Profile/ProfilePage.module.scss';
import { useSelector } from 'react-redux';
import * as UserService from '../../service/Userservice';
import { useMutationHooks } from '../../hooks/useMutationHook';
import { Avatar, Button, Col, Radio, Row, Select, Modal, Input } from 'antd';
import icondienthoai from '../../assets/icondienthoai.png';
import email from '../../assets/email (1).png';
import NavbarProfile from '../../components/NavbarProfile/NavbarProfile.jsx';

function ProfilePage() {
    const user = useSelector((state) => state.user);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [avatar, setAvatar] = useState('');
    const [birthday, setBirthday] = useState({ day: '', month: '', year: '' });
    const [modalInputValue, setModalInputValue] = useState('');
    const [modalIcon, setModalIcon] = useState('');

    // State cho Modal
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [modalContent, setModalContent] = useState('');

    const mutation = useMutationHooks((data) => {
        const { id, access_token, ...rest } = data;
        UserService.UpdateUser(id, rest, access_token);
    });

    const handleOnChangeName = (value) => {
        setName(value);
    };

    const handleOnChangePhone = (value) => {
        setPhone(value);
    };

    const handleOnChangeAddress = (value) => {
        setAddress(value);
    };

    const handleOnChangeEmail = (value) => {
        setEmail(value);
    };

    const handleOnChangeBirthday = (field, value) => {
        setBirthday((prev) => ({ ...prev, [field]: value }));
    };

    const countries = [
        'Vietnam',
        'United States',
        'Canada',
        'France',
        'Germany',
        'Japan',
        'Australia',
        'China',
        'India',
        'Brazil',
    ];

    const handleUpdate = async () => {
        mutation.mutate({
            id: user?.id,
            name,
            phone,
            address,
            avatar,
            birthday,
            access_token: user?.access_token,
        });
    };

    useEffect(() => {
        if (user) {
            setEmail(user.email || '');
            setPhone(user.phone || '');
            setAvatar(user.avatar || '');
            setName(user.name || '');
            setAddress(user.address || '');
            setBirthday(user.birthday || { day: '', month: '', year: '' });
        }
    }, [user]);

    // Hàm mở modal
    const showModal = (content, img) => {
        setModalContent(content);
        setModalIcon(img);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        console.log('Giá trị mới: ', modalInputValue); // In ra giá trị input
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleClickUpdatePhone = () => {
        showModal('Cập nhật số điện thoại', icondienthoai);
    };

    const handleClickUpdateEmail = () => {
        showModal('Cập nhật địa chỉ email', email);
    };

    const handleClickUpdatePassword = () => {
        showModal('Đổi mật khẩu');
    };

    return (
        <div style={{ backgroundColor: '#f5f5f5' }}>
            <Row>
                <Col span={6}>
                    <NavbarProfile></NavbarProfile>
                </Col>
                <Col span={9}>
                    <div
                        className={styles.wrapper}
                        style={{
                            paddingLeft: '16px',
                            backgroundColor: '#fff',
                            paddingBottom: '57px',
                            marginTop: '16px',
                            padding: '16px ',
                        }}
                    >
                        <div className={styles.wrapperList}>
                            <span>Thông tin cá nhân</span>
                            <div className={styles.wrapperItem}>
                                <div className={styles.avatar}>
                                    <div>
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png"
                                            alt=""
                                            width="50px"
                                            height="50px"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span className={styles.wrapperName}>Họ và tên</span>
                                        <input
                                            className={styles.wrapperInput}
                                            value={name}
                                            onChange={(e) => handleOnChangeName(e.target.value)}
                                        />
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', paddingTop: '20px' }}>
                                        <span className={styles.wrapperName}>Địa chỉ</span>
                                        <input
                                            className={styles.wrapperInput}
                                            value={address}
                                            onChange={(e) => handleOnChangeAddress(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.wrapperItem}>
                                <div>Ngày sinh</div>
                                <div className={styles.wrapperRight}>
                                    <input
                                        className={styles.wrapperInput}
                                        style={{ width: '100px', marginRight: '20px' }}
                                    />
                                    <input
                                        className={styles.wrapperInput}
                                        style={{ width: '100px', marginRight: '20px' }}
                                    />
                                    <input className={styles.wrapperInput} style={{ width: '80px' }} />
                                </div>
                            </div>
                            <div className={styles.wrapperItem}>
                                <div>Giới tính</div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginLeft: '8px' }}>
                                        <Radio></Radio>
                                        Nam
                                    </div>
                                    <div style={{ marginLeft: '8px' }}>
                                        <Radio></Radio>
                                        Nữ
                                    </div>
                                    <div style={{ marginLeft: '8px' }}>
                                        <Radio></Radio>
                                        Khác
                                    </div>
                                </div>
                            </div>
                            <div className={styles.wrapperItem}>
                                <div>Chọn quốc tịch</div>
                                <Select style={{ width: 200 }} placeholder="Chọn quốc gia">
                                    {countries.map((country) => (
                                        <Select.Option key={country} value={country}>
                                            {country}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </div>
                        </div>

                        <Button type="primary" onClick={handleUpdate} style={{ marginTop: '20px' }}>
                            Lưu thay đổi
                        </Button>
                    </div>
                </Col>
                <Col span={9}>
                    <div
                        className={styles.wrapper}
                        style={{
                            padding: '10px',
                            borderLeft: '1px solid #ddd',
                            backgroundColor: '#fff',
                            marginTop: '16px',
                        }}
                    >
                        <div className={styles.wrapperList}>
                            <div style={{ paddingTop: '10px', color: 'rgb(100, 100, 109)' }}>
                                <span style={{ fontSize: '1.5rem' }}>Số điện thoại và Email</span>

                                <div className={styles.wrapperItem}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png"
                                            width="24px"
                                            height="24px"
                                            alt=""
                                            style={{ marginRight: '10px' }}
                                        />
                                        <span>Số điện thoại</span>
                                    </div>
                                    <button className={styles.btnCapNhat} onClick={handleClickUpdatePhone}>
                                        Cập nhật
                                    </button>
                                </div>
                                <div className={styles.wrapperItem}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png"
                                            width="24px"
                                            height="24px"
                                            alt=""
                                            style={{ marginRight: '10px' }}
                                        />
                                        <span>Email</span>
                                    </div>
                                    <button className={styles.btnCapNhat} onClick={handleClickUpdateEmail}>
                                        Cập nhật
                                    </button>
                                </div>
                            </div>
                            <div style={{ paddingTop: '10px', color: 'rgb(100, 100, 109)' }}>
                                <span style={{ fontSize: '1.5rem' }}>Bảo mật</span>
                                <div className={styles.wrapperItem}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/account/lock.png"
                                            width="24px"
                                            height="24px"
                                            alt=""
                                            style={{ marginRight: '10px' }}
                                        />
                                        <span>Đổi mật khẩu</span>
                                    </div>
                                    <button className={styles.btnCapNhat}>Cập nhật</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Modal */}
            <Modal title="Cập nhật thông tin " visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div style={{ padding: '24px' }}>
                    <p>{modalContent}</p>
                    <div>
                        <img src={modalIcon} className={styles.imgInputmodal}></img>
                        <input
                            value={modalInputValue}
                            onChange={(e) => setModalInputValue(e.target.value)}
                            className={styles.inputmodal}
                        ></input>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ProfilePage;

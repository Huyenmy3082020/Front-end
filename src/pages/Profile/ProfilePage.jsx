import React, { useEffect, useState } from 'react';
import styles from '../../pages/Profile/ProfilePage.module.scss';
import { useSelector } from 'react-redux';
import * as UserService from '../../service/Userservice';
import { useMutationHooks } from '../../hooks/useMutationHook';
import { Button, Col, Radio, Row, Select, Input, message } from 'antd';
import NavbarProfile from '../../components/NavbarProfile/NavbarProfile.jsx';
import { toast } from 'react-toastify';
function ProfilePage() {
    const user = useSelector((state) => state.user);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [avatar, setAvatar] = useState('');
    const [date, setDate] = useState('');

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

    const handleOnChangeDate = (value) => {
        setDate(value);
    };

    useEffect(() => {
        if (user) {
            setEmail(user.email || '');
            setPhone(user.phone || '');
            setAvatar(user.avatar || '');
            setName(user.name || '');
            setAddress(user.address || '');
        }
    }, [user]);
    const [gender, setGender] = useState(null);
    const mutation = useMutationHooks((data) => {
        const { id, access_token, ...rest } = data;
        UserService.UpdateUser(id, rest, access_token);
    });
    const handleClickUpdate = () => {
        mutation.mutate({
            name: name,
            id: user.id,
            email: email,
            phone: phone,
            avatar: avatar,
            address: address,
            date: date,
            access_token: user.access_token,
            gender: gender,
        });
        message.success('Cập nhật thông tin thành công!');
    };
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };
    const handleOnchangeAvatar = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleClickDiv = () => {
        document.getElementById('avatarInput').click();
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
                            height: '436px',
                        }}
                    >
                        <div className={styles.wrapperList}>
                            <span>Thông tin cá nhân</span>
                            <div className={styles.wrapperItem}>
                                <div onChange={handleOnchangeAvatar}>
                                    <div className={styles.avatar} onClick={handleClickDiv}>
                                        {user?.avatar ? (
                                            <div>
                                                <img
                                                    src={avatar}
                                                    alt=""
                                                    style={{
                                                        width: ' 100px',
                                                        height: '100px',
                                                        borderRadius: '50%',
                                                    }}
                                                />
                                                <input
                                                    type="file"
                                                    id="avatarInput"
                                                    style={{ display: 'none' }}
                                                    onChange={handleOnchangeAvatar}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png"
                                                    alt=""
                                                    width="50px"
                                                    height="50px"
                                                />
                                                <input
                                                    type="file"
                                                    id="avatarInput"
                                                    style={{ display: 'none' }}
                                                    onChange={handleOnchangeAvatar}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span className={styles.wrapperName}>Họ và tên</span>
                                        <input
                                            placeholder="Nhập họ và tên"
                                            className={styles.wrapperInput}
                                            value={name}
                                            onChange={(e) => handleOnChangeName(e.target.value)}
                                        />
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', paddingTop: '20px' }}>
                                        <span className={styles.wrapperName}>Địa chỉ</span>
                                        <input
                                            placeholder="Nhập địa chỉ"
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
                                        type="date"
                                        value={date}
                                        onChange={(e) => {
                                            handleOnChangeDate(e.target.value);
                                        }}
                                        className={styles.wrapperInput}
                                        style={{ width: '200px', marginRight: '20px' }}
                                    />
                                </div>
                            </div>
                            <div className={styles.wrapperItem}>
                                <div>Giới tính</div>
                                <div style={{ display: 'flex' }}>
                                    <Radio.Group onChange={handleGenderChange} value={gender}>
                                        <div style={{ display: 'flex' }}>
                                            <div style={{ marginLeft: '8px' }}>
                                                <Radio value="nam">Nam</Radio>
                                            </div>
                                            <div style={{ marginLeft: '8px' }}>
                                                <Radio value="nu">Nữ</Radio>
                                            </div>
                                            <div style={{ marginLeft: '8px' }}>
                                                <Radio value="khac">Khác</Radio>
                                            </div>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                            <Button type="primary" style={{ marginTop: '20px' }} onClick={handleClickUpdate}>
                                Lưu thay đổi
                            </Button>
                        </div>
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
                                        <input
                                            type="text"
                                            onChange={(e) => {
                                                handleOnChangePhone(e.target.value);
                                            }}
                                            className={styles.inputUpdate}
                                            placeholder="Nhập số diện thoại "
                                        />
                                    </div>
                                    <button className={styles.btnCapNhat} onClick={handleClickUpdate}>
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
                                        <input
                                            type="text"
                                            className={styles.inputUpdate}
                                            placeholder="Nhập email"
                                            onChange={(e) => {
                                                handleOnChangeEmail(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <button className={styles.btnCapNhat} onClick={handleClickUpdate}>
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
                                        <input type="text" className={styles.inputUpdate} placeholder="Đổi mật khẩu" />
                                    </div>
                                    <button className={styles.btnCapNhat}>Cập nhật</button>
                                </div>
                                <div className={styles.wrapperItem}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/99/50/d7/cc0504daa05199e1fb99cd9a89e60fa5.jpg"
                                            width="24px"
                                            height="24px"
                                            alt=""
                                            style={{ marginRight: '10px' }}
                                        />
                                        <input
                                            type="text"
                                            className={styles.inputUpdate}
                                            placeholder="Thiết lập mã pin"
                                        />
                                    </div>
                                    <button className={styles.btnCapNhat}>Thiết lập</button>
                                </div>
                                <div className={styles.wrapperItem}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                                            width="24px"
                                            height="24px"
                                            alt=""
                                            style={{ marginRight: '10px' }}
                                        />
                                    </div>
                                    <button className={styles.btnCapNhat}>Yêu cầu</button>
                                </div>
                            </div>
                            <div style={{ paddingTop: '10px', color: 'rgb(100, 100, 109)' }}>
                                <span style={{ fontSize: '1.5rem' }}>Liên kết</span>
                                <div className={styles.wrapperItem}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/account/facebook.png"
                                            width="24px"
                                            height="24px"
                                            alt=""
                                            style={{ marginRight: '10px' }}
                                        />
                                        <span>Facebook</span>
                                    </div>
                                    <button className={styles.btnCapNhat}>Liên kết</button>
                                </div>
                                <div className={styles.wrapperItem}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/account/google.png"
                                            width="24px"
                                            height="24px"
                                            alt=""
                                            style={{ marginRight: '10px' }}
                                        />
                                        <span>Google</span>
                                    </div>
                                    <button className={styles.btnCapNhat}>Liên kết</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ProfilePage;

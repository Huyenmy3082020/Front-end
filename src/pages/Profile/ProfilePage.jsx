import React, { useEffect, useState } from 'react';
import styles from '../../pages/Profile/ProfilePage.module.scss';
import { useSelector } from 'react-redux';
import * as UserService from '../../service/Userservice';
import { useMutationHooks } from '../../hooks/useMutationHook';
import { Avatar, Button, Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { getBase64 } from '../../ultil.js';
function ProfilePage() {
    const user = useSelector((state) => state.user);
    console.log(user);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [avatar, setAvatar] = useState('');

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
    // const handleOnChangeAvatar = async ({ file }) => {
    //     const fileObj = file?.originFileObj;

    //     if (fileObj && (fileObj instanceof Blob || fileObj instanceof File)) {
    //         try {
    //             if (!file.url && !file.preview) {
    //                 const base64 = await getBase64(fileObj);
    //                 file.preview = base64;
    //             }
    //         } catch (error) {
    //             console.error('Error reading file:', error);
    //         }
    //     } else {
    //         console.error('Invalid file object:', file);
    //     }
    // };

    const handleOnChangeEmail = (value) => {
        setEmail(value);
    };
    const handleUpdate = async () => {
        mutation.mutate({ id: user?.id, email, name, phone, address, avatar, access_token: user?.access_token });
    };

    useEffect(() => {
        if (user) {
            setEmail(user.email || '');
            setPhone(user.phone || '');
            setAvatar(user.avatar || ''); // Chỉnh sửa từ `avtar` thành `avatar`
            setName(user.name || '');
            setAddress(user.address || '');
        }
    }, [user]);
    return (
        <div>
            <Row>
                <Col span={6}></Col>
                <Col span={18}>
                    <div className={styles.wrapper}>
                        <div className={styles.wrapperList}>
                            <h2>Thong tin ca nhan</h2>
                            <Avatar size={64} icon={<UserOutlined />} />
                            <div className={styles.wrapperItem}>
                                <span>Ho va ten</span>
                                <input></input>
                            </div>
                            <div className={styles.wrapperItem}>
                                <span>Ho va ten</span>
                                <input></input>
                            </div>
                            <div className={styles.wrapperItem}>
                                <span>Ho va ten</span>
                                <input></input>
                            </div>
                            <div className={styles.wrapperItem}>
                                <span>Ho va ten</span>
                                <input></input>
                            </div>

                            <div className={styles.wrapperItem}>
                                <span>Ho va ten</span>
                                <input></input>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ProfilePage;

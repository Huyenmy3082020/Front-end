import React, { useEffect, useState } from 'react';
import { WrapperHeader, WrapperContentProfile, WrapperLabel, WrapperInput, WrapperFile } from './style';
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { useSelector } from 'react-redux';
import * as UserService from '../../service/Userservice';
import { useMutationHooks } from '../../hooks/useMutationHook';
import { Button } from 'antd';
import { getBase64 } from '../../ultil.js';
import { UploadOutlined } from '@ant-design/icons';
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
    console.log(mutation);
    const handleOnChangeName = (value) => {
        setName(value);
    };

    const handleOnChangePhone = (value) => {
        setPhone(value);
    };
    const handleOnChangeAddress = (value) => {
        setAddress(value);
    };
    const handleOnChangeAvatar = async ({ file }) => {
        // Kiểm tra nếu `file.originFileObj` có tồn tại và là đối tượng File/Blob
        const fileObj = file?.originFileObj;

        if (fileObj && (fileObj instanceof Blob || fileObj instanceof File)) {
            try {
                if (!file.url && !file.preview) {
                    const base64 = await getBase64(fileObj);
                    file.preview = base64;
                }
            } catch (error) {
                console.error('Error reading file:', error);
            }
        } else {
            console.error('Invalid file object:', file);
        }
    };

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
        <div style={{ width: '1100px', margin: '0 auto', height: '500px' }}>
            <WrapperHeader>Thong tin nguoi dung</WrapperHeader>
            <WrapperContentProfile>
                <WrapperInput>
                    <WrapperLabel htmlFor="name">Name</WrapperLabel>
                    <InputFormComponent value={name} onChange={handleOnChangeName}></InputFormComponent>
                    <ButtonComponent
                        onClick={handleUpdate}
                        size={40}
                        styleButton={{
                            background: 'rgb(255,57,69)',
                            height: '40px',
                            width: 'fit-content',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '10px 10px',
                            color: 'rgb(26,248,255)',
                            fontSize: '20px',
                            cursor: 'pointer',
                        }}
                        textButton={'Cập nhật'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: 700 }}
                    />
                </WrapperInput>
                <WrapperInput>
                    <WrapperLabel>Email</WrapperLabel>
                    <InputFormComponent
                        value={email}
                        onChange={handleOnChangeEmail}
                        placeholder="Nhap email"
                    ></InputFormComponent>
                    <ButtonComponent
                        onClick={handleUpdate}
                        size={40}
                        styleButton={{
                            background: 'rgb(255,57,69)',
                            height: '40px',
                            width: 'fit-content',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '10px 10px',
                            color: 'rgb(26,248,255)',
                            fontSize: '20px',
                            cursor: 'pointer',
                        }}
                        textButton={'Cập nhật'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: 700 }}
                    />
                </WrapperInput>
                <WrapperInput>
                    <WrapperLabel>Phone</WrapperLabel>
                    <InputFormComponent value={phone} onChange={handleOnChangePhone} placeholder="Nhap email">
                        <div style={{ width: '1px', height: '30px', background: 'red' }}></div>
                    </InputFormComponent>
                    <ButtonComponent
                        onClick={handleUpdate}
                        size={40}
                        styleButton={{
                            background: 'rgb(255,57,69)',
                            height: '40px',
                            width: 'fit-content',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '10px 10px',
                            color: 'rgb(26,248,255)',
                            fontSize: '20px',
                            cursor: 'pointer',
                        }}
                        textButton={'Cập nhật'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: 700 }}
                    />
                </WrapperInput>
                <WrapperInput>
                    <WrapperLabel>Address</WrapperLabel>
                    <InputFormComponent value={address} onChange={handleOnChangeAddress} placeholder="Nhap email">
                        <div style={{ width: '1px', height: '30px', background: 'red' }}></div>
                    </InputFormComponent>
                    <ButtonComponent
                        onClick={handleUpdate}
                        size={40}
                        styleButton={{
                            background: 'rgb(255,57,69)',
                            height: '40px',
                            width: 'fit-content',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '10px 10px',
                            color: 'rgb(26,248,255)',
                            fontSize: '20px',
                            cursor: 'pointer',
                        }}
                        textButton={'Cập nhật'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: 700 }}
                    />
                </WrapperInput>
                <WrapperInput>
                    <WrapperLabel>Avatar</WrapperLabel>
                    <WrapperFile onChange={handleOnChangeAvatar} maxCount="1">
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </WrapperFile>
                    {avatar && (
                        <img
                            src={avatar}
                            style={{ height: '60px', width: '60px', borderRadius: '50%', objectFit: 'cover' }}
                            alt="avatar"
                        ></img>
                    )}

                    <ButtonComponent
                        onClick={handleUpdate}
                        size={40}
                        styleButton={{
                            background: 'rgb(255,57,69)',
                            height: '40px',
                            width: 'fit-content',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '10px 10px',
                            color: 'rgb(26,248,255)',
                            fontSize: '20px',
                            cursor: 'pointer',
                        }}
                        textButton={'Cập nhật'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: 700 }}
                    />
                </WrapperInput>
            </WrapperContentProfile>
        </div>
    );
}

export default ProfilePage;

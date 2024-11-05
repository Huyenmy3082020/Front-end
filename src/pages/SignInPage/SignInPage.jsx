import React, { useEffect, useState } from 'react';
import { WrapperContainerLeft, WrapperContainerRight } from './style';
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import anhlogin from '../../assets/images/anhlogin.png';
import { Image } from 'antd';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { SocialHeading, SocialItem, SocialItemList, WrapperText, ImgClose } from './style';
import fb from '../../assets/images/fb.png';
import google from '../../assets/images/google.png';
import close from '../../assets/images/close.png';
import * as Userservice from '../../service/Userservice';
import { useMutationHooks } from '../../hooks/useMutationHook';
import SpinnerComponent from '../../components/Spinner/spinnerComponent';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/slides/userSlide';

function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const mutation = useMutationHooks(Userservice.loginUser);
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    };

    const handleGetDetailUser = async (id, token) => {
        try {
            const res = await Userservice.getDetailUser(id, token);
            dispatch(
                updateUser({
                    ...res?.data,
                    access_token: token,
                }),
            );
        } catch (error) {
            console.error('Failed to fetch user details:', error);
        }
    };

    const handleSignIn = () => {
        setIsLoading(true);
        setErrorMessage('');
        mutation.mutate(
            { email, password },
            {
                onSuccess: (data) => {
                    setIsLoading(false);
                    handleHome();

                    localStorage.setItem('access_token', data?.accessToken);

                    try {
                        const decode = jwtDecode(data?.accessToken);
                        handleGetDetailUser(decode?.id, data?.accessToken);
                    } catch (decodeError) {
                        setErrorMessage('Failed to decode the token.');
                    }
                },
                onError: (error) => {
                    setIsLoading(false);
                    if (error.response && error.response.data) {
                        setErrorMessage(error.response.data.message);
                    } else {
                        setErrorMessage('An unexpected error occurred');
                    }
                },
            },
        );
    };

    const handleOnChangeEmail = (value) => setEmail(value);
    const handleOnChangePassword = (value) => setPassword(value);

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 0 ,0 ,0.53)',
                height: '100vh',
            }}
        >
            <div
                style={{
                    borderRadius: '6px',
                    background: '#fff',
                    display: 'flex',
                    position: 'relative',
                }}
            >
                <div>
                    <ImgClose src={close} alt="close" />
                </div>

                <WrapperContainerLeft>
                    <div style={{ marginBottom: '20px' }}>
                        <h1
                            style={{
                                margin: '0px 0px 10px',
                                fontSize: '30px',
                                fontWeight: '500',
                            }}
                        >
                            Xin chào
                        </h1>
                        <p style={{ margin: '0px', fontSize: '15px' }}>Đăng nhập hoặc tạo tài khoản</p>
                    </div>
                    <div>
                        <div>
                            <h4 style={{ fontSize: '16px', color: 'rgb(120, 120, 120)' }}>Nhập tài khoản</h4>
                            <InputFormComponent
                                placeholder="Nhập tài khoản"
                                type="text"
                                value={email}
                                onChange={handleOnChangeEmail}
                            />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <div style={{ position: 'relative' }}>
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: 'absolute',
                                        top: '37px',
                                        right: '10px',
                                        fontSize: '16px',
                                        zIndex: 10,
                                        cursor: 'pointer',
                                    }}
                                >
                                    {showPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
                                </span>
                            </div>
                            <h4 style={{ fontSize: '16px', color: 'rgb(120, 120, 120)' }}>Nhập mật khẩu</h4>
                            <InputFormComponent
                                placeholder="Nhập mật khẩu"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handleOnChangePassword}
                            />
                        </div>
                    </div>

                    {errorMessage && (
                        <div style={{ color: 'red', fontSize: '16px', textAlign: 'center', margin: '10px 0' }}>
                            {errorMessage}
                        </div>
                    )}

                    <SpinnerComponent isLoading={isLoading}>
                        <ButtonComponent
                            onClick={handleSignIn}
                            disabled={!email.length || !password.length}
                            size={40}
                            styleButton={{
                                background: 'rgb(255,57,69)',
                                height: '48px',
                                width: '100%',
                                border: 'none',
                                borderRadius: '4px',
                                margin: '30px 0px 10px',
                                color: 'rgb(255, 255, 255)',
                                fontSize: '20px',
                                cursor: 'pointer',
                            }}
                            textButton={'Đăng nhập'}
                            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: 700 }}
                        />
                    </SpinnerComponent>

                    <p
                        style={{
                            fontSize: '14px',
                            margin: '10px 0px 0px',
                            textAlign: 'center',
                            color: 'rgb(13, 92, 182)',
                            cursor: 'pointer',
                        }}
                    >
                        Quên mật khẩu
                    </p>
                    <div
                        style={{
                            textAlign: 'center',
                            margin: '60px 0px 0px',
                        }}
                    >
                        <SocialHeading>Hoặc tiếp tục bằng</SocialHeading>
                        <SocialItem>
                            <SocialItemList>
                                <img style={{ width: '58px', cursor: 'pointer' }} src={fb} alt="facebook" />
                            </SocialItemList>
                            <SocialItemList>
                                <img style={{ width: '58px', cursor: 'pointer' }} src={google} alt="google" />
                            </SocialItemList>
                        </SocialItem>
                    </div>
                    <p
                        style={{
                            fontSize: '12px',
                            color: 'rgb(120, 120, 120)',
                            lineHeight: '16px',
                            textAlign: 'start',
                        }}
                    >
                        Bằng việc tiếp tục, bạn đã đọc và đồng ý với
                        <WrapperText href="https://hotro.tiki.vn/s/article/dieu-khoan-su-dung">
                            điều khoản sử dụng
                        </WrapperText>{' '}
                        và{' '}
                        <WrapperText href="https://tiki.vn/bao-mat-thong-tin-ca-nhan">
                            Chính sách bảo mật thông tin cá nhân
                        </WrapperText>{' '}
                        của Tiki
                    </p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={anhlogin} preview={false} alt="img_logo" height="200px" width="200px" />
                    <div
                        style={{
                            margin: '30px 0px 0px',
                            textAlign: 'center',
                        }}
                    >
                        <h4
                            style={{
                                margin: '0px 0px 5px',
                                color: 'rgb(11, 116, 229)',
                                fontSize: '17px',
                                fontWeight: '500',
                            }}
                        >
                            Mua sắm tại Tiki
                        </h4>
                        <span
                            style={{
                                fontSize: '13px',
                                color: 'rgb(11, 116, 229)',
                                fontWeight: '500',
                            }}
                        >
                            Siêu ưu đãi mỗi ngày
                        </span>
                    </div>
                </WrapperContainerRight>
            </div>
        </div>
    );
}

export default SignInPage;

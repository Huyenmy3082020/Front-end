import React, { useEffect, useState } from 'react';
import { WrapperContainerLeft, WrapperContainerRight } from './style';
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import anhlogin from '../../assets/images/anhlogin.png';
import { Image, message } from 'antd';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { ImgClose } from './style';
import * as Userservice from '../../service/Userservice';
import close from '../../assets/images/close.png';
import { useNavigate } from 'react-router-dom';
import { success, error, warning } from '../../components/Message/MessageComponent';
import { useMutationHooks } from '../../hooks/useMutationHook';
function SignUpPage() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/sign-in');
    };

    const [showpassword, setShowPassword] = useState(false);
    const [showconfirmPassword, setshowconfirmPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const mutation = useMutationHooks(Userservice.signUpUser);
    const { isSuccess, isError } = mutation;

    useEffect(() => {
        if (isSuccess) {
            success();
            handleSignIn();
            return;
        }
    }, [isSuccess]);

    const handleSignIn = () => {
        setIsLoading(true);
        setErrorMessage('');

        mutation.mutate(
            { email, password, confirmPassword },
            {
                onSuccess: (data) => {
                    setIsLoading(false);
                    navigate('/sign-in');
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

    const handleOnChangeEmail = (value) => {
        setEmail(value);
    };
    const handleOnChangePassword = (value) => {
        setPassword(value);
    };

    const handleOnChangeConfirmPassword = (value) => {
        setConfirmPassword(value);
    };

    console.log(password);
    console.log(confirmPassword);
    console.log({ email, password, confirmPassword });
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
                    width: '',
                    borderRadius: '6px',
                    background: '#fff',
                    display: 'flex',
                    position: 'relative',
                }}
            >
                <div>
                    <ImgClose src={close} alt="close" style={{}} />
                </div>

                <WrapperContainerLeft>
                    <div style={{ marginBottom: '20px' }}>
                        <h1
                            style={{
                                margin: ' 0px 0px 10px;',
                                fontSize: '24px',
                                fontWeight: '500',
                            }}
                        >
                            {' '}
                            Xin chào
                        </h1>
                        <p style={{ margin: '0px', fontSize: '15px' }}>Đăng nhập vào tài khoản </p>
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
                                    onClick={() => setShowPassword(!showpassword)}
                                    style={{
                                        position: 'absolute',
                                        top: '37px',
                                        right: '10px',
                                        fontSize: '16px',
                                        zIndex: 10,
                                        cursor: 'pointer',
                                    }}
                                >
                                    {showpassword ? <EyeFilled /> : <EyeInvisibleFilled />}
                                </span>
                            </div>
                            <h4 style={{ fontSize: '16px', color: 'rgb(120, 120, 120)' }}>Nhập mật khẩu</h4>
                            <InputFormComponent
                                placeholder="Nhập mật khẩu"
                                type={showpassword ? 'text' : 'password'}
                                value={password}
                                onChange={handleOnChangePassword}
                            />
                        </div>

                        <div style={{ marginTop: '10px' }}>
                            <div style={{ position: 'relative' }}>
                                <span
                                    onClick={() => setshowconfirmPassword(!showconfirmPassword)}
                                    style={{
                                        position: 'absolute',
                                        top: '37px',
                                        right: '10px',
                                        fontSize: '16px',
                                        zIndex: 10,
                                        cursor: 'pointer',
                                    }}
                                >
                                    {showconfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
                                </span>
                            </div>
                            <h4 style={{ fontSize: '16px', color: 'rgb(120, 120, 120)' }}>Nhập lại mât khẩu</h4>
                            <InputFormComponent
                                placeholder="Nhập  lại mật khẩu"
                                type={showconfirmPassword ? 'text' : 'password'}
                                onChange={handleOnChangeConfirmPassword}
                                value={confirmPassword}
                            />
                        </div>
                    </div>
                    {/* Hiển thị thông báo lỗi nếu có */}
                    {errorMessage && (
                        <div style={{ color: 'red', textAlign: 'center', margin: '10px 0' }}>{errorMessage}</div>
                    )}

                    <ButtonComponent
                        onClick={handleSignIn}
                        disabled={!email.length || !password.length || !confirmPassword.length}
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: 'rgb(255,57,69)',
                            height: '48px',
                            width: '100%',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '30px 0px 10px',
                            color: ' rgb(255, 255, 255)',
                            fontSize: '20px',
                            cursor: 'pointer',
                        }}
                        textButton={'Đăng kí'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: 700 }}
                    />

                    <p
                        style={{
                            fontSize: ' 12px',
                            color: ' rgb(120, 120, 120)',
                            lineHeight: '16px',
                            textAlign: 'start',
                        }}
                    >
                        Bạn đã có tài khoản?{' '}
                        <a style={{ cursor: 'pointer' }} onClick={handleLogin}>
                            {' '}
                            Đăng nhập
                        </a>
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
                                margin: ' 0px 0px 5px',
                                color: 'rgb(11, 116, 229)',
                                fontSize: '17px',
                                fonWeight: '500',
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

export default SignUpPage;

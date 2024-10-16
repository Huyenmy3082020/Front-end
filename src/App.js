import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import routes from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     const { decode, storageData } = handleDecoded();

    //     if (decode?.id) {
    //         handleGetDetailUser(decode?.id, storageData);
    //     }
    // }, []);

    // const handleGetDetailUser = async (id, token) => {
    //     try {
    //         const res = await Userservice.getDetailUser(id, token);
    //         console.log(res);
    //         dispatch(
    //             updateUser({
    //                 ...res.data,
    //                 access_token: token,
    //             }),
    //         );
    //     } catch (error) {
    //         console.error('Error fetching user details:', error);
    //     }
    // };

    // const handleDecoded = () => {
    //     const storageData = localStorage.getItem('access_token');
    //     let decode = {};
    //     if (storageData) {
    //         try {
    //             decode = jwtDecode(storageData);
    //             console.log('decode', decode);
    //         } catch (error) {
    //             console.error('Error decoding token:', error);
    //         }
    //     }
    //     return { decode, storageData };
    // };

    // // Interceptor xử lý refresh token
    // Userservice.axiosJWT.interceptors.request.use(
    //     async (config) => {
    //         try {
    //             const currentTime = new Date().getTime() / 1000;
    //             const { decode, storageData } = handleDecoded(); // Lấy token hiện tại và giải mã nó
    //             console.log('decode', decode);

    //             // Nếu token đã hết hạn
    //             if (decode?.exp < currentTime) {
    //                 // Gọi API để refresh token
    //                 const data = await Userservice.refreshToken(); // refreshToken là hàm bạn định nghĩa
    //                 console.log(data, 'data');

    //                 if (data?.access_token) {
    //                     // Cập nhật header với access_token mới
    //                     config.headers['authorization'] = `Bearer ${data.access_token}`;
    //                     // Lưu access_token mới vào localStorage
    //                     localStorage.setItem('access_token', data.access_token);
    //                 } else {
    //                     console.error('Failed to refresh token. No access_token returned.');
    //                 }
    //             } else {
    //                 // Cập nhật header nếu token chưa hết hạn
    //                 config.headers['authorization'] = `Bearer ${storageData}`;
    //             }

    //             return config;
    //         } catch (error) {
    //             console.error('Error in request interceptor:', error);
    //             return Promise.reject(error);
    //         }
    //     },
    //     (error) => {
    //         console.error('Request error:', error);
    //         return Promise.reject(error);
    //     },
    // );

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.page;
                        const Layout = route.isShowHeader ? DefaultComponent : Fragment;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </QueryClientProvider>
    );
};

export default App;

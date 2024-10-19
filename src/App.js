import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import routes from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { jwtDecode } from 'jwt-decode';
import * as Userservice from './service/Userservice';
import { useDispatch } from 'react-redux';
import { updateUser } from './redux/slides/userSlide';

const queryClient = new QueryClient();

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const { decode, storageData } = handleDecoded();
        if (decode?.id) {
            handleGetDetailUser(decode?.id, storageData);
        }
    }, []);

    const handleGetDetailUser = async (id, token) => {
        try {
            const res = await Userservice.getDetailUser(id, token);

            dispatch(updateUser({ ...res.data, access_token: token }));
        } catch (error) {
            if (error.response?.status === 401) {
                console.error('Token expired. Trying to refresh...');
                const newToken = await refreshAccessToken();
                console.log(newToken);
                if (newToken) {
                    return handleGetDetailUser(id, newToken);
                }
            }
            console.error('Error fetching user details:', error);
        }
    };

    const handleDecoded = () => {
        const storageData = localStorage.getItem('access_token');
        let decode = {};
        if (storageData) {
            try {
                decode = jwtDecode(storageData);
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
        return { decode, storageData };
    };

    const refreshAccessToken = async () => {
        try {
            const { data } = await Userservice.refreshToken();
            if (data?.access_token) {
                localStorage.setItem('access_token', data.access_token);
                return data.access_token;
            }
        } catch (error) {
            console.error('Error refreshing access token:', error);
        }
        return null;
    };

    Userservice.axiosJWT.interceptors.request.use(
        async (config) => {
            try {
                const currentTime = new Date().getTime() / 1000;
                const { decode, storageData } = handleDecoded();

                if (decode?.exp < currentTime) {
                    const newToken = await refreshAccessToken();
                    console.log('newToken', newToken);
                    if (newToken) {
                        config.headers['authorization'] = `Bearer ${newToken}`;
                    } else {
                        console.error('Failed to refresh token. No access_token returned.');
                    }
                } else {
                    config.headers['authorization'] = `Bearer ${storageData}`;
                }

                return config;
            } catch (error) {
                console.error('Error in request interceptor:', error);
                return Promise.reject(error);
            }
        },
        (error) => {
            console.error('Request error:', error);
            return Promise.reject(error);
        },
    );

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

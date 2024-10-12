import HomePage from '../pages/HomePage/HomePage';
import ProductPage from '../pages/ProductsPage/ProductsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import AdminPage from '../components/AdminPageComponent/AdminPage';
import Order from '../pages/OrderPage/OrderPage';
import ProductTrash from '../components/ProductTrash/TrashComponent';
import OrderSusscess from '../pages/OrderSuscces/OrderSusscess';
import Payment from '../pages/Payment/Payment';
import Myorder from '../pages/Myorder/Myorder';
const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: false,
    },
    {
        path: '/product',
        page: ProductPage,
        isShowHeader: true,
    },
    {
        path: '/:type',
        page: TypeProductPage,
        isShowHeader: true,
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: false,
    },

    {
        path: '/product_detail/:id',
        page: ProductDetailPage,
        isShowHeader: true,
    },
    {
        path: '/profile_page',
        page: ProfilePage,
        isShowHeader: true,
    },
    {
        path: '/order',
        page: Order,
        isShowHeader: true,
    },
    {
        path: '/myorder',
        page: Myorder,
        isShowHeader: true,
    },
    {
        path: '/payment',
        page: Payment,
        isShowHeader: true,
    },
    {
        path: 'payment/ordersuscess',
        page: OrderSusscess,
        isShowHeader: true,
    },
    {
        path: '/system_admin',
        page: AdminPage,
        isShowHeader: false,
        isPrivate: true,
    },
    {
        path: '/product/trash',
        page: ProductTrash,
        isPrivate: true,
    },
    {
        path: '*',
        page: NotFoundPage,
    },
];
export default routes;

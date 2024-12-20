import HomePage from '../pages/HomePage/HomePage';
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
import CategoryProduct from '../pages/CategoryProduct/CategoryProduct';
import Myorder from '../pages/Myorder/Myorder';
import Shipping from '../pages/Shipping/ShippingPage';
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
        isShowFooter: true,
    },
    {
        path: '/my_order',
        page: Myorder,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: '/payment',
        page: Payment,
        isShowFooter: true,
        isShowHeader: true,
    },
    {
        path: 'payment/ordersuscess',
        page: OrderSusscess,
        isShowHeader: true,
        isShowFooter: true,
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
        path: '/product/:type',
        page: TypeProductPage,
        isPrivate: true,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: 'categories/:id',
        page: CategoryProduct,
        isPrivate: true,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: 'Ship',
        page: Shipping,
        isPrivate: true,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: '*',
        page: NotFoundPage,
    },
];
export default routes;

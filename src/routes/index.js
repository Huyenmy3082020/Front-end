import HomePage from '../pages/HomePage/HomePage';
import ProductPage from '../pages/ProductsPage/ProductsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import AdminPage from '../components/AdminPageComponent/AdminPage';
import ProductTrash from '../components/ProductTrash/TrashComponent';
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
        path: '/product_detail',
        page: ProductDetailPage,
        isShowHeader: true,
    },
    {
        path: '/profile_page',
        page: ProfilePage,
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
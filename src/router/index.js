import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../components/home.vue';
import ProductsPage from '../components/products.vue';
import AboutPage from '../components/about.vue';
import ErrorPage from '../components/error.vue';
import LoginPage from '../components/login.vue';
import RegisterPage from '../components/register.vue';
import NewPage from '../components/newpage.vue';
import ProfilePage from '../components/profile.vue';
import CartPage from '../components/cart.vue';
import DetailPage from '../components/detail_product.vue';

const routes = [
    {
        path: '/', component: HomePage
    },
    {
        path: '/products', component: ProductsPage
    },
    {
        path: '/about', component: AboutPage
    },
    {
        path: '/login', component: LoginPage
    },
    {
        
        path: '/register', component: RegisterPage
    },
    {
        path: '/:id', component: DetailPage
    },
    {
        path: '/profile', component: ProfilePage,
        beforeEnter: (to, from, next) => {
            const isLogin = window.localStorage.getItem('token');
            if (isLogin) {
              next()
            } else {
             alert('Bạn cần đăng nhập');
             next('/')
            }
          }
    },
    {
        path: '/cart', component: CartPage,
        beforeEnter: (to, from, next) => {
            const isLogin = window.localStorage.getItem('token');
            if (isLogin) {
              next()
            } else {
             alert('Bạn cần đăng nhập');
             next('/login')
            }
          }
    },
    {
        path: '/newpage', component: NewPage,
        beforeEnter: (to, from, next) => {
            const isAdmin = window.localStorage.getItem('admin');
            if (isAdmin === 'true') {
              next()
            } else {
             next('/')
            }
          }
    },
    {
        path: '/:pathMatch(.*)*', component: ErrorPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;


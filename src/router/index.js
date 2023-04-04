import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../components/home.vue';
import ProductsPage from '../components/products.vue';
import AboutPage from '../components/about.vue';
import ErrorPage from '../components/error.vue';
import LoginPage from '../components/login.vue';
import RegisterPage from '../components/register.vue';


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
        path: '/:pathMatch(.*)*', component: ErrorPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;


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
import AdminPage from '../components/admin.vue';
import RegisterAdminPage from '../components/registeradmin.vue';
import ManagerProducts from '../components/mana_products.vue';
import ManagerUsers from '../components/mana_users.vue';
import ManagerBills from '../components/mana_bills.vue';
import AddProduct from '../components/addproduct.vue';
import EditProduct from '../components/editproduct.vue';
import EditUser from '../components/edituser.vue';


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
        path: '/admin', component: AdminPage,
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
        path: '/manaproducts', component: ManagerProducts,
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
      path: '/addproduct', component: AddProduct,
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
      path: '/editproduct/:id', component: EditProduct,
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
      path: '/edituser', component: EditUser,
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
        path: '/manausers', component: ManagerUsers,
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
        path: '/manabills', component: ManagerBills,
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
        path: '/registeradmin', component: RegisterAdminPage,

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


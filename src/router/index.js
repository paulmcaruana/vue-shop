// eslint-disable-next-line prettier/prettier
import { createRouter, createWebHashHistory } from 'vue-router';
// eslint-disable-next-line prettier/prettier
import Home from '../views/Home.vue';
import Checkout from '../views/Checkout'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
    // eslint-disable-next-line prettier/prettier
});

// eslint-disable-next-line prettier/prettier
export default router;

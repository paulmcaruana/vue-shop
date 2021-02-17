// eslint-disable-next-line prettier/prettier
import { createRouter, createWebHashHistory } from 'vue-router';
// eslint-disable-next-line prettier/prettier
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
    // eslint-disable-next-line prettier/prettier
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
    // eslint-disable-next-line prettier/prettier
});

// eslint-disable-next-line prettier/prettier
export default router;


import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createRouter, createWebHistory } from "vue-router";

import Contact from '@/components/Contact.vue';
import Login from '@/components/Login.vue';
import Home from '@/components/Home.vue';
import Guides from '@/components/Guides.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../components/Home.vue") },
        { path: "/register", component: () => import("../components/Login.vue") },
        { path: "/sign-in", component: () => import("../components/Signin.vue") },
        { path: "/contact", component: Contact, meta: { requiresAuth: false } },
        { path: "/home", component: Home, meta: { requiresAuth: false } },
        { path: "/guides", component: Guides, meta: { requiresAuth: false } },
        {path: '/login',
            name: 'Login',
            component: Login},
    ]
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(), 
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    });
};

router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) { 
        const user = await getCurrentUser();
        if (user) {
            next();
        } else {
            alert("You don't have access");
            next("/sign-in");
        }
    } else {
        next(); 
    }
});

export default router;

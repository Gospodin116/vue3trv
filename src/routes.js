import { createRouter, createWebHistory } from 'vue-router'

// Pages
const Index = () => import('./pages/index.vue')
const AuthLogin = () => import('./pages/auth/login.vue')

const routes = [
    { path: '/', name: 'index', component: Index },

    // Auth (test page)
    { path: '/auth/login', name: 'auth.login', component: AuthLogin },
]

export default createRouter({
    history: createWebHistory(),
    routes
})
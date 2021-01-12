import { createRouter, createWebHistory } from 'vue-router'

function loadComponent(component) {
    return () => import(`./pages/${component}.vue`)
}

const routes = [
    { path: '/', name: 'index', component: loadComponent('index') }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
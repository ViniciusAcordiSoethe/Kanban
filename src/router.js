import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/assets/views/home.vue'
const routes = [
    {
        path: '/',
        name:'home',
        component:  Home
    },
    {
        path:'/sobre',
        name:'sobre',
        component:  () => import('@/assets/views/sobre.vue')
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router
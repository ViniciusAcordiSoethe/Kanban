import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/assets/views/home.vue'
import sobre from '@/assets/views/sobre.vue'
const routes = [
    {
        path: '/',
        name:'home',
        component:  Home
    },
    {
        path:'/sobre',
        name:'sobre',
        component:  sobre
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // Qual rota.
    path: '/requests',

    // Qual view sera utilizada.
    name: 'Requests',
    
    // Importacao da view.
    component: () => import(/* webpackChunkName: "requests" */ '../views/Requests.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

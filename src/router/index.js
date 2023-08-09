
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import IndexView from '@/views/IndexView.vue'
import ProductoView from '@/views/ProductoView.vue'
import store from '@/store/index.js'; 


const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/',
    name: 'Index',
    component: IndexView,
     // Agregar el guardián de navegación antes de entrar a la ruta de inicio
     beforeEnter: (to, from, next) => {
      // Verificar si el usuario está autenticado utilizando el estado de Vuex
      if (store.state.username) {
        // El usuario está autenticado, permitir el acceso a la vista de inicio
        next();
      } else {
        // El usuario no está autenticado, redirigirlo a la vista de inicio de sesión
        next({ name: 'login' });
      }
      }
  },
  {
    path: '/producto/:id',
    props: true,
    name: 'Producto',
    component: ProductoView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


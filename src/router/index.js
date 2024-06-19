import { createRouter, createWebHistory } from 'vue-router'
import Dashboad from '../views/Dashboad.vue'
import Detail from '@/views/Detail.vue'
import Chatroom from '@/views/ChatRoomFile/Chatroom.vue'
import {auth} from '@/firebase/config'

const routes = [
  {
    path: '/',
    component: Dashboad,
    children: [
      {
        path: '',
        component: () => import('@/views/Overview.vue')
      },
      {
        path: '/Messages',
        name: "Messages",
        component: () => import('@/views/Messages.vue'),
        beforeEnter (to,from,next) {
          let user = auth.currentUser;
          if (!user) {
            next();
          } else {
            next({name:"Chatroom"})
          }
        }
      },
      {
        path: '/Profile',
        component: () => import('@/views/Profile.vue')
      },
      {
        path: '/Products',
        component: () => import('@/views/Products.vue')
      },
      {
        path: '/Settings',
        component: () => import('@/views/Settings.vue')
      },
      {
        path: '/Overview',
        component: () => import('@/views/Overview.vue')
      },      
      {
        path: '/Calander',
        component: () => import('@/views/Calander.vue')
      },      
      {
        path: '/FormLayouts',
        component: () => import('@/views/FormLayouts.vue')
      },      
      {
        path: '/Create',
        component: () => import('@/views/Create.vue')
      },
      {
        path: '/chatroom',
        name: "Chatroom",
        component: Chatroom,
        beforeEnter (to,from,next) {
          let user = auth.currentUser;
          if (user) {
            next();
          } else {
            next({name:"Messages"})
          }
        }
      },
      {
        path: '/post/:id',
        name: "Detail",
        component: Detail,
        props: true
      },
    ]
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

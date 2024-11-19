import HomeView from '@/views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import BoardView from '@/views/BoardView.vue'
import FortuneView from '@/views/FortuneView.vue'

import UserDetail from '@/components/user/UserDetail.vue'
import UserUpdate from '@/components/user/UserUpdate.vue'
import UserAdmin from '@/components/user/UserAdmin.vue'
import UserLogin from '@/components/user/UserLogin.vue'
import UserRegister from '@/components/user/UserRegister.vue'

import BoardList from '@/components/board/BoardList.vue'
import BoardDetail from '@/components/board/BoardDetail.vue'
import BoardUpdate from '@/components/board/BoardUpdate.vue'
import BoardCreate from '@/components/board/BoardCreate.vue'

import TodayFortune from '@/components/fortune/TodayFortune.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
      children: [
        {
          path: '',
          name: 'userDetail',
          component: UserDetail,
        },
        {
          path: 'update',
          name: 'userUpdate',
          component: UserUpdate,
        },
        {
          path: 'admin',
          name: 'userAdmin',
          component: UserAdmin,
        },
        {
          path: 'login',
          name: 'userLogin',
          component: UserLogin,
        },
        {
          path: 'register',
          name: 'userRegister',
          component: UserRegister,
        },
      ]
    },
    {
      path: '/board',
      name: 'board',
      component: BoardView,
      children: [
        {
          path: '',
          name: 'boardList',
          component: BoardList,
        },
        {
          path: ':boardId',
          name: 'boardDetail',
          component: BoardDetail,
        },
        {
          path: ':boardId/update',
          name: 'boardUpdate',
          component: BoardUpdate,
        },
        {
          path: 'create',
          name: 'boardCreate',
          component: BoardCreate,
        },
      ]
    },
    {
      path: '/fortune',
      name: 'fortune',
      component: FortuneView,
      children: [
        {
          path: '',
          name: 'todayFortune',
          component: TodayFortune,
        },
      ]
    },
  ]
})

export default router
import BoardCreate from '@/components/board/BoardCreate.vue'
import BoardDetail from '@/components/board/BoardDetail.vue'
import BoardList from '@/components/board/BoardList.vue'
import BoardUpdate from '@/components/board/BoardUpdate.vue'
import CommentCreate from '@/components/comment/CommentCreate.vue'
import CommentList from '@/components/comment/CommentList.vue'
import CommentUpdate from '@/components/comment/CommentUpdate.vue'
import TodayFortune from '@/components/fortune/TodayFortune.vue'
import UserDetail from '@/components/user/UserDetail.vue'
import UserDetailAdmin from '@/components/user/UserDetailAdmin.vue'
import UserLogin from '@/components/user/UserLogin.vue'
import UserRegister from '@/components/user/UserRegister.vue'
import UserUpdate from '@/components/user/UserUpdate.vue'
import BoardView from '@/views/BoardView.vue'
import FortuneView from '@/views/FortuneView.vue'
import HomeView from '@/views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            children: [

            ]
        },
        {
            path: '/user',
            name: 'user',
            component: UserView,
            children: [
                {
                    path: 'detail',
                    name: 'userDetail',
                    component: UserDetail,
                },
                {
                    path: 'admin',
                    name: 'userDetailAdmin',
                    component: UserDetailAdmin,
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
                {
                    path: 'update',
                    name: 'userUpdate',
                    component: UserUpdate,
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
                    children: [
                        {
                            path: 'comment',
                            name: 'commentList',
                            component: CommentList,
                            children: [
                                {
                                    path: 'create',
                                    name: 'commentCreate',
                                    component: CommentCreate,
                                },
                                {
                                    path: 'update',
                                    name: 'commentUpdate',
                                    component: CommentUpdate,
                                },
                            ]
                        },
                    ]
                },
                {
                    path: 'create',
                    name: 'boardCreate',
                    component: BoardCreate,
                },
                {
                    path: 'update',
                    name: 'boardUpdate',
                    component: BoardUpdate,
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
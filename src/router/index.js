import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/User/Home.vue'
import UserLogin from '../views/User/UserLogin.vue'
import UserForm from '../views/User/UserForm.vue'
import DashBoard from '../views/User/DashBoard.vue'
import Assessment from '../views/User/Assessment.vue'
import Test from '../views/User/Test.vue'
import ResultUser from '../views/User/Result.vue'

import AdminDashboard from '../views/Admin/AdminDashboard.vue'
import AdminLogin from '../views/Admin/AdminLogin.vue'
import Application from '../views/Admin/Application.vue'
import Compose from '../views/Admin/Compose.vue'
import Entries from '../views/Admin/Entries.vue'
import Result from '../views/Admin/Result.vue'
import History from '../views/Admin/History.vue'

// import store from '../store/index'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: "/userlogin",
        name: "UserLogin",
        component: UserLogin
    },
    {
        path: "/userform",
        name: "UserForm",
        component: UserForm,
        // beforeEnter: (to, from, next) => {
        //     if (!store.getters.isLoggedIn) {
        //         next('/login')
        //     } else next()
        // }
    },
    {
        path: "/dashboard",
        name: "DashBoard",
        component: DashBoard,
        // beforeEnter: (to, from, next) => {
        //     if (!store.getters.isLoggedIn) {
        //         next('/login')
        //     } else if (!store.getters.entryStatus) {
        //         next('/userform')
        //     } else next()
        // }
    },
    {
        path: "/assessment",
        name: "Assessment",
        component: Assessment,
        // beforeEnter: (to, from, next) => {
        //     if (!store.getters.isLoggedIn || !store.getters.isAdmin) {
        //         next('/adminlogin')
        //     } else next()
        // }

    },
    {
        path: "/test",
        name: "Test",
        component: Test
    },
    {
        path: "/result",
        name: "ResultUser",
        component: ResultUser
    },
    {
        path: "/admindashboard",
        name: "AdminDashboard",
        component: AdminDashboard,
        // beforeEnter: (to, from, next) => {
        //     if (!store.getters.isLoggedIn || !store.getters.isAdmin) {
        //         next('/adminlogin')
        //     } else next()
        // }

    },
    {
        path: "/adminlogin",
        name: "AdminLogin",
        component: AdminLogin,

    },
    {
        path: "/application",
        name: "Application",
        component: Application,
        // beforeEnter: (to, from, next) => {
        //     if (!store.getters.isLoggedIn || !store.getters.isAdmin) {
        //         next('/adminlogin')
        //     } else next()
        // }

    },
    {
        path: "/compose",
        name: "Compose",
        component: Compose,
        // beforeEnter: (to, from, next) => {
        //     if (!store.getters.isLoggedIn || !store.getters.isAdmin) {
        //         next('/adminlogin')
        //     } else next()
        // }

    },
    {
        path: "/entries",
        name: "Entries",
        component: Entries,

    },
    {
        path: "/adminresult",
        name: "Result",
        component: Result,

    },
    {
        path: "/history",
        name: "History",
        component: History,
        // beforeEnter: (to, from, next) => {
        //     if (!store.getters.isLoggedIn || !store.getters.isAdmin) {
        //         next('/adminlogin')
        //     } else next()
        // }

    },
    {

        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
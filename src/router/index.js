import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/User/Home.vue'
import UserLogin from '../views/User/UserLogin.vue'
import UserForm from '../views/User/UserForm.vue'
import DashBoard from '../views/User/DashBoard.vue'
import Assessment from '../views/User/Assessment.vue'

import AdminDashboard from '../views/Admin/AdminDashboard.vue'
import AdminLogin from '../views/Admin/AdminLogin.vue'
import Application from '../views/Admin/Application.vue'
import Compose from '../views/Admin/Compose.vue'
import Batch from '../views/Admin/Batch.vue'
import History from '../views/Admin/History.vue'


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
        component: UserForm
    },
    {
        path: "/dashboard",
        name: "DashBoard",
        component: DashBoard
    },
    {
        path: "/assessment",
        name: "Assessment",
        component: Assessment,

    },
    {
        path: "/admindashboard",
        name: "AdminDashboard",
        component: AdminDashboard,

    },
    {
        path: "/adminlogin",
        name: "AdminLogin",
        component: AdminLogin,
        meta: { 
            requiresAuth: true,
            isAdmin : true
        }

    },
    {
        path: "/application",
        name: "Application",
        component: Application,

    },
    {
        path: "/compose",
        name: "Compose",
        component: Compose,

    },
    {
        path: "/batch",
        name: "Batch",
        component: Batch,

    },
    {
        path: "/history",
        name: "History",
        component: History,

    },
    {

        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
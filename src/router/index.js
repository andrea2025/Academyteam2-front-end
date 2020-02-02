import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/User/Home.vue'
import UserLogin from '../views/User/UserLogin.vue'
import UserForm from '../views/User/UserForm.vue'
import DashBoard from '../views/User/DashBoard.vue'
import Assessment from '../views/User/Assessment.vue'
import Congratulations from '../views/User/Congratulations.vue'
import forgotPassword from '../views/User/forgotPassword.vue'
import Reset from '../views/User/Reset.vue'


import AdminDashboard from '../views/Admin/AdminDashboard.vue'
import AdminLogin from '../views/Admin/AdminLogin.vue'
import Application from '../views/Admin/Application.vue'
import Compose from '../views/Admin/Compose.vue'
import Entries from '../views/Admin/Entries.vue'
import Result from '../views/Admin/Result.vue'
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
        component: UserForm,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: "/dashboard",
        name: "DashBoard",
        component: DashBoard,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: "/assessment",
        name: "Assessment",
        component: Assessment,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: "/congratulations",
        name: "Congratulations",
        component: Congratulations,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: "/forgot",
        name: "forgot",
        component:forgotPassword,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: "/reset",
        name: "reset",
        component: Reset,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: "/admindashboard",
        name: "AdminDashboard",
        component: AdminDashboard,
        meta: {
            requiresAdmin: true
        }
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
        meta: {
            requiresAdmin: true
        }
    },
    {
        path: "/compose",
        name: "Compose",
        component: Compose,
        meta: {
            requiresAdmin: true
        }
    },
    {
        path: "/entries",
        name: "Entries",
        component: Entries,
        meta: {
            requiresAdmin: true
        },
    },
    {
        path: "/adminresult",
        name: "Result",
        component: Result,
        meta: {
            requiresAdmin: true
        },
    },
    {
        path: "/history",
        name: "History",
        component: History,
        meta: {
            requiresAdmin: true
        },
    },
    {

        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '*',
        name: '404',
        component: () => import('../views/Error.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
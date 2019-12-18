import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Overview from '../views/Overview'
import App from '../App'
import Registration from "../views/Registration";



Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Root',
            component: App
        },
        {
            path: '/template',
            name: 'Template',
            component: Overview
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Registration',
            component: Registration
        },

    ]
})

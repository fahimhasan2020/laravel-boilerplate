import Vue from 'vue'
import VurRouter from 'vue-router'
//home
import LandingPage from '../components/frontend/home/Home'
//error
import ErrorPage from '../components/error/404'
//admin
import AdminAuthMaster from '../components/admin/auth/inc/MasterComponent'
import AdminLogin from '../components/admin/auth/Login'
import AdminForget from '../components/admin/auth/Forget'
import AdminReset from '../components/admin/auth/Reset'
import AdminDashboard from '../components/admin/panels/Dashboard'
import AdminRegister from '../components/admin/user/AddUser'
import AdminDashboardMaster from '../components/admin/inc/MasterComponent'
import UserIndex from '../components/admin/user/User'
import Permissions from '../components/admin/user/Permissions'
import AddPermissions from '../components/admin/user/AddPermissions'
import EditPermissions from '../components/admin/user/EditPermissions'
import Roles from '../components/admin/user/Roles'
import AddRoles from '../components/admin/user/AddRoles'
import AdminAddUser from '../components/admin/user/AddUser'


Vue.use(VurRouter);
export const router = new VurRouter({
    mode: 'history',
    linkActiveClass: "active",
    routes:[
        {
            path: '/',
            name: 'Home',
            component: LandingPage,
            meta: {title: 'Home'}
        },
        {
            path: '*',
            name  :'404',
            component: ErrorPage, meta:{title: 'Error 404'}
        },
        {
            path: '/admin/auth',
            name: 'Admin Authorizations',
            component: AdminAuthMaster,
            redirect: '/admin/auth/login',
            children: [
                {
                    path: 'login',
                    name: 'Admin Login',
                    component: AdminLogin,
                    meta: {title: 'Admin'}
                },
                {
                    path: 'reset',
                    name: 'Admin Reset Password',
                    component: AdminReset,
                    meta: {title: 'Admin'}
                },
                {
                    path: 'forget',
                    name: 'Admin Forget Password',
                    component: AdminForget,
                    meta: {title: 'Admin'}
                },
            ]
        },
        {
            path: '/admin',
            name: 'Admin Dashboard',
            component: AdminDashboardMaster,
            meta:{forAdmin:true},
            redirect: '/admin/home',
            children:[
                {
                    path:'home',
                    name:'AdminHome',
                    component: AdminDashboard,
                    meta: {title: 'Admin Home'}
                },
                {
                    path:'user',
                    name:'Admin User Home',
                    component: UserIndex,
                    meta: {title: 'User'}
                },
                {
                    path:'add/user',
                    name:'Admin User Home Add',
                    component: AdminAddUser,
                    meta: {title: 'User'}
                },
                {
                    path:'permissions',
                    name:'Admin User Permission',
                    component: Permissions,
                    meta: {title: 'Permission'}
                },
                {
                    path:'add/permissions',
                    name:'Admin User Add Permission',
                    component: AddPermissions,
                    meta: {title: 'Permission'}
                },
                {
                    path:'edit/permissions',
                    name:'Admin User Edit Permission',
                    component: EditPermissions,
                    meta: {title: 'Permission'}
                },
                {
                    path:'role',
                    name:'Admin User Roless',
                    component: Roles,
                    meta: {title: 'Roles'}
                },
                {
                    path:'add/roles',
                    name:'Admin User Roles Add',
                    component: AddRoles,
                    meta: {title: 'Roles Add'}
                },

            ]
        },
    ]
});
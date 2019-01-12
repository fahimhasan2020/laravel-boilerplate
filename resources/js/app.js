require('./bootstrap');
window.Vue = require('vue');
import Jquery from 'jquery'
import NProgress from 'nprogress'
global.jquery = Jquery;
let BootstrapVue = require('bootstrap');
require('vue-flash-message/dist/vue-flash-message.min.css');
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.use(BootstrapVue);
import {router} from './routes/router'
import VueFlashMessage from 'vue-flash-message';
Vue.use(VueFlashMessage);
var token = localStorage.getItem('token');
router.beforeResolve((to, from, next) => {
    if (to.path) {
        NProgress.start();
        if(to.matched.some(record => record.meta.forAdmin)){
            if(!token){
                next({
                    path: '/admin/auth/login'
                })
            }else next()
        }
    }
    document.title = to.meta.title;
    next()
});
router.afterEach(() => {
    NProgress.done()
});
import App from './components/App'
const app = new Vue({
    el: '#app',
    components: { App },
    router
});
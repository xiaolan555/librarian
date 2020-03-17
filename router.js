import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(Vuex);

import login from './login.vue';
import manage from './manage.vue';
import account_manage from './account_manage.vue';
import business_handle from "./business_handle.vue";
import book_manage from './book_manage.vue';
import revenue_manage from './revenue_manage.vue';
import notice_manage from './notice_manage.vue';
import senior_manage from './senior_manage.vue';
import password_modification from './password_modification.vue'
import add_announcement from './add_announcement.vue'
import edit_announcement from './edit_announcement.vue'


const routes=[
    { path:'/', component: login},
    { path:'/manage',component: manage,meta:{auth:true},
    children:[
        {path:'/account_manage',component:account_manage,meta:{auth:true}},
        {path:'/business_handle',component: business_handle,meta:{auth:true}},
        {path:'/book_manage',component:book_manage,meta:{auth:true}},
        {path:'/revenue_manage',component:revenue_manage,meta:{auth:true}},
        {path:'/notice_manage',component:notice_manage,meta:{auth:true}},
        {path:'/senior_manage',component:senior_manage,meta:{auth:true}},
        {path:'/password_modification',component:password_modification,meta:{auth:true}},
        {path:'/add_announcement',component:add_announcement,meta:{auth:true}},
        {path:'/edit_announcement',component:edit_announcement,meta:{auth:true}}
    ]}

];

const router = new VueRouter({
    // mode:'history',
    base:'/librarian',
    routes:routes,
});

sessionStorage.setItem("isLogin",'false');


router.beforeEach((to, from, next) => {
   console.log(to.path,from.path);
    if(to.meta.auth){
        let isLogin = sessionStorage.getItem("isLogin");
        if(isLogin=="true"){
            if(to.path=="/"){
                next(false);
            }else{
                next(true);
            }
        }else{
            if(to.path=="/"){
                next(true);
            }else{
                next({ path: '/' })
            }
        }
    }else{
        next(true);
    }
});

export default router;
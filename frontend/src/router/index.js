import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


// router.beforeEach((to, from, next) => {

//     if(to.matched.some((record) => record.meta.requiresAuth)) 
//     {   
//         if (store.getters.isLoggedIn) {
//           return next();
//         }
//         return next('/login'); 
//     }else{
//         next();
//     }
// })
export default router;
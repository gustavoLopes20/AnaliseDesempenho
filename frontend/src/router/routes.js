export default [
    {
        path: '/index',
        name: 'index',
        component: () => import('../components/Index/index.vue'),
        meta: { 
            requiresAuth: false
        },
    },
    {
        path: '',
        redirect: '/index'
    }
]
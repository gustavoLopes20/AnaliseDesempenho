export default [
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/Index.vue'),
        meta: { 
            requiresAuth: false
        },
    },
    {
        path: '',
        redirect: '/index'
    }
]
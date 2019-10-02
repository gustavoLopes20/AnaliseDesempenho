export default [
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/Index.vue'),
        children:[
            {
                path: '/index/filaclassica',
                name: 'fila-classica',
                component: () => import('../components/FilaClassica/index.vue'),
            },
            {
                path: '/index/capacidadefinita',
                name: 'capacidade-finita',
                component: () => import('../components/CapacidadeFinita/index.vue'),
            },
            {
                path: '/index/infinitosservidores',
                name: 'infinitos-servidores',
                component: () => import('../components/InfinitosServidores/index.vue'),
            },
            {
                path: '/index/mservcapacidadefinita',
                name: 'mserv-capacidade-finita',
                component: () => import('../components/MServCapacidadeFinita/index.vue'),
            },
            {
                path: '/index/mservidores',
                name: 'm-servidores',
                component: () => import('../components/MServidores/index.vue'),
            },
            {
                path: '/index/mservidorescappopfinitos',
                name: 'm-servidores-cap-pop-finitos',
                component: () => import('../components/MServidoresCapPopFinitos/index.vue'),
            },
            {
                path: '/index/populacaofinitainfserv',
                name: 'populacao-finita-inf-serv',
                component: () => import('../components/PopulacaoFinitaInfServ/index.vue'),
            },
            {
                path: '/index/pupulacaofinitaumserv',
                name: 'pupulacao-finita-um-serv',
                component: () => import('../components/PopulacaoFinitaUmServ/index.vue'),
            },
        ]
    },
    {
        path: '',
        redirect: '/index'
    }
]
import Vue from 'vue'
import VueRouter from 'vue-router';

import Index from '../pages/Index.vue'
import RoomCorretor from '../pages/RoomCorretor.vue'
import RoomCliente from '../pages/RoomCliente.vue'

Vue.use(VueRouter);
const routes = [{
        path: '*',
        component: Index
    },
    {
        path: '/room/corretor',
        component: RoomCorretor
    },
    {
        path: '/room/cliente',
        component: RoomCliente
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});


export default router
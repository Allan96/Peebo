import Vue from 'vue'
import VueRouter from 'vue-router';

import Index from '../pages/Index.vue'
import RoomCorretor from '../pages/RoomCorretor.vue'
import RoomCliente from '../pages/RoomCliente.vue'
import PreForm from '../pages/PreForm.vue'
import PerfilCorretor from '../pages/PerfilCorretor.vue'

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
        path: '/form/cliente',
        component: PreForm
    },
    {
        path: '/room/cliente',
        component: RoomCliente
    },
    {
        path: '/perfil/corretor',
        component: PerfilCorretor
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});


export default router
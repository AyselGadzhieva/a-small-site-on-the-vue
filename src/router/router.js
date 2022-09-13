import Vue from 'vue'
import Router from 'vue-router'

import vSeance from '../components/v-seance'
import vBookedTickets from '../components/v-booked-tickets'

Vue.use(Router);

let router = new Router({
    routes: [
    {
        path:'/',
        name: 'seance',
        component: vSeance
    },
    {
        path: '/booked_tickets',
        name: 'booked_tickets',
        component: vBookedTickets,
        props: true
    }
    ]
})
export default router;
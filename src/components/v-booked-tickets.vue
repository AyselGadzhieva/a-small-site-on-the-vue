<template>
    <div class='v-booked-tickets'>
        <router-link :to="{name: 'seance'}">
            <div class="v-seance_link_to_bt">Вернуться к просмотру сеансов</div>
        </router-link>
        <v-booked-tickets-item
                v-for="(item, index) in booked_tickets_data"
                :key="item.article"
                :booked_tickets_item_data="item"
                @deleteFromBookedT="deleteFromBookedT(index)"
        />
        <h3 v-if="!booked_tickets_data.length">Нет забронированных билетов...</h3>
    </div>
</template>

<script>
import vBookedTicketsItem from './v-booked-tickets-item'
import {mapActions} from 'vuex'

    export default {
        name: "v-booked-tickets",
        components:{
            vBookedTicketsItem
        },
        props:{
            booked_tickets_data: {
               type: Array,
                default() {
                   return []
                }
            }
        },
        data(){
           return{}
        },
        computed:{},
        methods: {
            ...mapActions([
                'DELETE_FROM_BOOKED_T'
            ]),
            deleteFromBookedT(index) {
                this.DELETE_FROM_BOOKED_T(index)
            }
        }
    }
</script>

<style lang="scss">
    .v-booked-tickets {
        margin-bottom: 3px;
        margin-left: 10px;
    }
</style>
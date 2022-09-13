<template>
    <div class='v-seance'>
        <router-link :to="{name: 'booked_tickets', params:{booked_tickets_data: BOOKEDTICKETS}}">
            <div class="v-seance_link_to_bt">
                <i class="el-icon-s-ticket">
                    Забронированные билеты (количество фильмов): {{BOOKEDTICKETS.length}}
                </i>
            </div>
        </router-link>
        <div class='v-seance_list'>
        <v-seance-item
            v-for="film in FILMS"
            :key="film.article"
            v-bind:film_data="film"
            @addToBT="addToBT"
        />
        </div>
    </div>
</template>

<script>
    import vSeanceItem from './v-seance-item'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "v-seance",
        components: {
            vSeanceItem
        },
        props: {},
        data() {
            return {}},
        computed: {
            ...mapGetters([
                'FILMS',
                'BOOKEDTICKETS'
                       ]),
        },
        methods:{
            ...mapActions([
               'GET_FILMS_FROM_API',
                'ADDTOBOKT'
            ]),
            addToBT(data) {
            this.ADDTOBOKT(data)
            }
        },
        mounted(){
            this.GET_FILMS_FROM_API()
                .then((response) => {
                        if (response.data) {
                            console.log('data')
                        }
                    })
        }
    }
</script>

<style lang="scss">
    .v-seance {
        &_list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
        }
        &_link_to_bt {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            position: absolute;
            top: 4px;
            right: 8px;
            padding: $padding*2;
            border: solid 1px #aeaeae;
            background: #ffffff;
        }
    }
</style>
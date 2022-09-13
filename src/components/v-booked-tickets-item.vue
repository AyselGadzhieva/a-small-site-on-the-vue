<template>
    <div class='v-booked-tickets-item'>
        <img class="v-booked-tickets-item_image"
             :src=" require('../assets/images/' + booked_tickets_item_data.image) " alt="">
        <div class="colom">
            <div class="v-booked-tickets-item_info">
                <p>Название: {{booked_tickets_item_data.name}}</p>
                <p>Цена: {{booked_tickets_item_data.price}}</p>
                <p>Количество билетов: {{booked_tickets_item_data.quantity}}</p>
            </div>
            <el-row>
            <el-button
                    @click="deleteFromBookedT"
                    type="danger"
                    icon="el-icon-delete"
                    circle>
            </el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-booked-tickets-item",
        props: {
            booked_tickets_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            deleteFromBookedT() {
                this.$emit('deleteFromBookedT')
            }
        },
        mounted () {
            this.$set(this.booked_tickets_item_data,'quantity',1)
        }
    }
</script>

<style lang="scss">
    .v-booked-tickets-item {
        display: flex;
        justify-content: space-between;
        .colom{
            display: flex;
            flex-direction: column;
            text-align: start;
            align-items: flex-start;
            font-size: 15px;
            margin-left: 5px;
            line-height: 10px;
            padding-left: 10px;
            font-family: Verdana,fantasy;
            margin-top: 10px;
        }
        &_image{
            max-width: 80px;
            margin-bottom: 7px;
        }
    }
</style>
<template>
    <div class='v-seance-item'>
        <img class="v-sea-item_image" v-bind:src=" require('../assets/images/' + film_data.image) " alt="img">
        <div class="compon">
            <p class="n123">Название: {{film_data.name}}</p>
            <div class="one">
                <p>Жанр: {{film_data.genres}}</p>
                <p>Режиссёр: {{film_data.producer}}</p>
                <p>В ролях: {{film_data.cast}}</p>
                <p>{{film_data.plot}}</p>
            </div>
            <div class="two">
                <p>~Цена: {{film_data.price}} p. ~</p>
                <p>Время: {{film_data.time}}</p>
            </div>
            <el-row>
                <el-button type="success" round
                           class="v-seance-item_add_bron btn"
                           @click="addToBT">
                    выбрать
                </el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-seance-item",
        props: {
            film_data:{
                type:Object,
                default(){
                    return{}
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods:{
            addToBT(){
                this.$emit('addToBT',this.film_data)
            }
        }
    }
</script>

<style lang='scss'>
    .v-seance-item{
        flex-basis: 100%;
        display: flex;
        box-shadow: 0 0 15px #aeaeae;
        margin: 20px;
        background: white;
        .compon {
            display: flex;
            flex-direction: column;
            text-align: start;
            align-items: flex-start;
            margin-left: 30px;
            font-family: Verdana,fantasy;
            margin-top: 20px;
        }
        .n123{
        color: #F56C6C;
        font-weight: bold;
        font-size: 16px;

    }
        .one{
            font-size: 13px;
        }
        .two{
            padding-top: 10px;
            display: flex;
            font-weight: bold;
            font-size: 12px;
        }
        .btn{
            font-size: 13px;
            margin-left: 1110px;
        }
    }

</style>
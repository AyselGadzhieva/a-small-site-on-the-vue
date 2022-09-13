import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        films: [],
        bookedtickets:[]
    },
    mutations:{
        SET_FILMS_TO_STATE:(state, films) => {
            state.films = films;
        },
        SET_BT:(state, film) => {
            if (state.bookedtickets.length) {
                let isFilmExists = false;
                state.bookedtickets.map(function (item) {
                    if (item.article === film.article) {
                        isFilmExists = true;
                        item.quantity++
                    }
                })
                if (!isFilmExists) {
                    state.bookedtickets.push(film)
                }
            } else {
                state.bookedtickets.push(film)
            }
        },
        REMOVE_FROM_BOOKED_T:(state, index) => {
            state.bookedtickets.splice(index, 1)
        }
    },
    actions:{
        GET_FILMS_FROM_API({commit}) {
            return axios('http://localhost:3000/films', {
                    method:"GET"
                })
                .then((films) =>{
                    commit('SET_FILMS_TO_STATE', films.data);
                    return films;
                })
                .catch((error) => {
                console.log(error)
                return error;
                })
        },
        ADDTOBOKT({commit},film){
            commit('SET_BT',film);
        },
        DELETE_FROM_BOOKED_T({commit}, index) {
            commit('REMOVE_FROM_BOOKED_T',index);
        }
    },
    getters:{
        FILMS(state){
            return state.films;
        },
        BOOKEDTICKETS(state){
            return state.bookedtickets;
        }
    }
});

export default store;
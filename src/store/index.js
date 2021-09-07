import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
        colorCode: 'blue'
    },
    mutations: {
        decreaseCounter(state, randomNumber) {
          state.counter -= randomNumber
        },
        increaseCounter(state, randomNumber) {
          state.counter += randomNumber;
        },
        setColorCode(state, newValue) {
          state.colorCode = newValue;
        }
    },
    actions: {
      increaseCounter({ commit }) {
        axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
          .then(response => {
            commit('increaseCounter', response.data)
          })
      },
      decreaseCounter({ commit }) {
        axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
          .then(response => {
            commit('decreaseCounter', response.data)
          })
      },
      setColorCode({ commit }, newValue) {
        commit('setColorCode', newValue)
      }
    },
    getters: {
      counterSquared(state) {
        return state.counter * state.counter;
      }
    },
    modules: {}
});
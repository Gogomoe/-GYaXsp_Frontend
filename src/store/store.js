import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showLoginDialog: false
    },
    mutations: {
        showLoginDialog(state) {
            state.showLoginDialog = true
        },
        hideLoginDialog(state) {
            state.showLoginDialog = false
        }
    },
    actions: {},
    getters: {},
    modules: {
        user
    }
})

import {server} from '@/config.js';

export default {
    namespaced: true,
    state: {
        username: null,
        avatar: null,
        roles: [],
        perms: []
    },
    mutations: {
        updateUser(state, user) {
            state.username = user.username;
            state.avatar = user.avatar;
            state.roles = user.roles.slice();
            state.perms = user.perms.slice();
        },
        clearUser(state) {
            state.username = null;
            state.avatar = null;
            state.roles = [];
            state.perms = [];
        }
    },
    actions: {
        async login({dispatch, commit, getters, rootGetters}, {username, password}) {
            let formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);

            let response = await fetch(`${server}/api/session`, {
                method: 'POST',
                body: formData,
                credentials: 'include'
            }).then(response => response.json());

            if (response.success) {
                await dispatch('updateUser', {username});
            } else {
                throw response.error;
            }

        },
        async updateUser({dispatch, commit, getters, rootGetters}, {username}) {

            let response = await fetch(`${server}/api/user/${username}`, {
                credentials: 'include'
            }).then(response => response.json());

            if (response.success) {
                commit('updateUser', response.user)
            } else {
                throw response.error;
            }

        },
        async updateSession({dispatch, commit, getters, rootGetters}) {

            let response = await fetch(`${server}/api/session`, {
                credentials: 'include'
            }).then(response => response.json());

            if (response.session) {
                commit('updateUser', response.user)
            } else {
                commit('clearUser', response.user)
            }

        }
    },
    getters: {
        isLogin(state, getters, rootState, rootGetters) {
            return state.username !== null;
        },
        hasRole: (state, getters, rootState, rootGetters) => (role) => {
            return state.roles.includes(role);
        },
        hasPerm: (state, getters, rootState, rootGetters) => (perm) => {
            return state.roles.includes(perm);
        }
    }
}
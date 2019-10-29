export default {
    namespaced: true,
    state: {
        username: null,
        avatar: null,
        roles: [],
        perms: []
    },
    mutations: {},
    actions: {},
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
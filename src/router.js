import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NoFound from "./views/NoFound";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "*",
            name: "no-found",
            component: NoFound
        }
    ]
});

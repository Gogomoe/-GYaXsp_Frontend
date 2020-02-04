import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Problems from "./views/Problems";
import ProblemsSettings from "./views/ProblemsSettings";
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
            path: "/problems/settings",
            name: "problems settings",
            component: ProblemsSettings
        },
        {
            path: "/problems/:page?",
            name: "problems",
            component: Problems
        },
        {
            path: "*",
            name: "no-found",
            component: NoFound
        }
    ]
});

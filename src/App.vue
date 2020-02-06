<template>
    <div id="app">
        <Navigation/>
        <router-view class="main"/>
        <PageFooter/>
        <LoginDialog/>
    </div>
</template>
<script>
    import Navigation from "./components/Navigation";
    import PageFooter from "./components/PageFooter";
    import LoginDialog from "./components/LoginDialog";

    export default {
        components: {PageFooter, Navigation, LoginDialog},
        mounted() {
            this.$store.dispatch('user/updateSession');
        }
    }
</script>
<style lang="scss">
    #app {
        @include flex-vertical;
        align-items: stretch;
        width: 100vw;
        min-height: 100vh;
    }

    .main {
        flex-grow: 1;
        padding: 90px 0 30px;
        background-color: #edf0f2;
    }
</style>
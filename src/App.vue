<template>
    <div id="app">
        <Navigation/>
        <router-view class="main"/>
        <PageFooter/>
    </div>
</template>
<script>
    import Navigation from "./components/Navigation";
    import PageFooter from "./components/PageFooter";

    export default {
        components: {PageFooter, Navigation}
    }
</script>
<style lang="scss">
    #app {
        width: 100vw;
        @include flex-vertical;
        min-height: 100vh;
    }

    .main {
        flex-grow: 1;
        padding: 90px 0 30px;
        background-color: #edf0f2;
    }
</style>
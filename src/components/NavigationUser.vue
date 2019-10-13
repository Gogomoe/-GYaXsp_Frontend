<template>
    <ul>
        <li>
            <router-link to="/login" v-bind:class="{ 'nav-active': this.$route.path === '/login' }">登录</router-link>
        </li>
        <li>
            <router-link to="/signup" v-bind:class="{ 'nav-active': this.$route.path === '/signup' }">注册</router-link>
        </li>
    </ul>
</template>
<script>
    //TODO finish login and sign up page
    export default {
        name: 'NavigationUser'
    }
</script>
<style scoped lang="scss">

</style>
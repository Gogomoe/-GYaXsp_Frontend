<template>

    <ul v-if="!isLogin" class="nav-login">
        <li>
            <div class="link" v-on:click="showLoginDialog()">登录</div>
        </li>
        <li>
            <router-link to="/signup" class="link">注册</router-link>
        </li>
    </ul>
    <ul v-else class="nav-user">
        <li>
            <router-link v-bind:to="`/user/${username}`">
                <img class="nav-avatar" v-bind:src="avatar" alt="avatar">
                <div>{{ username }}</div>
            </router-link>
        </li>
    </ul>

</template>
<script>
    import {mapGetters, mapMutations, mapState} from "vuex";

    export default {
        name: 'NavigationUser',
        computed: {
            ...mapState('user', [
                'username',
                'avatar'
            ]),
            ...mapGetters('user', [
                'isLogin'
            ])
        },
        methods: {
            ...mapMutations([
                'showLoginDialog'
            ])
        }
    }
</script>
<style scoped lang="scss">
    .nav-user {
        font-size: 1rem;
    }

    .nav-user a {
        display: flex;
        align-items: center;
        line-height: 45px;
        text-decoration: none;

        & > * {
            display: block;
            margin: 0 0.5rem;
        }
    }

    .nav-avatar {
        width: 36px;
        height: 36px;
        border-radius: 18px;
    }
</style>
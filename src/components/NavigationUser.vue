<template>

    <ul v-if="!isLogin" class="m-nav-login">
        <li>
            <div class="u-link" v-on:click="showLoginDialog()">登录</div>
        </li>
        <li>
            <router-link to="/signup" class="u-link">注册</router-link>
        </li>
    </ul>
    <ul v-else class="m-nav-user">
        <li>
            <router-link class="m-nav-user-link" v-bind:to="`/user/${username}`">
                <img class="m-nav-user-avatar" v-bind:src="avatar" alt="avatar">
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
<style lang="scss">

    .m-nav-user {
        font-size: 1rem;
    }

    .m-nav-user-link {
        @include center-vertical;
        height: 100%;

        & > * {
            display: block;
            margin: 0 0.5rem;
        }
    }

    .m-nav-user-avatar {
        width: 36px;
        height: 36px;
        border-radius: 18px;
    }
</style>
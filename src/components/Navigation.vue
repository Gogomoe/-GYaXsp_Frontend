<template>
    <div class="m-nav">
        <div class="g-body-row">
            <ul class="m-nav-list m-nav-router-list">
                <li>
                    <router-link to="/" class="u-link">首页</router-link>
                </li>
                <li>
                    <router-link to="/problems/1" class="u-link">题库</router-link>
                </li>
            </ul>
            <NavigationUser class="m-nav-list m-nav-user-list"/>
        </div>
    </div>
</template>
<script>
    import NavigationUser from "./NavigationUser";

    export default {
        name: 'Navigation',
        components: {NavigationUser}
    }
</script>
<style lang="scss">
    .m-nav {
        @include center-horizontal;
        position: fixed;
        box-sizing: border-box;
        width: 100%;
        height: 45px;
        font-size: 0.875rem;
        background: rgba(255, 255, 255, .98);
        box-shadow: 0 0 6px rgba(0, 0, 0, .25);

        .m-nav-router-list {
            float: left;
        }

        .m-nav-user-list {
            float: right;
        }
    }

    .m-nav .m-nav-list {
        display: flex;
        height: 100%;

        .u-link {
            display: block;
            box-sizing: border-box;
            padding: 0 1.25rem;
            line-height: 42px;
            text-align: center;

            color: $link-color;
            border-top: 3px solid transparent;
            transition: all .2s;

            &:hover {
                text-decoration: none;
                border-color: $primary-color;
                background: $active-bg-color;
            }

            &.router-link-exact-active {
                border-color: $active-color;
            }
        }
    }

</style>

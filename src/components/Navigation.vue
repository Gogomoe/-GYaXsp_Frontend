<template>
    <div id="nav">
        <div class="body-row">
            <ul class="nav-list router-list">
                <li>
                    <router-link to="/" class="link">首页</router-link>
                </li>
                <li>
                    <router-link to="/problems/1" class="link">题库</router-link>
                </li>
            </ul>
            <NavigationUser class="nav-list user-list"/>
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
    #nav {
        display: flex;
        justify-content: center;
        position: fixed;
        box-sizing: border-box;
        width: 100%;
        height: 45px;
        font-size: 0.875rem;
        background: rgba(255, 255, 255, .98);
        box-shadow: 0 0 6px rgba(0, 0, 0, .25);

        .router-list {
            float: left;
        }

        .user-list {
            float: right;
        }
    }

    #nav .nav-list {
        display: flex;
        height: 100%;

        .link {
            display: block;
            box-sizing: border-box;
            line-height: 42px;
            padding: 0 1.25rem;
            text-align: center;

            color: #555;
            transition: border-top-color .2s, background-color .2s;
            border-top: 3px solid transparent;

            &:hover {
                text-decoration: none;
                border-color: $primary-color;
                background: #f8f8f8;
            }

            &.router-link-exact-active {
                border-color: $active-color;
            }
        }
    }

</style>

<template>
    <transition name="login-dialog-fade">
        <div id="login-dialog" v-show="show" v-on:click.self="hideLoginDialog()">
            <div class="dialog-content">
                <div class="login-bg"></div>
                <div class="login-box">
                    <div class="dialog-close" v-on:click.self="hideLoginDialog()">关闭</div>
                    <form action="">
                        <h1>登录</h1>
                        <div class="form-row">
                            <label for="username">用户名</label>
                            <input type="text" name="username" id="username"/>
                        </div>
                        <div class="form-row">
                            <label for="password">密码</label>
                            <input type="password" name="password" id="password"/>
                        </div>
                        <button class="button primary">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import {mapMutations, mapState} from "vuex";

    export default {
        name: "LoginDialog",
        computed: {
            ...mapState({
                show: 'showLoginDialog'
            })
        },
        methods: {
            ...mapMutations([
                'hideLoginDialog'
            ])
        }
    }
</script>

<style scoped lang="scss">

    #login-dialog {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: rgba(240, 240, 240, 0.6);
    }

    .dialog-content {
        float: right;
        position: relative;
    }

    .dialog-close {
        position: absolute;
        cursor: pointer;
        top: 1rem;
        right: 1rem;
        color: #555;
    }

    .login-bg {
        position: absolute;
        left: -1.875rem;
        top: 3.125rem;
        bottom: 3.125rem;
        right: -1.875rem;
        z-index: 1;
        background-color: rgba(0, 0, 0, .8);
    }

    .login-box {
        position: relative;
        box-sizing: border-box;
        width: 20rem;
        margin-right: 18.125rem;
        z-index: 2;
        padding: 4.25rem;
        background-color: #fff;
        box-shadow: 0 0 30px rgba(0, 0, 0, .6);

        form {
            display: flex;
            flex-direction: column;
            align-items: center;

            h1 {
                margin-bottom: 1.6rem;
                color: $primary-color;
            }

            .form-row {
                width: 100%;
            }

            .button {
                width: 100%;
                margin-top: 0.8rem;
            }

        }
    }

    #login-dialog.login-dialog-fade-enter, #login-dialog.login-dialog-fade-leave-to {
        background: transparent;

        .dialog-content {
            transform: scale(.6, .6);
            opacity: 0;
        }
    }

    #login-dialog.login-dialog-fade-enter-active, #login-dialog.login-dialog-fade-leave-active {
        transition: all .2s;

        .dialog-content {
            transition: all .2s;
        }
    }
</style>
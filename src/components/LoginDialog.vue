<template>
    <transition name="f-login-dialog-fade">
        <div class="m-login-dialog" v-show="show" v-on:click.self="hideLoginDialog">
            <div class="m-login-dialog-box">
                <div class="m-login-dialog-signup-box">
                    <h1>还没有账户？</h1>
                    <div v-on:click="toLoginPage" class="u-button">现在注册</div>
                </div>
                <div class="m-login-dialog-login-box">
                    <div class="u-dialog-close" v-on:click="hideLoginDialog">关闭</div>
                    <form @keyup.enter="submit">
                        <h1>登录</h1>
                        <div class="m-form-row">
                            <label for="username">用户名</label>
                            <input v-model="username" type="text" name="username" id="username"/>
                        </div>
                        <div class="m-form-row">
                            <label for="password">密码</label>
                            <input v-model="password" type="password" name="password" id="password"/>
                        </div>
                        <button type="button" class="u-button primary" v-on:click="submit">登录</button>
                    </form>
                    <ProcessState
                            class="m-login-messages"
                            v-bind:accept-message="acceptMessage"
                            v-bind:error-message="errorMessage"
                            v-bind:info-message="infoMessage"></ProcessState>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import {mapActions, mapMutations, mapState} from "vuex";
    import ProcessState from "./ProcessState";

    export default {
        name: 'LoginDialog',
        components: {ProcessState},
        data() {
            return {
                username: null,
                password: null,
                errorMessage: null,
                acceptMessage: null,
                infoMessage: null
            }
        },
        computed: {
            ...mapState({
                show: 'showLoginDialog'
            })
        },
        methods: {
            hideLoginDialog() {
                this.clearMessage();
                this.$store.commit('user/hideLoginDialog');
            },
            ...mapMutations([
                'hideLoginDialog'
            ]),

            ...mapActions('user', [
                'login'
            ]),

            toLoginPage() {
                this.hideLoginDialog();
                this.$router.push('/signup');
            },

            submit() {
                this.clearMessage();
                this.infoMessage = 'Pending...';

                this.login({username: this.username, password: this.password}).then(_ => {
                    setTimeout(() => {
                        this.clearMessage();
                        this.acceptMessage = 'Success!';
                        setTimeout(_ => {
                            this.hideLoginDialog()
                        }, 300)
                    }, 300);
                }).catch(e => {
                    setTimeout(() => {
                        this.clearMessage();
                        this.errorMessage = e.message;
                    }, 300);
                });
            },

            clearMessage() {
                this.errorMessage = null;
                this.acceptMessage = null;
                this.infoMessage = null;
            }
        }
    }
</script>

<style lang="scss">

    .m-login-dialog {
        position: fixed;
        @include center-both;
        width: 100%;
        height: 100%;
        background: rgba(240, 240, 240, 0.6);
    }

    .m-login-dialog-box {
        @include relative-wrapper;
    }

    .u-dialog-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
        color: $link-color;
    }

    .m-login-dialog-signup-box {
        position: absolute;
        left: -1.875rem;
        top: 3.125rem;
        bottom: 3.125rem;
        right: -1.875rem;
        z-index: 1;
        padding: 4.5rem 3rem 4.5rem 24.875rem;
        color: #ddd;
        background-color: rgba(0, 0, 0, .8);

        h1 {
            color: #fff;
            margin-bottom: 3rem;
        }

        .u-button {
            color: #fff;
            border: solid 2px #fff;

            &:hover {
                color: #ffef87;
                border-color: #ffef87
            }
        }
    }

    .m-login-dialog-login-box {
        position: relative;
        box-sizing: border-box;
        width: 20rem;
        margin-right: 18.125rem;
        padding: 4.25rem;
        z-index: 2;
        background-color: #fff;
        box-shadow: 0 0 30px rgba(0, 0, 0, .6);

        form {
            @include flex-vertical-center;

            h1 {
                margin-bottom: 1.6rem;
                color: $primary-color;
            }

            .m-form-row {
                width: 100%;
            }

            .u-button {
                width: 100%;
                margin-top: 0.8rem;
            }

        }

    }

    .m-login-messages {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;

        & > * {
            width: 100%;
            height: 2.4rem;
        }

    }

    #m-login-dialog.f-login-dialog-fade-enter, #m-login-dialog.f-login-dialog-fade-leave-to {
        background: transparent;

        .m-login-dialog-box {
            transform: scale(.6, .6);
            opacity: 0;
        }
    }

    #m-login-dialog.f-login-dialog-fade-enter-active, #m-login-dialog.f-login-dialog-fade-leave-active {
        transition: all .2s;

        .m-login-dialog-box {
            transition: all .2s;
        }
    }
</style>
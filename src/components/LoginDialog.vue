<template>
    <transition name="login-dialog-fade">
        <div id="login-dialog" v-show="show" v-on:click.self="hideLoginDialog">
            <div class="dialog-content">
                <div class="login-bg">
                    <h1>还没有账户？</h1>
                    <div v-on:click="toLoginPage" class="button button-border">现在注册</div>
                </div>
                <div class="login-box">
                    <div class="dialog-close" v-on:click="hideLoginDialog">关闭</div>
                    <form>
                        <h1>登录</h1>
                        <div class="form-row">
                            <label for="username">用户名</label>
                            <input v-model="username" type="text" name="username" id="username"/>
                        </div>
                        <div class="form-row">
                            <label for="password">密码</label>
                            <input v-model="password" type="password" name="password" id="password"/>
                        </div>
                        <button type="button" class="button primary" v-on:click="submit">登录</button>
                    </form>
                    <div class="login-messages">
                        <transition name="message-fade">
                            <div class="error-message" v-show="errorMessage">{{ errorMessage }}</div>
                        </transition>
                        <transition name="message-fade">
                            <div class="accept-message" v-show="acceptMessage">{{ acceptMessage }}</div>
                        </transition>
                        <transition name="message-fade">
                            <div class="info-message" v-show="infoMessage">{{ infoMessage }}</div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import {mapActions, mapMutations, mapState} from "vuex";

    export default {
        name: 'LoginDialog',
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
        padding: 4.5rem 3rem 4.5rem 24.875rem;
        background-color: rgba(0, 0, 0, .8);
        color: #ddd;

        h1 {
            color: #fff;
            margin-bottom: 3rem;
        }

        .button {
            color: #fff;
            border: solid 2px #fff;
            text-decoration: none;

            &:hover {
                color: #ffef87;
                border-color: #ffef87
            }
        }
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

        .login-messages {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;

            & > * {
                display: block;
                box-sizing: border-box;
                width: 100%;
                height: 2.4rem;
                padding: 0.7rem 0;
                font-size: 1rem;
                text-align: center;
                color: #fff;
                overflow: hidden;
            }

            .error-message {
                background-color: #d32f2f;
            }

            .accept-message {
                background-color: #388e3c;
            }

            .info-message {
                background-color: #1976d2;
            }

            .message-fade-enter, .message-fade-leave-to {
                height: 0;
                padding: 0;
            }

            .message-fade-enter-active, .message-fade-leave-active {
                transition: all .3s;
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
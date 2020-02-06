<template>
    <div class="m-fetch-state">
        <transition name="f-fetch-state-message-fade">
            <div class="u-error-message" v-show="errorMessage">{{ errorMessage }}</div>
        </transition>
        <transition name="f-fetch-state-message-fade">
            <div class="u-accept-message" v-show="acceptMessage">{{ acceptMessage }}</div>
        </transition>
        <transition name="f-fetch-state-message-fade">
            <div class="u-info-message" v-show="infoMessage">{{ infoMessage }}</div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "ProcessState",
        props: {
            errorMessage: {
                type: String,
                default: null
            },
            acceptMessage: {
                type: String,
                default: null
            },
            infoMessage: {
                type: String,
                default: null
            }
        }
    }
</script>

<style lang="scss">
    .m-fetch-state {

        & > * {
            display: block;
            box-sizing: border-box;
            padding: 0.7rem 0;
            font-size: 1rem;
            text-align: center;
            color: #fff;
            overflow: hidden;
        }

        .u-error-message {
            background-color: #d32f2f;
        }

        .u-accept-message {
            background-color: #388e3c;
        }

        .u-info-message {
            background-color: #1976d2;
        }

        .f-fetch-state-message-fade-enter, .f-fetch-state-message-fade-leave-to {
            height: 0;
            padding: 0;
        }

        .f-fetch-state-message-fade-enter-active, .f-fetch-state-message-fade-leave-active {
            transition: all .3s;
        }
    }
</style>
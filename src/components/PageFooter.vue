<template>
    <footer class="m-footer">
        <div class="g-flex-vertical g-body-row">
            <div class="m-footer-links">
                <div class="m-footer-link-category">
                    <h1>开发</h1>
                    <ul>
                        <li>
                            <a href="https://github.com/Gogomoe/GYaXsp" target="_blank">Github</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="m-footer-extra-links">
                <ul class="m-extra-links-left">
                    <li>
                        <router-link to="/about">关于</router-link>
                    </li>
                    <li>
                        <router-link to="/contact-us">联系我们</router-link>
                    </li>
                </ul>
                <ul class="m-extra-links-right">
                    <li>
                        不知到build号是啥
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        name: 'PageFooter'
    }
</script>
<style lang="scss">
    .m-footer {
        @include center-horizontal;
        background: rgba(255, 255, 255, .98);
    }

    .m-footer-links {
        display: flex;
    }

    .m-footer-link-category {
        box-sizing: border-box;
        width: 200px;
        padding: 30px 15px 50px;

        h1 {
            font-size: 1.25rem;;
        }

        ul {
            margin: .625rem 0;
            font-size: .8125rem;
        }

        li {
            line-height: 2;
        }
    }

    .m-footer-extra-links {
        padding: 1.25rem 1.5rem;
        font-size: .8125rem;

        ul {
            display: flex;
        }

        li {
            line-height: 2;
            margin-right: 1.25rem;
        }

    }

    .m-extra-links-left {
        float: left;
    }

    .m-extra-links-right {
        float: right;
    }
</style>
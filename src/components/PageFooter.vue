<template>
    <footer id="footer">
        <div class="row">
            <div class="footer-links">
                <div class="category">
                    <h1>开发</h1>
                    <ul>
                        <li>
                            <a href="https://github.com/Gogomoe/GYaXsp" target="_blank">Github</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="extra-links">
                <ul class="extra-links-left">
                    <li>
                        <router-link to="/about">关于</router-link>
                    </li>
                    <li>
                        <router-link to="/contact-us">联系我们</router-link>
                    </li>
                </ul>
                <ul class="extra-links-right">
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
<style scoped lang="scss">
    #footer {
        display: flex;
        justify-content: center;
        width: 100%;
        background: rgba(255, 255, 255, .98);
    }

    .row {
        @include flex-vertical;
    }

    .footer-links {
        display: flex;
    }

    .category {
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

    .extra-links {
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

    .extra-links-left {
        float: left;
    }

    .extra-links-right {
        float: right;
    }
</style>
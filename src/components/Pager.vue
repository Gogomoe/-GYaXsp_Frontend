<template>
    <div class="pager-wrapper" v-if="totalPage > 0">
        <div class="pager-pages">
            <router-link
                    v-show="currentPage > 1"
                    v-bind:to="linkTo(1)">
                第一页
            </router-link>

            <span v-show="pages[0] > 1">...</span>

            <router-link
                    v-show="currentPage > 1 && showPrev"
                    v-bind:to="linkTo(currentPage - 1)">
                前一页
            </router-link>

            <router-link v-for="page in pages"
                         v-bind:class="{active: currentPage === page }"
                         v-bind:to="linkTo(page)">
                {{page}}
            </router-link>

            <router-link
                    v-show="currentPage < totalPage && showNext"
                    v-bind:to="linkTo(currentPage + 1)">
                后一页
            </router-link>

            <span v-show="pages[pages.length-1] < totalPage">...</span>

            <router-link
                    v-show="currentPage < totalPage"
                    v-bind:to="linkTo(totalPage)">
                末页
            </router-link>
        </div>
        <div v-if="showJump" v-show="totalPage > 1" class="pager-jump">
            <span>共<em class="jump-total">{{totalPage}}</em>页 ，跳至</span>
            <input type="number" :min="1" :max="totalPage" v-model="jumpPage" class="jump-input">
            <span>页</span>
            <router-link v-bind:to="linkTo(jumpPage)">
                转跳
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: "pager",
        props: {
            totalPage: {
                type: Number,
                default: 1,
                required: true
            },
            showItems: {
                type: Number,
                default: 5
            },
            showPrev: {
                type: Boolean,
                default: true
            },
            showNext: {
                type: Boolean,
                default: true
            },
            showJump: {
                type: Boolean,
                default: false
            },
            initPage: {
                type: Number,
                default: 1
            },
            link: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                currentPage: 0,
                jumpPage: 0,
            }
        },
        computed: {
            pages() {
                let half = Math.ceil(this.showItems / 2);
                let start = Math.max(Math.min(this.currentPage - half, this.totalPage - half), 1);
                let pages = [];
                for (let i = start; i <= Math.min(start + this.showItems, this.totalPage); i++) {
                    pages.push(i);
                }
                return pages
            }
        },
        created() {
            this.currentPage = this.initPage
        },
        methods: {
            linkTo(page) {
                return this.link.replace("{Page}", page)
            }
        },
        watch: {
            currentPage(newVal) {
                this.jumpPage = newVal
            },
            initPage(newVal) {
                if (this.currentPage !== newVal) {
                    this.currentPage = newVal
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .pager-pages {
        width: 100%;
        text-align: center;

        & > * {
            display: inline-block;
            padding: 0.375rem 0.625rem;
            color: #a7a7a7;
            border-top: solid 3px transparent;
        }

        & > a {
            transition: all .3s;

            &:visited {
                color: #a7a7a7;
            }

            &:hover {
                color: #555;
                border-top-color: $primary-color;
                text-decoration: none;
            }

        }

        & > .active {
            color: $active-color;
            border-top-color: $active-color;

            &:hover, &:visited {
                color: $active-color;
                border-top-color: $active-color;
            }
        }
    }
</style>
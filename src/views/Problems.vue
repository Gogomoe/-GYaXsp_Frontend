<template>
    <div class="m-problems">
        <div class="g-body-row">
            <div class="g-main-columns">
                <div class="m-problems-list m-section">
                    <table class="m-section-table m-problems-table">
                        <tr>
                            <th class="m-problems-problem-name">题目</th>
                            <th class="m-problems-create-date">发布时间</th>
                            <th class="m-problems-example-count">样例</th>
                        </tr>
                        <tr v-for="problem in problems" v-bind:key="problem.name">
                            <td class="m-problems-problem-name">
                                <router-link v-bind:to="`/problem/${problem.name}`" class="u-link">
                                    {{ problem.name }}
                                </router-link>
                            </td>
                            <td class="m-problems-create-date">
                                {{ new Date(problem.create_time).toLocaleDateString() }}
                            </td>
                            <td class="m-problems-example-count">{{ problem.example_count }}</td>
                        </tr>
                    </table>
                    <div class="m-section-body">
                        <pager
                                link="/problems/{Page}"
                                v-bind:init-page="page"
                                v-bind:total-page="pageCount"
                                class="m-problems-pager">
                        </pager>
                    </div>
                </div>
            </div>
            <div class="g-side-columns" v-if="haveAdminPerm">
                <div class="m-section">
                    <div class="m-section-header">
                        <h1 class="m-section-title">管理</h1>
                    </div>
                    <div class="m-section-body">
                        <router-link to="/problems/settings" class="u-button no-radius primary">
                            设置
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {server} from "../config";
    import Pager from "../components/Pager";

    export default {
        name: "problems",
        components: {Pager},
        data() {
            return {
                page: 1,
                pageSize: 50,
                pageCount: 1,
                problems: []
            }
        },
        computed: {
            haveAdminPerm() {
                return this.$store.getters['user/hasPerm']('admin')
            },
        },
        methods: {
            async loadPage(page) {
                let pageSize = this.pageSize = 50;
                this.page = page;

                let url = new URL(`${server}/api/problems`);
                let params = {
                    offset: ((page - 1) * pageSize),
                    limit: pageSize
                };
                Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

                let response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include'
                }).then(response => response.json());

                if (response.success) {
                    this.pageCount = Math.ceil(response['problems_count'] / this.pageSize);
                    this.problems = response.problems.slice();
                } else {
                    throw response.error;
                }
            }
        },
        async created() {
            let page = this.$route.params.page || 1;
            await this.loadPage(parseInt(page));
        },
        async beforeRouteUpdate(to, from, next) {
            await this.loadPage(parseInt(to.params.page));
            next()
        }
    }
</script>

<style lang="scss">
    .m-problems {
        display: flex;
        justify-content: center;
    }

    .m-problems-table {
        width: 100%;

        tr {
            width: 100%;
        }

        .m-problems-create-date {
            box-sizing: border-box;
            width: 6.5rem;
            text-align: center;
            border-left: 1px solid #e4e4e4;
        }

        .m-problems-example-count {
            box-sizing: border-box;
            width: 4.375rem;
            text-align: center;
            border-left: 1px solid #e4e4e4;
        }

    }

    .m-problems-pager {
        width: 100%;
    }
</style>
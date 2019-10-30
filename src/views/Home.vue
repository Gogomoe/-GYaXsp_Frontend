<template>
    <div class="home">
        <div class="body-row">
            <div class="main-columns">
                <div class="announcement section">
                    <div class="section-header">
                        <h1 class="section-title">公告</h1>
                    </div>
                    <div class="section-body">
                        <p>开发中</p>
                    </div>
                </div>
            </div>
            <div class="side-columns">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        components: {}
    };
</script>

<style scoped lang="scss">
    .home {
        display: flex;
        justify-content: center;
    }

    .announcement {
        flex-grow: 1;
    }
</style>

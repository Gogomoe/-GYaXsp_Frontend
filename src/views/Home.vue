<template>
    <div class="m-home">
        <div class="g-body-row">
            <div class="g-main-columns">
                <div class="m-announcement m-section">
                    <div class="m-section-header">
                        <h1 class="m-section-title">公告</h1>
                    </div>
                    <div class="m-section-body">
                        <p>开发中</p>
                    </div>
                </div>
            </div>
            <div class="g-side-columns">

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

<style lang="scss">
    .m-home {
        display: flex;
        justify-content: center;
    }

    .m-announcement {
        flex-grow: 1;
    }
</style>

<!-- 首页 -->
<template>
    <div class="index-box" @click="$store.state.menuShow = false;">
        <Banner></Banner>
        <Dmartech></Dmartech>
    </div>
</template>

<script>
    import Banner from '../components/index/Banner.vue'
    import Dmartech from '../components/index/Dmartech.vue'

    export default {
        name: 'index-box',
        data () {
            return {

            };
        },

        components: {
            Banner,
            Dmartech,
        },
    }

</script>
<style lang='scss' scoped>
    .index-box{
        // background-color: #f5f5f5;
        margin-top: 120px;
    }
</style>
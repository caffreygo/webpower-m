<!-- 头部 -->
<template>
    <div class="header-box" @touchmove.prevent>
        <Nav></Nav>
        <Menu></Menu>
    </div>
</template>

<script>
    import Nav from './header/Nav'
    import Menu from './header/Menu'
    export default {
        name: 'header-box',
        data () {
            return {

            };
        },
        components:{
            Nav,
            Menu
        }
    }

</script>
<style lang='scss' scoped>
    .header-box{
        width: 100%;
        position: fixed;
        z-index: 90;
        top: 0;
    }
</style>
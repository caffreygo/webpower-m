<!-- 拨号弹窗 -->
<template>
    <div  class="dial-box" @touchmove.prevent v-show="$store.state.subDial">
        <a href="tel:4001181598">
            <div class="dial-area">
                <img src="/static/img/dial.png" alt="" class="dialLogo">
                <p class="dial-title">点击立即拨打</p>
                <p class="dial-number">400-118-1598</p>
            </div>
        </a>
        <img src="/static/img/close.png" alt="" class="closeBtn" @click="$store.state.subDial = false;">
    </div>
</template>

<script>
export default {
    name: 'dial-box',
    data () {
        return {

        };
    },

}
</script>
<style lang='scss' scoped>
    .dial-box{
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;

        .dial-area{
            width: 500px;
            height: 280px;
            border-radius: 3px;
            background-color: #fff;
            margin: 315px auto 0;
            overflow: hidden;

            .dialLogo{
                width: 32px;
                height: 48px;
                display: block;
                margin: 48px auto 0;
            }

            .dial-title, .dial-number{
                font-size: 30px;
                text-align: center;
                margin-top: 27px;
            }
        }

       .closeBtn{
            width: 73px;
            height: 73px;
            display: block;
            margin: 78px auto 0;
       }
    }
</style>
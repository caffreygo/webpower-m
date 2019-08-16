<!-- 订阅失败 -->
<template>
    <div class="subFail-box" @touchmove.prevent v-show="$store.state.subFail">
        <div class="subFail-area">
            <img src="/static/img/fail.png" alt="" class="failLogo">
            <p class="fail-title">操作失败</p>
            <p class="fail-text">很抱歉，网络连接出现异常<br>请稍后重试</p>
            <div class="confirmBtn" @click="$store.state.subFail = false;">确&nbsp;&nbsp;认</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'subFail-box',
    data () {
        return {
            
        };
    },
    methods:{

    },
    mounted(){
        
    }
}
</script>
<style lang='scss' scoped>
    .subFail-box{
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;

        .subFail-area{
            width: 500px;
            height: 420px;
            border-radius: 3px;
            background-color: #fff;
            margin: 315px auto 0;
            overflow: hidden;
            position: relative;

            .failLogo{
                width: 49px;
                height: 49px;
                display: block;
                margin: 35px auto 0;
            }

            .fail-title{
                font-size: 30px;
                text-align: center;
                margin-top: 24px;
            }

            .fail-text{
                font-size: 24px;
                text-align: center;
                margin-top: 30px;
                line-height: 30px;
            }

            .confirmBtn{
                width: 450px;
                height: 96px;
                background-color: #7e35c4;
                text-align: center;
                line-height: 96px;
                font-size: 36px;
                color: #fff;
                border-radius: 3px;
                position: absolute;
                left: 25px;
                bottom: 25px;
            }
        }
    }
</style>
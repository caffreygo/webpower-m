<!-- 提交成功 -->
<template>
    <div class="subSucc-box" @touchmove.prevent v-show="$store.state.formsubFail">
        <div class="subSucc-area">
            <img src="/static/img/fail.png" alt="" class="successLogo">
            <p class="success-title">操作失败</p>
            <p class="success-text">很抱歉，网络连接出现异常<br>请稍后重试</p>
            <div class="confirmBtn" @click="$store.state.formsubFail = false;">确&nbsp;&nbsp;认</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'subSucc-box',
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
    .subSucc-box{
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;

        .subSucc-area{
            width: 500px;
            height: 420px;
            border-radius: 3px;
            background-color: #fff;
            margin: 315px auto 0;
            overflow: hidden;
            position: relative;

            .successLogo{
                width: 49px;
                height: 49px;
                display: block;
                margin: 35px auto 0;
            }

            .success-title{
                font-size: 30px;
                text-align: center;
                margin-top: 24px;
            }

            .success-text{
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
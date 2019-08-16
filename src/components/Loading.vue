<!-- loading弹窗 -->
<template>
    <div  class="load-box" @touchmove.prevent v-show="$store.state.loading">
        <div class="load-area">提交中{{dianText}}</div>
    </div>
</template>

<script>
export default {
    name: 'load-box',
    data () {
        return {
            timer: undefined,
            dianText: ''
        };
    },
    methods:{
        loading(){
            let dianMath = 2;
            this.timer = setInterval(() => {
                dianMath++;
                if(dianMath == 4){
                    dianMath = 1;
                }
                switch(dianMath){
                    case 1:
                       this.dianText = '.';
                    break;
                    case 2:
                        this.dianText = '..';
                    break;
                    default:
                        this.dianText = '...';
                }
            },500)
        }
    },
    mounted(){
        this.loading();
    },
}
</script>
<style lang='scss' scoped>
    .load-box{
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;

        .load-area{
            width: 200px;
            height: 72px;
            border-radius: 3px;
            background-color: #000;
            margin: 466px auto 0;
            overflow: hidden;
            color: #fff;
            text-indent: 55px;
            line-height: 72px;
            font-size: 28px;
        }
    }
</style>
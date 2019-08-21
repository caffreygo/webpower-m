<!-- 社会化营销 -->
<template>
    <div class="Custom-box" @click="$store.state.menuShow = false;">
        <div class="Custom-box-title">
            <div class="shu"></div>
            <p>定制服务</p>
        </div>

        <div class="Custom-list">
            <router-link :to="item.link" v-for="(item, index) in data" :key="index">
                <div class="box" >
                    <img class="bigImg" :src=item.picture alt="">
                    <p>{{item.service}}</p>
                    <img class="CustomJiantou" src="/static/img/CustomJiantou.png" alt="">
                </div>
            </router-link>
            
        </div>

        <router-link to="/form">
            <div class="subBtn" @click="$store.state.fromLink = '定制服务页'">定制你的个性化需求</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            data: []
        };
    },

    mounted(){
        this.$ajax.get('/service/get').then(res => {
            this.data = res.data
        }).then(err => {})
    }

}
</script>
<style lang='scss' scoped>
    .Custom-box{
        width: 100%;
        margin-top: 140px;
        background-color: #fff;
        overflow: hidden;

        .Custom-box-title{
            width: 100%;
            height: 115px;
            border-bottom: solid 1px #f5f5f5;
            overflow: hidden;
            

            .shu{
                width: 5px;
                height: 27px;
                border-radius: 2px;
                background-color: #e5803c;
                margin: 44px 0 0 36px;
                float: left;
            }

            p{
                float: left;
                height: 100%;
                line-height: 115px;
                font-size: 30px;
                margin-left: 16px;
            }
        }

        .Custom-list{
            
                padding-bottom: 76px;
                border-bottom: solid 2px #f5f5f5;

            .box{
                position: relative;
                width: 695px;
                height: 205px;
                margin: 48px auto 0;
                border: 4px;
                box-shadow: 0 0 5px #ddd;

                .bigImg{
                    width: 240px;
                    height: 148px;
                    margin: 28.5px 0 0 24px;
                    float: left;
                }

                p{
                    float: left;
                    font-size: 30px;
                    font-weight: bold;
                    line-height: 205px;
                    margin-left: 30px;
                }

                .CustomJiantou{
                    position: absolute;
                    width: 15px;
                    height: 28px;
                    top: 89.5px;
                    right: 37px;
                }
            }
        }

        .subBtn{
            width: 668px;
            height: 96px;
            background-color: #e5803c;
            text-align: center;
            font-size: 36px;
            color: #fff;
            line-height: 96px;
            margin: 50px auto;
            border-radius: 4px;
        }
    }
</style>
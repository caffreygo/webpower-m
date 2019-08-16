<!-- 社会化营销 -->
<template>
    <div class="Social-box" @click="$store.state.menuShow = false;">
        <div class="Social-box-title">
            <div class="shu"></div>
            <p>社会化营销</p>
        </div>

        <div class="Social-list">
            <router-link :to="item.url" v-for="(item, index) in data" :key="index">
                <div class="box" >
                    <img class="bigImg" :src=item.headImg alt="">
                    <p>{{item.name}}</p>
                    <img class="SocialJiantou" src="/static/img/SocialJiantou.png" alt="">
                </div>
            </router-link>
            
        </div>

        <router-link to="/form">
            <div class="subBtn" @click="$store.state.fromLink = '社会化营销页'">定制你的社交应用场景</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            data:[
                {
                    headImg: '/static/img/SocialImg1.png',
                    name: '社会化营销活动案例',
                    url: '/case/CaseContent?slug=cz0628'
                },
                {
                    headImg: '/static/img/SocialImg2.png',
                    name: 'H5互动创意案例',
                    url: '/case/CaseContent?slug=nl0628'
                },
                {
                    headImg: '/static/img/SocialImg3.png',
                    name: '小程序开发案例',
                    url: '/case/CaseContent?slug=my0628'
                },
                {
                    headImg: '/static/img/SocialImg4.png',
                    name: '社交广告投放案例',
                    url: '/case/CaseContent?slug=nlcg0628'
                }
            ]
        };
    },

}
</script>
<style lang='scss' scoped>
    .Social-box{
        width: 100%;
        margin-top: 140px;
        background-color: #fff;
        overflow: hidden;

        .Social-box-title{
            width: 100%;
            height: 115px;
            border-bottom: solid 2px #f5f5f5;
            overflow: hidden;
            

            .shu{
                width: 5px;
                height: 27px;
                border-radius: 2px;
                background-color: #2aad7b;
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

        .Social-list{
            padding-bottom: 76px;
            border-bottom: solid 2px #f5f5f5;
            // &:last-child{
            //     padding-bottom: 76px;
            //     border-bottom: solid 2px #f5f5f5;
            // }

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

                .SocialJiantou{
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
            background-color: #2aad7b;
            text-align: center;
            font-size: 36px;
            color: #fff;
            line-height: 96px;
            margin: 50px auto;
            border-radius: 4px;
        }
    }
</style>
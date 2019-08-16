<!-- 行业案例 -->
<template>
    <div class="Social-box" @click="$store.state.menuShow = false;">
        <div class="Social-box-title">
            <div class="shu"></div>
            <p>明星客户</p>
        </div>
        <div class="nav-box">
            <div class="list-box">
                <ul class="nav-list">
                    <li  v-for="(item, index) in navName" :key="index" :class="{active: navActive[index]}" @click="cheakOutNav(index)">{{item.name}}</li>
                </ul>
            </div>
            <div class="head-tabcover"></div>
        </div>
        <div class="client-box">
            <ul class="client-list">
                <li v-for="(item, index) in clientContent[contentIndex]" :key="index">
                    <img :src="item" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            contentIndex: 0,
            navName: [
                {
                    name: '零售',
                },
                {
                    name: '会展',
                },
                {
                    name: '跨境电商',
                },
                {
                    name: '酒店旅游',
                },
                {
                    name: '教育',
                },
                {
                    name: '国内电商',
                },
                {
                    name: '其他'
                }
            ],
            navActive: [1,0,0,0,0,0,0],

            clientContent:[
                ['/static/img/lingshou1.jpg','/static/img/lingshou2.jpg','/static/img/lingshou3.jpg','/static/img/lingshou4.jpg','/static/img/lingshou5.jpg','/static/img/lingshou6.jpg','/static/img/lingshou7.jpg','/static/img/lingshou8.jpg','/static/img/lingshou9.jpg','/static/img/lingshou10.jpg','/static/img/lingshou11.jpg','/static/img/lingshou12.jpg','/static/img/lingshou13.jpg','/static/img/lingshou14.jpg','/static/img/lingshou15.jpg'],
                ['/static/img/huizhan1.jpg', '/static/img/huizhan2.jpg', '/static/img/huizhan3.jpg', '/static/img/huizhan4.jpg', '/static/img/huizhan5.jpg'],
                ['/static/img/kuajingdianshang1.jpg', '/static/img/kuajingdianshang2.jpg', '/static/img/kuajingdianshang3.jpg', '/static/img/kuajingdianshang4.jpg', '/static/img/kuajingdianshang5.jpg', '/static/img/kuajingdianshang6.jpg'],
                ['/static/img/jiudianlvyou1.jpg', '/static/img/jiudianlvyou2.jpg', '/static/img/jiudianlvyou3.jpg', '/static/img/jiudianlvyou4.jpg', '/static/img/jiudianlvyou5.jpg', '/static/img/jiudianlvyou6.jpg', '/static/img/jiudianlvyou7.jpg', '/static/img/jiudianlvyou8.jpg', '/static/img/jiudianlvyou9.jpg', '/static/img/jiudianlvyou10.jpg', '/static/img/jiudianlvyou11.jpg', '/static/img/jiudianlvyou12.jpg'],
                ['/static/img/jiaoyu1.jpg', '/static/img/jiaoyu2.jpg', '/static/img/jiaoyu3.jpg', '/static/img/jiaoyu4.jpg', '/static/img/jiaoyu5.jpg', '/static/img/jiaoyu6.jpg', '/static/img/jiaoyu7.jpg', '/static/img/jiaoyu8.jpg', '/static/img/jiaoyu9.jpg', '/static/img/jiaoyu10.jpg', '/static/img/jiaoyu11.jpg'],
                ['/static/img/guoneidianshang1.jpg', '/static/img/guoneidianshang2.jpg', '/static/img/guoneidianshang3.jpg', '/static/img/guoneidianshang4.jpg', '/static/img/guoneidianshang5.jpg', '/static/img/guoneidianshang6.jpg'],
                ['/static/img/qita1.jpg', '/static/img/qita2.jpg', '/static/img/qita3.jpg', '/static/img/qita4.jpg', '/static/img/qita5.jpg', '/static/img/qita6.jpg', '/static/img/qita7.jpg', '/static/img/qita8.jpg', '/static/img/qita9.jpg', '/static/img/qita10.jpg', '/static/img/qita11.jpg', '/static/img/qita12.jpg', '/static/img/qita13.jpg', '/static/img/qita14.jpg', '/static/img/qita15.jpg']
            ]
        };
    },
    mounted(){
        
    },
    methods:{
        cheakOutNav(index){
            this.navActive = [0,0,0,0,0,0,0];
            this.navActive[index] = 1;
            this.contentIndex = index;
        }
    }
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
            overflow: hidden;
            border: solid #f5f5f5 2px;

            .shu{
                width: 5px;
                height: 27px;
                border-radius: 2px;
                background-color: #7e35c4;
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

        .nav-box{
            width: 100%;
            border-bottom: solid 2px #f5f5f5;
            position: relative;
           

            .list-box{
                position: relative;
                overflow-x: scroll;
                -webkit-overflow-scrolling:touch;
                position: relative;

                &::-webkit-scrollbar {
                    display: none;
                }

                ul.nav-list{
                    position: relative;
                    overflow: hidden;
                    padding-left: 36px;
                    box-sizing: border-box;
                    // overflow: hidden;
                    height: 80px;
                    line-height: 80px;
                    width: 980px;

                    li{
                        float: left;
                        margin-right: 46px;
                        height: 100%;
                        box-sizing: border-box;
                        padding: 0 5px;
                        font-size: 28px;

                        &:last-of-type{
                            margin-right: 36px;
                        }
                    }
                    .active{
                        border-bottom: #7e35c4 solid 3px;
                        color: #7e35c4;
                    }
                }
            }
            

            .head-tabcover{
                position: absolute;
                top: 0;
                right: 0;
                width: 36px;
                height: 80px;
                background-image: -webkit-linear-gradient(to right,rgba(255,255,255,0),#fff);
                background-image: linear-gradient(to right,rgba(255,255,255,0),#fff);
            }
        }

        .client-box{
            width: 100%;

            .client-list{
                min-height: 600px;
                width: 100%;
                box-sizing: border-box;
                padding: 52px 35px;
                // background-color: #7e35c4;
                overflow: hidden;

                li{
                    width: 186px;
                    height: 105px;
                    float: left;
                    margin-bottom: 54px;

                    &:nth-child(3n-1){
                        margin: 0 61px;
                    }

                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
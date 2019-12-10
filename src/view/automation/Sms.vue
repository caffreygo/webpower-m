<!-- 短信营销 -->
<template>
    <div class="automation-box" @click="$store.state.menuShow = false;">
        <div class="automation-box-title">
            <div class="shu"></div>
            <p>短彩信营销</p>
        </div>

        <div class="automation-content">
            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">国内外优质通道，送达率99%</p>
                    <p class="text">
                        • 行业短信（验证码），秒级送达，提升服务效率与用户体验<br>
                        • 发送峰值可达千万级推送，最大范围覆盖目标受众<br>
                        • 主流运营商通道，覆盖 240个国家或地区，稳定的送信通道可保障短信发送畅通无阻API接入采用主流Restful架构<br>
                    </p>
                </div>
            </div>

            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">API接入采用主流Restful架</p>
                    <p class="text">
                        • 可与邮件联动，高阅读率的短信+高性价比的邮件，堪称短信营销的黄金组合，精准触及目标用户<br>
                        • 与企业现有CRM系统无缝对接，为企业与用户搭建有效沟通的桥梁，扩大短信营销声量，实现高质量的宣传推广效果
                    </p>
                </div>
            </div>

            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">个性化字段、营销互动模块，轻松助力营销活动</p>
                    <p class="text">
                        • 一键生成短链接，轻松获悉短信营销的宣传推广效果，节省短信营销的短信投放成本<br>
                        • 营销互动模块，支持上下行，轻松策划营销活动无压力
                    </p>
                </div>
            </div>

            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">更安心的服务，靠谱就是王道</p>
                    <p class="text">
                        • 成熟的数据库对接，完善的预警机制，提升短信营销的安全保障能力<br>
                        • 可选三网合一号码，或品牌专属尾号，实现个性化营销服务<br>
                        • 7X24小时技术支持，快速响应，及时解决相关问题并提供完善的智慧营销方案
                    </p>
                </div>
            </div>
            
        </div>

        <router-link to="/form">
            <div class="automationBtn" @click="$store.state.fromLink = '短彩信营销页'">免费试用</div>
        </router-link>

        <img class="showBtn" src="/static/img/smsShowBtn.png" alt="" @click="showBox = true;">
        <div class="showBox" @touchmove.prevent v-show="showBox">
            <p class="show-title">【{{imgTitle[imgIndex]}}】</p>
            <div class="show-content">
                <img src="/static/img/showboxLeft.png" alt="" @click="leftBtnFn">
                <div class="show-img-box">
                    <div class="show-img-list">
                        <img v-for="(img, index) in imgArr" :src="img" alt="" :key="index">
                    </div>
                </div>
                <img src="/static/img/showboxRight.png" alt="" @click="rightBtnFn">
            </div>
            <img src="/static/img/smsShowClose.png" alt="" class="showCloseBtn" @click="showBox = false;">
        </div>
    </div>
    
</template>

<script>
export default {
    name: '',
    data () {
        return {
            imgTitle:[
                '注册验证',
                '会员激活',
                '促销活动',
                '活动邀约',
                '支付验证',
                '订单确认',
                '物流信息',
                '积分提醒',
                '问卷调研'
            ],
            imgArr:[
                '/static/img/smsShowImg1.png',
                '/static/img/smsShowImg2.png',
                '/static/img/smsShowImg3.png',
                '/static/img/smsShowImg4.png',
                '/static/img/smsShowImg5.png',
                '/static/img/smsShowImg6.png',
                '/static/img/smsShowImg7.png',
                '/static/img/smsShowImg8.png',
                '/static/img/smsShowImg9.png'
            ],
            imgIndex: 0,
            showBox: false,
            clickTF:true
        };
    },
    methods:{
        leftBtnFn:function(){
            if(this.clickTF){
                this.clickTF = false;
                if(this.imgIndex != 0){
                    this.imgIndex--;
                }

                $('.show-img-list').animate({
                    left: this.imgIndex * -100 + '%' 
                },300,() =>{
                    this.clickTF = true;
                })
            }
           
        },
        rightBtnFn:function(){
            if(this.clickTF){
                this.clickTF = false;
                if(this.imgIndex != 8){
                    this.imgIndex++;
                }
                
                $('.show-img-list').animate({
                    left: this.imgIndex * -100 + '%' 
                },300,() =>{
                    this.clickTF = true;
                })
            }
            
        },
    }
}
</script>
<style lang='scss' scoped>
    .automation-box{
        width: 100%;
        margin-top: 140px;
        background-color: #fff;
        overflow: hidden;
        position: relative;

        .automation-box-title{
            width: 100%;
            height: 115px;
            border-bottom: solid 1px #f5f5f5;
            overflow: hidden;
            
                                                                  
            .shu{
                width: 5px;
                height: 27px;
                border-radius: 2px;
                background-color: #e56a61;
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
        
        .automation-content{

            .content-area-box{
                width: 100%;
                border-bottom: solid 1px #f5f5f5;

                .content-area{
                    padding: 50px 40px 90px;

                    p{
                        width: 574px;
                    }
                    .title{
                        font-size: 30px;
                        color: #000;
                        font-weight: bold;
                        line-height: 40px;
                    }

                    .text{
                        margin-top: 10px;
                        color: #666666;
                        font-size: 24px;
                        line-height: 40px;
                    }
                } 
            }
            
        }

        .automationBtn{
            width: 680px;
            height: 96px;
            margin: 44px auto 54px;
            background-color: #e56a61;
            color: #fff;
            text-align: center;
            font-size: 36px;
            line-height: 96px;
            border-radius: 4px;
        }

        .showBtn{
            width: 94px;
            height: 220px;
            position: fixed;
            right: 0;
            top: 360px;
        }

        .showBox{
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.7);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;

            .show-title{
                font-size: 36px;
                color: #fff;
                text-align: center;
                margin-top: 100px;
                font-weight: bold;
            }

            .show-content{
                width: 100%;
                height: 750px;
                margin-top: 30px;
                position: relative;
                overflow: hidden;
                
                &>img{
                    width: 15px;
                    position: absolute;
                    top: 361px;
                }

                &>img:first-of-type{
                    left: 64px;
                }

                &>img:last-of-type{
                    right: 64px;
                }

                .show-img-box{
                    width: 467px;
                    height: 747px;
                    background-color: #000;
                    margin: 2px auto 0;
                    overflow: hidden;
                    position: relative;

                    .show-img-list{
                        width: 900%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        
                        img{
                            width: 467px;
                            height: 100%;
                        }
                    }
                }
            }

            .showCloseBtn{
                width: 74px;
                display: block;
                margin: 45px auto 0;
            }
        }

    }
</style>
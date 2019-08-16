<!-- 微信营销 -->
<template>
    <div class="automation-box" @click="$store.state.menuShow = false;">
        <div class="automation-box-title">
            <div class="shu"></div>
            <p>微信营销</p>
        </div>

        <div class="automation-content">
            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">同步微信官方功能，更增加优化功能</p>
                    <p class="text">
                        • 绑定公众号后，即可进行微信编辑，操作便捷，界面友好<br>
                        • 支持微信群发、模板消息和互动客服消息主动下发，不受时间及次数限制<br>
                        • 模板消息支持添加自定义字段<br>
                        • 支持快速测试，提升图文素材呈现效果
                    </p>
                    <img class="automationImg1" src="/static/img/automationWechatImg1.png" alt="" >
                </div>
            </div>
            
            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">粉丝库标签化管理，提升互动粉丝转化</p>
                    <p class="text">
                        • 粉丝多维度筛选，可结合CRM字段快速筛选目标人群，并打上标签<br>
                        • 全部粉丝、互动粉丝、取关粉丝列表，清晰呈现，一目了然<br>
                        • 对48小时互动粉丝快速响应，提升转化<br>
                        • 对于取关粉丝，尝试其他渠道的挽回策略
                    </p>
                    <img class="automationImg2" src="/static/img/automationWechatImg2.png" alt="" >
                </div>
            </div>

            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">可视化报告，与其他渠道联动绩效更佳</p>
                    <p class="text">
                        • 直观查看微信活跃情况、转发次数、最热图文等<br>
                        • 结合营销旅程，让微信下发与短信、邮件渠道互补，最大化营销效果<br>
                        • 通过标准API对接CRM系统或其他营销渠道，综合评估微信渠道对销售转化的影响
                    </p>
                    <img class="automationImg3" src="/static/img/automationWechatImg3.png" alt="" >
                </div>
            </div>
        </div>

        <router-link to="/form">
            <div class="automationBtn" @click="$store.state.fromLink = '微信营销页'">免费试用</div>
        </router-link>

    </div>
    
</template>

<script>
export default {
    name: '',
    data () {
        return {

        };
    },

}
</script>
<style lang='scss' scoped>
    .automation-box{
        width: 100%;
        margin-top: 140px;
        background-color: #fff;
        overflow: hidden;
        // padding-bottom: 44px;

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

                    .title{
                        font-size: 30px;
                        color: #000;
                        font-weight: bold;
                    }

                    .text{
                        margin-top: 10px;
                        color: #666666;
                        font-size: 24px;
                        line-height: 40px;
                    }

                    img{
                        display: block;
                        margin: 80px auto 0;
                    }
                    
                    .automationImg1{
                        width: 267px;
                    }

                    .automationImg2{
                        width: 183px;
                    }

                    .automationImg3{
                        width: 232px;
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

    }
</style>
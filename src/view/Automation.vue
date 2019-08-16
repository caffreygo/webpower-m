<!-- 营销自动化 -->
<template>
    <div class="automation-box" @click="$store.state.menuShow = false;">
        <div class="automation-box-title">
            <div class="shu"></div>
            <p>营销自动化</p>
        </div>

        <div class="automation-content">
            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">全渠道用户生命周期规划</p>
                    <p class="text">
                        • 微信、邮件、短信、官网、H5落地页等全渠道用户生命周期规划建议（新用户培育、复购用户再营销、沉睡用户激活等）<br>
                        • 内置多套行业生命周期模板样例， 自由拖拽组合编辑<br>
                        • 营销日程上设定的生命周期活动，对增量用户可不断重复营销旅程<br>
                        • 合理搭配最优沟通渠道，促进营销转化
                    </p>
                    <img class="automationImg1" src="/static/img/automationImg1.png" alt="" >
                </div>
            </div>
            
            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">多渠道联动，优选高效渠道</p>
                    <p class="text">
                        • 微信、邮件、短信、H5落地页等内容素材统一管理<br>
                        • 按照用户在不同渠道上的打开、点击、浏览等行为，对渠道进行活跃度评级<br>
                        • 系统自动筛选最优渠道，发送内容给对应的目标用户
                    </p>
                    <img class="automationImg2" src="/static/img/automationImg2.png" alt="" >
                </div>
            </div>

            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">多条件触发，轻松策划营销活动</p>
                    <p class="text">
                        • 支持API对接，可将任一第三方程序中指定的数据源接入平台，实时更新<br>
                        • 根据营销日程，预设好用户行为、时间、事件等触发条件，省时省力
                    </p>
                    <img class="automationImg3" src="/static/img/automationImg3.png" alt="" >
                </div>
            </div>

             <div class="content-area-box">
                <div class="content-area">
                    <p class="title">多种智能推荐算法，推送内容千人千面</p>
                    <p class="text">
                        • 数据量小，想要快速启动<br>
                        – 使用基于内容的推荐机制，即根据以往的喜好推荐相似物品<br>
                        – 技术门槛低，易于实施<br>
                        • 大量用户，且行为数据丰富<br>
                        – 按需设置维度的权重比，找到与目标用户相似度高的用户群体<br>
                        – 根据社群的共性，为目标用户推荐最可能感兴趣的商品或内容<br>
                        – 充分挖掘了用户间潜在的关联性，推荐更精准
                    </p>
                    <img class="automationImg4" src="/static/img/automationImg4.png" alt="" >
                </div>
            </div>
        </div>

        <router-link to="/form">
            <div class="automationBtn" @click="$store.state.fromLink = '营销自动化页'">开启自动化营销旅程</div>
        </router-link>

        <div class="automation-router">
            <router-link to="/dmartech/automation/email">
                <div class="link">
                    <img src="/static/img/automationImg5.png" alt="">
                    <p>邮件营销</p>
                    <p>强大的投递能力</p>
                </div>
            </router-link>
            
            <router-link to="/dmartech/automation/sms">
                <div class="link">
                    <img src="/static/img/automationImg6.png" alt="">
                    <p>短信营销</p>
                    <p>高速率高送达</p>
                </div>
            </router-link>
            
            <router-link to="/dmartech/automation/wechat">
                <div class="link">
                    <img src="/static/img/automationImg7.png" alt="">
                    <p>微信营销</p>
                    <p>比官方功能更强</p>
                </div>
            </router-link>
        </div>
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
            border-bottom: solid 2px #f5f5f5;
            overflow: hidden;
            

            .shu{
                width: 5px;
                height: 27px;
                border-radius: 2px;
                background-color: #efbd47;
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
                border-bottom: solid 2px #f5f5f5;

                .content-area{
                    padding: 50px 40px 186px;

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
                        width: 454px;
                    }

                    .automationImg2{
                        width: 285px;
                    }

                    .automationImg3{
                        width: 461px;
                    }

                    .automationImg4{
                        width: 375px;
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

        .automation-router{
            width: 100%;
            overflow: hidden;
            background-color: #f5f5f5;
            border-top: solid 20px #f5f5f5;
            a .link{
                float: left;
                width: 250px;
                height: 246px;
                background-color: #fff;

            
                img{
                    width: 40px;
                    display: block;
                    margin: 56px auto 0;
                }

                p{
                    text-align: center;
                }
                p:first-of-type{
                    font-size: 30px;
                    font-weight: bold;
                    margin-top: 20px;
                }
                p:last-of-type{
                    font-size: 24px;
                    color: #666666;
                    margin-top: 14px;
                }
            }

            a:nth-of-type(2) .link{
                width: 250px;
                border-right: solid #f5f5f5 2px;
                border-left: solid #f5f5f5 2px;
                box-sizing: border-box;
            }
        }
    }
</style>
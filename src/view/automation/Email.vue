<!-- 邮件营销 -->
<template>
    <div class="automation-box" @click="$store.state.menuShow = false;">
        <div class="automation-box-title">
            <div class="shu"></div>
            <p>邮件营销</p>
        </div>

        <div class="automation-content">
            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">强大的邮件投递能力</p>
                    <p class="text">
                        • 19级网易诚信联盟等级，尊享40W自由额度/天<br>
                        • 日邮件发送峰值高达27,121,853封/日<br>
                        • 全球范围内ISP覆盖数为148个<br>
                        • 专属IP通道，避免受其他发送方的质量影响
                    </p>
                    <img class="automationImg1" src="/static/img/automationEmilImg1.png" alt="" >
                </div>
            </div>
            
            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">优化发送策略，助力培育域名信誉等级</p>
                    <p class="text">
                        • 专业数据库梳理，过滤无效邮箱，降低软/硬退率<br>
                        • 数据分组策略性发送，有效提升域名信誉等级<br>
                        • 域名备案到国内外的ISP白名单中，确保用户安全和投递速度
                    </p>
                    <img class="automationImg2" src="/static/img/automationEmilImg2.png" alt="" >
                </div>
            </div>

            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">标准化模块，实现会员营销自动化精准化</p>
                    <p class="text">
                        • 通过SMTP、API对接，实现更便捷、更安全的数据传输与共享<br>
                        • 使用”触发器”，即可根据预先设定的触发条件自动发送邮件（或短信）<br>
                        • 平台自带的”过滤器”功能，可按照自身设定的条件对用户进行分组<br>
                        • “A/B Test”功能能同时设置多达4个邮件版本，基于用户反馈筛选出”最优”邮件，进行后续自动化发送
                    </p>
                    <img class="automationImg3" src="/static/img/automationEmilImg3.png" alt="" >
                </div>
            </div>

            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">多维度数据字段，不断完善用户分类</p>
                    <p class="text">
                        • 建立完善的用户电子档案（E-ID），创建多维数据字段，实时记录用户线上行为<br>
                        • 档案评分机制，有效区分用户活跃度，为后续策略性发送打下基础<br>
                        • 数据同步，将不同数据源进行整合，从而构建全方位的用户视角
                    </p>
                    <img class="automationImg4" src="/static/img/automationEmilImg4.png" alt="" >
                </div>
            </div>

            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">拖拽式编辑器，零基础制作专业邮件</p>
                    <p class="text">
                        • 丰富的基础区块库：内置多套行业模板样例，并可无限次自由组合使用<br>
                        • 快捷编辑预览窗：即看即所得，文字图片替换便捷<br>
                        • 自适应显示终端：无需进行额外邮件编译，即可自动匹配不同设备端的展示<br>
                        • 高级定制版本可选：根据企业自身特性，量身打造最合适的邮件编辑模板
                    </p>
                    <img class="automationImg5" src="/static/img/automationEmilImg5.png" alt="" >
                </div>
            </div>

            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">国际化标准报告，合理评估邮件绩效</p>
                    <p class="text">
                        • 通过国际权威S.A.M.E认证，严格按照国际化标准执行<br>
                        • 多维度实时反馈，提供全面、直观的营销活动分析报告<br>
                        • 埋设绩效转化点，评估邮件营销的商业效果，提升ROI
                    </p>
                    <img class="automationImg6" src="/static/img/automationEmilImg6.png" alt="" >
                </div>
            </div>
        </div>

        <router-link to="/form">
            <div class="automationBtn" @click="$store.state.fromLink = '邮件营销页'">免费试用</div>
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
                        width: 444px;
                    }

                    .automationImg3{
                        width: 282px;
                    }

                    .automationImg4{
                        width: 307px;
                    }

                    .automationImg5{
                        width: 316px;
                    }

                    .automationImg6{
                        width: 623px;
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
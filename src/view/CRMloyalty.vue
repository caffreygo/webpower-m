<!-- CRM忠诚度管理 -->
<template>
    <div class="crm-box" @click="$store.state.menuShow = false;">
        <div class="crm-box-title">
            <div class="shu"></div>
            <p>CRM忠诚度管理</p>
        </div>

        <div class="crm-content">
            <div class="crm-content-box">
                <p class="bigTitle">CRM成熟度诊断</p>
                <p class="bitText">Webpower的专业团队将通过对客户的品牌定位、目标受众、产品定位定价、营销模式（线上线下渠道覆盖情况）、CRM运营现状和痛点、近期营销规划等，深度分析后与客户沟通制定出优化的CRM规划及运营方案。</p>
                <ul class="crm-list">
                    <li v-for="(item, index) in crmList" :key="index">
                        <img :src="item.img" alt="" class="banner">
                        <div class="text-box">
                            <p class="title">{{item.title}}</p>
                            <p class="text">{{item.text}}</p>
                        </div>
                         <transition name="fade">
                            <div class="solution-box" v-show="item.showTF">
                                <p><pre>{{item.solutionText}}</pre></p>
                            </div>
                        </transition>
                        <img :src="item.showTF?'/static/img/crmjiantou2.png':'/static/img/crmjiantou1.png'" alt="" class="jiantou" @click="item.showTF = !item.showTF">
                    </li>
                </ul>
            </div>
        </div>
        
        <router-link to="/form">
            <div class="subBtn" @click="$store.state.fromLink = '用户忠诚度页'">预约CRM成熟度诊断</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            crmList:[
                {   
                    showTF: false,
                    img: '/static/img/crmImg1.png',
                    title: '模块一：全渠道数据整合（SCRM数据中心）',
                    text: '企业困境：数据信息孤岛、数据归属分散、数据导入导出、各终端销售数据收集管理难。',
                    solutionText: '解决方案：\n1.	统一进行数据管理：用户数据，消费数据，行为数据、售后数据、商品数据等；\n2.	统一管理营销内容发布：可以是微信、短信／彩信、邮件等渠道；\n3.	统一查看关键性报告：RFM模型数据，用户信息沟通渠道完整度，营销渠道喜好度。\n\n应用价值：一体化数据管理、内容管理、数据报告，沉淀数据资产，让大数据分析成为可能。\n\n！建立全渠道数据中心，将更有利于智能化会员营销部署。'
                },
                {   
                    showTF: false,
                    img: '/static/img/crmImg2.png',
                    title: '模块二：基于用户画像的单次营销活动',
                    text: '企业困境：对全量用户轰炸式群发营销沟通信息，低针对性，高骚扰度，营销绩效差强人意。',
                    solutionText: '解决方案：\n1.	按用户属性、兴趣、行为进行分群分组、标签化处理，构建用户画像；\n2.	结合企业经营实际，根据用户消费力水平、行为活跃度综合评估用户价值星级；\n3.	从产品属性来定义目标人群／或从活动性质剖析目标人群，针对性开展营销活动。\n\n应用价值：用户评级分类、用户积分体系、营销活动的精准投放。\n\n！借助SCRM工具，快速识别高价值用户，构建多维用户画像。'
                },
                {   
                    showTF: false,
                    img: '/static/img/crmImg3.png',
                    title: '模块三：基于用户生命周期的循环营销旅程',
                    text: '企业困境：大量潜在线索未有效转化、已有会员未有效盘活、沉睡用户激活困难。',
                    solutionText: '解决方案：\n1.    自定义漏斗分析，发现营销短板和潜在关键节点，针对性优化营销方案；\n2.    为不同人群、产品规划长期性策略：如新客户生命周期营销，产品生命周期营销；\n3.    为不同指标规划长期性策略：如复购率提升策略，沉睡用户激活策略，潜客转化策略。\n\n应用价值：全渠道客户生命周期营销，用户激活及转化，个性化营销活动。\n\n！搭配营销自动化工具，控制营销成本，提升运营效率。'
                },
                {
                    showTF: false,
                    img: '/static/img/crmImg4.png',
                    title: '模块四：基于大数据的全渠道营销',
                    text: '企业困境：无法为每个独立用户在关键节点传递个性化内容，最大化挖掘用户价值。',
                    solutionText: '解决方案：\n1.	全渠道行为追踪：搭建DMP数据管理平台统一监测，对用户行为进行全链路追踪；\n2.	用户即渠道：甄别用户中的KOL，用其影响力为企业带来流量，订单转化等；\n3.	精准投放：即根据产品找到最适宜投放人群／渠道，根据人群找到最适宜投放产品／渠道；\n4.	智能客服AI互动：升级用户的消费体验，提升售前转化率，售后满意度。\n\n应用价值：全渠道用户行为分析，用户KOL甄别及激励，智能投放及智能客服。'
                },
                {
                    showTF: false,
                    img: '/static/img/crmImg5.png',
                    title: '模块五：千人千面的智慧营销',
                    text: '企业困境：基于大量数据累积，如何向用户提供创新的、有预见性的个性化交互和服务体验？',
                    solutionText: '解决方案：\n1.	用户决定内容：通过智能算法，实现千人千面的营销内容推荐；\n2.	用户决定产品：通过深度学习，预测购买产品、购买概率等，进行自动化定期推荐。\n\n应用价值：千人千面的营销内容，产品销售预测。'
                }
            ],
        };
    },

}
</script>
<style lang='scss' scoped>

    .fade-enter-active, .fade-leave-active {
  transition: opacity 0s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
    .crm-box{
        width: 100%;
        margin-top: 140px;
        background-color: #fff;
        overflow: hidden;

        .crm-box-title{
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

        .crm-content{
            width: 100%;
            background-color: #fff;

            .crm-content-box{
                box-sizing: border-box;
                width: 100%;
                padding: 50px 36px;
                border-bottom: solid 2px #f5f5f5;

                .bigTitle{
                    font-size: 30px;
                    font-weight: bold;
                }

                .bitText{
                    margin-top: 20px;
                    font-size: 24px;
                    line-height: 36px;
                    color: #666666;
                }

                ul.crm-list{
                    width: 100%;
                    overflow-y: hidden;
                    padding: 5px 5px;
                    box-sizing: border-box;

                    li{
                        width: 100%;
                        margin-top: 50px;
                        box-shadow: 0px 0px 10px #eaeaea;
                        box-sizing: border-box;

                        .banner{
                            width: 100%;
                        }

                        .text-box{
                            border-bottom: solid 2px #f5f5f5;
                            .title{
                                width: 95%;
                                font-size: 30px;
                                font-weight: bold;
                                margin: 16px auto 20px;
                            }
                            .text{
                                width: 95%;
                                font-size: 24px;
                                color: #666666;
                                line-height: 36px;
                                padding-bottom: 26px;
                                margin: 0 auto; 
                            }
                        }

                        .solution-box{
                            width: 100%;
                            box-sizing: border-box;
                            padding: 30px 15px 50px 15px;
                            background-color: #f5f5f5;
                            transition: 0s all linear;

                            p{
                                line-height: 32px;
                                color: #666666;
                                font-size: 23px;

                                pre{
                                    white-space: pre-wrap;
                                }
                            }
                        }
                        
                        .jiantou{
                            width: 600px;
                            display: block;
                            padding: 38px 0 28px 0;
                            margin: 0 auto;
                        }
                    }
                }
            }
        }

        .subBtn{
            width: 668px;
            height: 96px;
            background-color: #61bde5;
            text-align: center;
            font-size: 36px;
            color: #fff;
            line-height: 96px;
            margin: 50px auto;
            border-radius: 4px;
        }
    }
</style>
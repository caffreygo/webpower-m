<!-- 全渠道数据中心 -->
<template>
    <div class="datacenter-box" @click="$store.state.menuShow = false;">
        <div class="datacenter-box-title">
            <div class="shu"></div>
            <p>全渠道数据中心</p>
        </div>
        <div class="datacenter-content">
            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">全渠道数据连接，解决企业信息孤岛难题</p>
                    <p class="text">
                        • 标准的API数据接口，轻松接入第三方平台的指定数据源，打破渠道数据壁垒<br>
                        • 整合用户数据、消费数据、行为数据、售后数据、商品数据等， 标准化数据格式，线上线下数据同步共享，沉淀数据资产<br>
                        • 全网识别用户身份，定位多渠道同一用户，让深度数据挖掘和大数据分析成为可能
                    </p>
                    <img class="datacenterImg1" src="/static/img/datacenterImg1.png" alt="" >
                </div>
            </div>
            
            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">利用营销活动，完善数据仓</p>
                    <p class="text">
                        • 通过定制营销活动，完善用户字段（手机号，微信号，邮箱等）<br>
                        • 多渠道营销数据反馈，同步更新至数据仓，不断丰富用户字段
                    </p>
                    <img class="datacenterImg2" src="/static/img/datacenterImg2.png" alt="" >
                </div>
            </div>

            <div class="content-area-box">
                <div class="content-area">
                    <p class="title">智能用户细分，识别高价值用户，构建多维画像</p>
                    <p class="text">
                        • 基于消费力、活跃度等维度自定义用户评级规则<br>
                        • 基于RFM模型，动态显示系统预设的11个细分用户群组<br>
                        • 属性标签+动态行为标签，全面丰富用户画像<br>
                        • 动态定位目标营销客群，随时发起一次精准营销活动
                    </p>
                    <img class="datacenterImg3" src="/static/img/datacenterImg3.png" alt="" >
                </div>
            </div>

             <div class="content-area-box">
                <div class="content-area">
                    <p class="title">BI多维数据分析，助力企业营销决策</p>
                    <p class="text">
                        • 用户分析：增长趋势、渠道偏好、消费偏好等<br>
                        • 订单分析：渠道影响、热销商品、客单价等<br>
                        • 渠道分析：发送趋势、转化漏斗、活跃用户等<br>
                        • 支持多个营销活动对比分析，活动绩效一目了然<br>
                        • 多维度自定义交叉分析，形成对业务有意义的营销洞察
                    </p>
                    <img class="datacenterImg4" src="/static/img/datacenterImg4.png" alt="" >
                </div>
            </div>
        </div>

        <router-link to="/form">
            <div class="datacenterBtn" @click="$store.state.fromLink = 'data center页'">立即建立你的数据中心</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'datacenter-box',
    data () {
        return {
        };
    },
    
}
</script>
<style lang='scss' scoped>
    .datacenter-box{
        width: 100%;
        margin-top: 140px;
        background-color: #fff;
        overflow: hidden;
        // padding-bottom: 44px;

        .datacenter-box-title{
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
        
        .datacenter-content{

            .content-area-box{
                width: 100%;
                border-bottom: solid 2px #f5f5f5;

                .content-area{
                    padding: 50px 40px;

                    .title{
                        font-size: 30px;
                        color: #000;
                        font-weight: bold;
                    }

                    .text{
                        margin-top: 10px;
                        color: #666666;
                        font-size: 24px;
                        line-height: 38px;
                    }

                    img{
                        display: block;
                        margin: 80px auto 0;
                    }
                    
                    .datacenterImg1{
                        width: 319px;
                    }

                    .datacenterImg2{
                        width: 638px;
                    }

                    .datacenterImg3{
                        width: 653px;
                    }

                    .datacenterImg4{
                        width: 623px;
                    }
                } 
            }
            
        }

        .datacenterBtn{
            width: 680px;
            height: 96px;
            margin: 44px auto 54px;
            background-color: #efbd47;
            color: #fff;
            text-align: center;
            font-size: 36px;
            line-height: 96px;
            border-radius: 4px;
        }
    }
</style>
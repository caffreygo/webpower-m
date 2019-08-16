<!-- 智慧营销列表 -->
<template>
    <div class="dmartech-box">
        <div class="dmartech-box-title">
            <div class="shu"></div>
            <p>DMARTECH智慧营销</p>
        </div>
        <ul class="dmartech-list">
            <router-link :to="item.routerLink" v-for="(item, index) in dmartechList" :key="index">
                <li class="datacenter">
                    <img class="logo" :src="item.logoSrc" alt="">
                    <div class="dmartech-list-text">
                        <p>{{item.text1}}</p>
                        <p>{{item.text2}}<br>{{item.text21}}</p>
                    </div>
                    <img class="jianTou" :src="item.jiantouSrc" alt="">
                </li>
            </router-link>
        </ul>
        <router-link to="form">
            <div class="applyBtn" @click="$store.state.fromLink = '官网申请试用'">申请试用</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'dmartech-box',
    data () {
        return {
            dmartechList:[
                {
                    logoSrc: '/static/img/datacenter.png',
                    text1: '全渠道数据中心',
                    text2: '从数据整合、用户洞察到营销决策',
                    text21: '助力企业汇聚数据能量，变现数据资产',
                    jiantouSrc: '/static/img/gray_arrow.png',
                    routerLink: '/dmartech/datacenter'
                },
                {
                    logoSrc: '/static/img/automation.png',
                    text1: '营销自动化',
                    text2: '高效的多渠道营销工具',
                    text21: '管控营销成本，优化运营效率',
                    jiantouSrc: '/static/img/gray_arrow.png',
                    routerLink: '/dmartech/automation'
                },
                {
                    logoSrc: '/static/img/social.png',
                    text1: '社会化营销',
                    text2: '多样的社会化营销手段',
                    text21: '场景式发酵，共鸣式营销，引爆品牌热点',
                    jiantouSrc: '/static/img/gray_arrow.png',
                    routerLink: '/dmartech/Social'
                },
                {
                    logoSrc: '/static/img/crm.png',
                    text1: 'CRM忠诚度管理',
                    text2: '建立智能化会员营销体系',
                    text21: '提升用户粘性及复购率',
                    jiantouSrc: '/static/img/gray_arrow.png',
                    routerLink: '/dmartech/crm'
                },
                {
                    logoSrc: '/static/img/service.png',
                    text1: '定制服务',
                    text2: '迅速响应',
                    text21: '满足客户个性化需求',
                    jiantouSrc: '/static/img/gray_arrow.png',
                    routerLink: '/dmartech/service'
                }
            ]
        };
    },

}
</script>
<style lang='scss' scoped>
    .dmartech-box{
        overflow: hidden;
        margin-top: 20px;
        background-color: #fff;

        .dmartech-box-title{
            width: 100%;
            height: 115px;
            border-bottom: solid 2px #f5f5f5;
            overflow: hidden;

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

        

        .dmartech-list{
            width: 100%;

            li{
                width: 100%;
                height: 216px;
                border-bottom: solid 2px #f5f5f5;

                .logo{
                    margin-left: 76px;
                    float: left;
                }
                .dmartech-list-text{
                    width: 460px;
                    height: 120px;
                    float: left;
                    margin-top: 48px;
                    margin-left: 50px;

                    p:first-child{
                        font-size: 30px;
                        font-weight: bold;
                    }
                    p:last-child{
                        margin-top: 18px;
                        font-size: 24px;
                        line-height: 38px;
                    }
                }
                .jianTou{
                    width: 15px;
                    height: 28px;
                    float: right;
                    margin-top: 94px;
                    margin-right: 53px;
                }
            }

            .datacenter{
                .logo{
                    width: 95px;
                    height: 120px;
                    margin-top: 48px;
                }
            }
        }

        .applyBtn{
            margin: 50px auto 50px;
            width: 668px;
            height: 100px;
            background-color: #7e35c4;
            border-radius: 4px;
            font-size: 44px;
            color: #fff;
            text-align: center;
            line-height: 100px;
        }
    }
    
</style>
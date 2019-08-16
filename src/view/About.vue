<!-- 公司介绍 -->
<template>
    <div class="about-box" @click="$store.state.menuShow = false;">
        <div class="about-box-title">
            <div class="shu"></div>
            <p>公司介绍</p>
        </div>
        <div class="about-introduce-box">
            <div class="about-introduce">
                <video poster="/static/img/aboutVideo.png" controls="controls" src="http://www.webpowerchina.com/wp-content/themes/wp-site/assets/video/abc.mp4" class="aboutMP4"></video>
                <p>Webpower于1999年在荷兰成立，2006年进入中国，目前已在全球各地设有11个分支机构。</p>
                <p>作为全渠道智能化会员营销服务商，Webpower在中国扎根发展的十余年里，始终关注企业的多维营销需求，不断输出各种创新、前沿、实效的营销产品及服务。2018年，Webpower推出”智慧营销”体系，为企业打造从全渠道数据连接、营销自动化、多维数据分析到场景应用及定制开发的营销闭环。</p>
                <p>Webpower现已为零售、IT、旅游、航空、会展、金融等10大行业提供专业营销服务，其中包括：星巴克、SONY、沃尔玛、GIVENCHY、人头马、华为、联想、Disney、东方航空、星展银行、太平洋保险等全球知名的企业。</p>
                <p>秉承”智慧营销”的理念，Webpower的目标是：以技术驱动营销，为企业深度挖掘会员价值，帮助企业打造”智慧营销”图谱，无限延伸会员营销想象力。</p>
            </div>
        </div>
        <div id="memorabilia"></div>
        <div class="about-box-title" >
            <div class="shu"></div>
            <p>大事记</p>
        </div>
        <div class="about-stories-box">
            <div class="about-stories" v-for="(item, index) in storiesArr" :key="index">
                <img :src="item.img" alt="">
                <ul class="text">
                    <li v-html="item.texts"></li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: '',
    data () {
        return {
            storiesArr:[
                {
                    img: '/static/img/about2018.png',
                    texts: '• 推出”智慧营销”体系，发布全新智慧营销平台'
                },
                {
                    img: '/static/img/about2017.png',
                    texts: '• 营销自动化产品Journey全线升级<br>• 西安分公司成立<br>• 荣获梅花网“最佳营销产品创新奖”金奖 & “最佳互动体验营销创新奖”铜奖'
                },
                {
                    img: '/static/img/about2016.png',
                    texts: '• 广州分公司成立<br>• 荣获“中国电子商务百强企业<br>• 荣获梅花网”最佳大数据营销创新奖”银奖，及荷比卢工商协会”年度最佳团队奖'
                },
                {
                    img: '/static/img/about2014.png',
                    texts: '• 率先提出营销自动化理念，同步推出智能化营销产品<br>• 深圳分公司成立'
                },
                {
                    img: '/static/img/about2012.png',
                    texts: '• 发布首个针对中国邮件营销市场的专业数据调研分析报告<br>• 荣获”最佳个性化邮件营销服务商”及”最佳邮件营销服务机构'
                },
                {
                    img: '/static/img/about2010.png',
                    texts: '• 北京分公司成立<br>• 荣获“中国电子商务软件十强”及“中国电子商务百强企业'
                },
                {
                    img: '/static/img/about2008.png',
                    texts: '• 成为中国互联网协会反垃圾邮件中心指定合作伙伴'
                },
                {
                    img: '/static/img/about2006.png',
                    texts: '• 进入中国，率先推出本土化服务理念，抢占市场鳌头'
                }
            ]
        };
    },

}
</script>
<style lang='scss' scoped>
    .about-box{
        width: 100%;
        margin-top: 140px;
        background-color: #fff;
        overflow: hidden;
        // padding-bottom: 44px;

        .about-box-title{
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

        .about-introduce-box{
            width: 100%;
            

            .about-introduce{
                width: 100%;
                box-sizing: border-box;
                padding: 36px;
                padding-bottom: 0;

                .aboutMP4{
                    width: 100%;
                    height: 512px;
                }

                p{
                    font-size: 24px;
                    color: #666666;
                    line-height: 38px;
                    margin-top: 50px;
                }
            }
        }

        #memorabilia{
            width: 100%;
            height: 120px;
            box-sizing: border-box;
            background-color: #fff;
            border-bottom: solid 40px #f5f5f5;
        }
        .about-stories-box{
            width: 100%;
            // margin-top: 40px;

            .about-stories{
                box-sizing: border-box;
                width: 100%;
                height: 218px;
                // background-color: pink;
                border-top: solid 2px #f5f5f5;
                padding: 30px 50px 30px 80px;

                img{
                    width: 84px;
                    height: 111px;
                    float: left;
                    margin-top: 23.5px;
                }

                ul.text{
                    width: 500px;
                    float: right;
                    height: 100%;
                    display: table;

                    li{
                        width: 100%;
                        display: table-cell;
                        vertical-align: middle;
                        width: 100%;
                        font-size: 24px;
                        color: #666666;
                        line-height: 40px;
                    }
                }
            }
            .about-stories:nth-of-type(1){
                border-top: none;
            }
        }
    }
</style>
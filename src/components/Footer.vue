<!-- 脚部 -->
<template>
    <div class="footer-box"  @click="$store.state.menuShow = false;" ref="abc">
        <router-link to="/">
            <img src="/static/img/logoFooter.png" alt="" class="logo">
        </router-link>
        <div class="footer-text">
            <p>您将定期获得</p>
            <p>数字营销领域行业资讯、营销案例、报告白皮书等相关内容</p>
        </div>
        <div class="email-box">
            <div class="email-input">
                <input type="text" placeholder="请填写您的邮箱地址" v-model="email">
            </div>
            <div class="email-btn" @click="emailCheck">订阅期刊</div>
            <p v-show="$store.state.footerEmail">邮箱地址格式有误</p>
        </div>
        <div class="ICP-box">
            <p>沪ICP备10215775号</p>
            <p>沪公网安备 31010802001517号</p>
            <p>Copyright © 1999-2018 Webpower all rights reserved.</p>
        </div>
    </div>
</template>

<script>
import Qs from 'qs'
export default {
    name: 'footer-box',
    data () {
        return {
            email: '',
            emailTF: true
        };
    },
    methods:{
        emailCheck:function(){
            let re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
            if(re.test(this.email) && this.emailTF){
                this.emailTF = false;
                this.$ajax({
                    method: 'post',
                    url: '/contact-form-7/v1/contact-forms/9055/feedback',
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: [function (data) {
                        data = Qs.stringify(data);
                        return data;
                    }],
                    data: {
                        _wpcf7: '9055',
                        _wpcf7_container_post: '0',
                        _wpcf7_locale: 'zh_CN',
                        _wpcf7_unit_tag: 'wpcf7-9055-o1',
                        _wpcf7_version: '5.0.3',
                        'your-email': this.email
                    }
                }).then(res => {
                    this.$store.state.emailText = this.email;
                    if(res.data.status == 'mail_sent'){
                        this.$store.state.subSucc = true;
                    }else if(res.data.status == 'validation_failed'){
                        this.$store.state.subFail = true;
                    }
                    this.emailTF = true;
                }).catch(err => {
                    // this.$store.state.subFail = true;
                    this.emailTF = true;
                })
                this.$store.state.footerEmail = false;
            }else{
                this.$store.state.footerEmail = true;
            }
        }
    }
}
</script>
<style lang='scss' scoped>
    .footer-box{
        width: 100%;
        height: 500px;
        background-color: #333333;
        overflow: hidden;
        margin-top: 20px;

        .logo{
            width: 248px;
            height: 52px;
            display: block;
            margin: 40px auto 0;
        }
        
        .footer-text{
            color: #fff;
            font-size: 24px;
            margin-top: 44px;

            p{
                text-align: center;
                line-height: 38px;
            }
        }
        
        .email-box{
            width: 668px;
            height: 125px;
            margin: 28px auto 0;
            overflow: hidden;

            .email-input{
                width: 505px;
                height: 86px;
                float: left;
                background-color: #fff;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;

                input{
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    font-size: 30px;
                    text-indent: 20px;
                    color: #999999;
                    outline: none;
                    border: none;
                }
            }

            .email-btn{
                width: 163px;
                height: 86px;
                float: left;
                background-color: #a669d6;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
                text-align: center;
                font-size: 30px;
                color: #fff;
                line-height: 86px;
            }

            p{
                float: left;
                margin-top: 8px;
                font-size: 20px;
                color: #ff9245;
                text-indent: 5px;
            }
        }

        .ICP-box{
            color: #999999;
            font-size: 14px;
            margin-top: 20px;

            p{
                text-align: center;
                line-height: 30px;
            }
        }
    }
</style>
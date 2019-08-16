<!-- 提交表单 -->
<template>
    <div class="form-box">
        <div class="form-box-title">
            <div class="shu"></div>
            <p>提交申请</p>
        </div>
        <div class="form-area">
            <div class="company inputs">
                <input type="text" placeholder="请填写您的公司" v-model="companyText" @blur="companyBlur">
            </div>
            <p v-show="companyErr">请填写公司名称</p>

            <div class="name inputs">
                <input type="text" placeholder="请填写您的姓名" v-model="nameText" @blur="nameBlur">
            </div>
            <p v-show="nameErr">请填写姓名</p>

            <div class="mail inputs">
                <input type="text" placeholder="请填写您的邮箱" v-model="mailText" @blur="mailBlur">
            </div>
            <p v-show="mailErr">{{mailTF}}</p>

            <div class="phone inputs">
                <input type="text" placeholder="请填写您的手机号码" v-model="phoneText" @blur="phoneBlur">
            </div>
            <p v-show="phoneErr">{{phoneTF}}</p>

            <div class="pin inputs">
                <input type="text" placeholder="请填写手机验证码" v-model="pinText" @blur="pinBlur">
                <div class="pinBtn" :class="{sendOver: pinSendTF}" @click="pinSend">{{pinTetx}}</div>
            </div>
            <p v-show="pinErr">{{pinTF}}</p>
        </div>
        <div class="subForm" @click="subAjax">提&nbsp;&nbsp;交</div>
    </div>
</template>

<script>
    import Qs from 'qs'
    export default {
        name: 'form-box',
        data () {
            return {
                companyText: '',
                nameText: '',
                mailText: '',
                phoneText: '',
                pinText: '',
                companyErr: false,
                nameErr: false,
                mailErr: false,
                phoneErr: false,
                pinErr: false,
                mailTF: '',
                phoneTF: '',
                pinTF:'',
                pinSendTF: false,
                pinTetx: '获取验证码',
            };
        },
        methods:{
            companyBlur(){
                if(this.companyText == ''){
                    this.companyErr = true;
                }else{
                    this.companyErr = false;
                }
            },
            nameBlur(){
                if(this.nameText == ''){
                    this.nameErr = true;
                }else{
                    this.nameErr = false;
                }
            },
            mailBlur(){
                if(this.mailText == ''){
                    this.mailTF = '请填写邮箱地址';
                    this.mailErr = true;
                }else{
                    let reg = new RegExp(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/);
                    
                    if(reg.test(this.mailText)){
                        this.mailErr = false;
                    }else{
                        this.mailTF = '邮箱格式不正确';
                        this.mailErr = true;
                    }
                    
                }
            },
            phoneBlur(){
                if(this.phoneText == ''){
                    this.phoneTF = '请填写手机号';
                    this.phoneErr = true;
                }else{
                    let reg = new RegExp(/^((1[3,4,5,7,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/);
                    if(reg.test(this.phoneText)){
                        
                        this.phoneErr = false;
                    }else{
                        this.phoneTF = '手机号格式不正确';
                        this.phoneErr = true;
                    }
                    
                }
            },
            pinBlur(){
                if(this.pinText == ''){
                    this.pinTF = '请填写验证码';
                    this.pinErr = true;
                }else{
                    this.pinErr = false;
                }
            },
            pinSend(){
                if(this.phoneText == ''){
                    this.phoneTF = '请填写手机号';
                    this.phoneErr = true;
                }else{
                    let reg = new RegExp(/^((1[3,4,5,7,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/);
                    if(reg.test(this.phoneText)){
                        this.phoneErr = false;

                        if(!this.pinSendTF){
                            this.pinSendTF = true;
                            let times = 59;
                            this.pinTetx = '剩余59秒';
                            let timer = setInterval(()=>{
                                if(times == 1){
                                    clearInterval(timer);
                                    this.pinTetx = '获取验证码';
                                    this.pinSendTF = false;
                                    return;
                                }
                                times--;
                                this.pinTetx = '剩余' + times + '秒'
                            },1000)

                            //验证码ajax
                            this.$ajax({
                                method: 'get',
                                url: '/sms/v1/send',
                                params: {
                                    tel: this.phoneText
                                },
                            }).then(res => {

                            }).catch(err => {

                            })
                        }
                    }else{
                        this.phoneTF = '手机号格式不正确';
                        this.phoneErr = true;
                    }
                    
                }

                
            },
            subAjax(){
                this.companyBlur();
                this.nameBlur();
                this.mailBlur();
                this.phoneBlur();
                this.pinBlur();
                if(!this.companyErr && !this.nameErr && !this.mailerr && !this.phoneErr && !this.pinErr){
                    this.$store.state.loading = true;
                    this.$ajax({
                        method: 'post',
                        url: '/contact-form-7/v1/contact-forms/90/feedback',
                        headers:{
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        transformRequest: [function (data) {
                            data = Qs.stringify(data);
                            return data;
                        }],
                        data: {
                            _wpcf7: '90',
                            _wpcf7_container_post: '0',
                            _wpcf7_locale: 'zh_CN',
                            _wpcf7_unit_tag: 'wpcf7-f90-o1',
                            _wpcf7_version: '5.0.3',
                            'campaign': this.$store.state.fromLink,
                            'sms-code': this.pinText,
                            'your-companyName': this.companyText,
                            'your-email': this.mailText,
                            'your-name': this.nameText,
                            'your-tel': this.phoneText
                        }
                    }).then(res => {
                        this.$store.state.loading = false;
                        if(res.data.status == 'mail_sent'){
                            this.$store.state.formsubSucc = true;
                        }else if(res.data.status == 'validation_failed'){
                            for(let i = 0; i < res.data.invalidFields.length; i++){
                                let text =  res.data.invalidFields[i].into.split('.');
                                switch(text[text.length-1]){
                                    case 'campaign':

                                        break;
                                    case 'sms-code':
                                        this.pinTF = '验证码不正确';
                                        this.pinErr = true;
                                        break;
                                    case 'your-companyName':

                                        break;
                                    case 'your-email':
                                        this.mailTF = '邮箱格式不正确';
                                        this.mailErr = true;
                                        break;
                                    case 'your-name':

                                        break;
                                    case 'your-tel':
                                        this.phoneTF = '手机号格式不正确';
                                        this.phoneErr = true;
                                        break;
                                }
                            }
                        }
                    }).catch(err => {
                        this.$store.state.formsubFail = true;
                    })
                }
            }
        },
        mounted:function(){

        }
    }
</script>
<style lang='scss' scoped>
    .form-box{
        width: 100%;
        margin-top: 140px;
        background-color: #fff;
        padding-bottom: 44px;

        .form-box-title{
            width: 100%;
            height: 115px;
            border-bottom: solid 1px #f5f5f5;
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

        .form-area{
            width: 666px;
            margin: 50px auto 0;

            &>p{
                margin-top: 6px;
                font-size: 20px;
                color: #eb6100;
            }
            &>div.inputs{
                margin: 19px auto 0;
                width: 100%;
                height: 86px;
                background-color: #efefef;
                border-radius: 4px;
               

                input{
                    width: 100%;
                    height: 100%;
                    // background-color: transparent;
                    box-sizing: border-box;
                    font-size: 30px;
                    text-indent: 33px;
                    color: #999999;
                    background: none;  
                    outline: none;  
                    border: 0px;
                }
            }
            &>div.pin{
                width: 100%;

                input{
                    float: left;
                    width: 68%;
                }

                .pinBtn{
                    width: 32%;
                    height: 100%;
                    background-color: #333333;
                    color: #fff;
                    text-align: center;
                    line-height: 86px;
                    float: left;
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                    font-size: 30px;
                }
                .sendOver{
                    background-color: #a7a7a7;
                }
            }
        }

        .subForm{
            width: 666px;
            height: 96px;
            background-color: #7e35c4;
	        border-radius: 4px;
            font-size: 36px;
	        color: #fff;
            text-align: center;
            line-height: 96px;
            margin: 44px auto 0;
            box-sizing: border-box;
        }
    }
</style>
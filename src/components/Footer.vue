<!-- 脚部 -->
<template>
  <div class="footer-box" @click="$store.state.menuShow = false;" ref="abc">
    <router-link to="/">
      <img src="/static/img/logoFooter.png" alt class="logo" />
    </router-link>
    <div class="footer-text">
      <p>您将定期获得</p>
      <p>数字营销领域行业资讯、营销案例、报告白皮书等相关内容</p>
    </div>
    <div class="email-box">
      <div class="email-input">
        <input type="text" placeholder="请填写您的邮箱地址" v-model="email" />
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
import Qs from "qs";
export default {
  name: "footer-box",
  data() {
    return {
      email: "",
      emailTF: true,
      token: "",
      id: "",
      data: null
    };
  },
  methods: {
    emailCheck: function() {
      let re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      var _this = $(this);
      if (re.test(this.email) && this.emailTF) {
        _this.data = {
          contact: {
            email: this.email,
            lang: "zh"
          }
        };
        $.ajax({
          url: "http://m.webpowerchina.kooboo.site/user/subscribe",
          method: "get",
          success: function(res) {

            // add contact
            _this.token = JSON.parse(res).access_token
            $.ajax({
                url: "https://wpcn-enews.webpower.asia/admin/api/index.php/rest/212/contact/subscribe",
                method: 'post',
                data: JSON.stringify(_this.data),
                beforeSend: function(request) {
                  request.setRequestHeader("Authorization", "Bearer " + _this.token);
                },
                success: function(res) {
                  _this.$store.state.emailText = _this.email;
                  _this.$store.state.subSucc = true;
                  _this.emailTF = true;
                },
                fail: function(err) {
                  _this.emailTF = true;
                }
            })
          },
          fail: function(err) {
            console.error("can not get token");
          }
        });
        this.$store.state.footerEmail = false;
      } else {
        this.$store.state.footerEmail = true;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.footer-box {
  width: 100%;
  height: 500px;
  background-color: #333333;
  overflow: hidden;
  margin-top: 20px;

  .logo {
    width: 248px;
    height: 52px;
    display: block;
    margin: 40px auto 0;
  }

  .footer-text {
    color: #fff;
    font-size: 24px;
    margin-top: 44px;

    p {
      text-align: center;
      line-height: 38px;
    }
  }

  .email-box {
    width: 668px;
    height: 125px;
    margin: 28px auto 0;
    overflow: hidden;

    .email-input {
      width: 505px;
      height: 86px;
      float: left;
      background-color: #fff;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;

      input {
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

    .email-btn {
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

    p {
      float: left;
      margin-top: 8px;
      font-size: 20px;
      color: #ff9245;
      text-indent: 5px;
    }
  }

  .ICP-box {
    color: #999999;
    font-size: 14px;
    margin-top: 20px;

    p {
      text-align: center;
      line-height: 30px;
    }
  }
}
</style>
<!-- 文章详情 -->
<template>
  <div class="crm-box" @click="$store.state.menuShow = false;">
    <div class="crm-box-title">
      <p>{{title}}</p>
    </div>
    <div class="mainHTML" v-html="detail"></div>

    <router-link to="/form">
      <div class="subBtn" @click="$store.state.fromLink = '行业案例页'">定制您的专属营销方案</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        detail: '',
        title: ''
    };
  },
  mounted() {
    this.$ajax({
      method: "get",
      url: "http://www.webpowerchina.kooboo.site/api/textContents/get?slug=" + this.$route.query.slug
    }).then(res => {
        this.detail = res.data.article.detail;
        this.title = res.data.article.title;
    }).catch(err => {});
  }
};
</script>
<style lang='scss' scoped>
.crm-box {
  width: 100%;
  margin-top: 140px;
  background-color: #fff;
  overflow: hidden;

  .crm-box-title {
    width: 100%;
    // height: 115px;
    border-bottom: solid 2px #f5f5f5;
    overflow: hidden;

    .shu {
      width: 5px;
      height: 27px;
      border-radius: 2px;
      background-color: #2aad7b;
      margin: 44px 0 0 36px;
      float: left;
    }

    p {
      float: left;
      width: 656px;
      height: 100%;
      line-height: 50px;
      font-size: 30px;
      margin: 40px 40px;
    }
  }

  .mainHTML {
    box-sizing: border-box;
    width: 100%;
    padding: 25px 36px 70px;
    color: #666666;
    border-bottom: solid #f5f5f5 2px;

    & /deep/ * {
      font-family: "Microsoft Yahei", sans-serif;
    }
    & /deep/ p {
      margin-top: 40px;
      line-height: 40px;
    }

    & /deep/ img {
      display: block;
      margin: 40px auto;
      max-width: 80%;
    }
  }

  .subBtn {
    width: 668px;
    height: 96px;
    background-color: #7e35c4;
    text-align: center;
    font-size: 36px;
    color: #fff;
    line-height: 96px;
    margin: 50px auto;
    border-radius: 4px;
  }
}
</style>
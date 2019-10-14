<!-- 公司新闻 -->
<template>
  <div class="Social-box" @click="$store.state.menuShow = false;">
    <div class="Social-box-title">
      <div class="shu"></div>
      <p>公司新闻</p>
    </div>

    <div class="content-box">
      <div v-if="loading" class="loading-box"><img src="/static/img/loading.gif" alt=""></div>
      <ul v-else class="content-list" >
        <router-link :to="{ path: '/case/CaseContent', query: { slug: item.userKey }}"
          v-for="(item, index) in dataList" :key="index">
          <li>
            <img :src="pcUrl + item.img_src" alt="pic" />
            <p>{{item.title}}</p>
            <span>{{item.date}}</span>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      loading: true,
      pcUrl: "http://www.webpowerchina.com",
      dataList: []
    };
  },
  mounted() {
    this.$ajax.get('/news/get').then(res => {
      this.dataList = res.data;
      this.loading = false;
    }).catch(err => {});
  }
};
</script>
<style lang='scss' scoped>
.Social-box {
  width: 100%;
  margin-top: 140px;
  background-color: #fff;
  overflow: hidden;

  .Social-box-title {
    width: 100%;
    height: 115px;
    overflow: hidden;
    border: solid #f5f5f5 2px;

    .shu {
      width: 5px;
      height: 27px;
      border-radius: 2px;
      background-color: #7e35c4;
      margin: 44px 0 0 36px;
      float: left;
    }

    p {
      float: left;
      height: 100%;
      line-height: 115px;
      font-size: 30px;
      margin-left: 16px;
    }
  }

  .content-box {
    width: 100%;
    min-height: 600px;

    .loading-box {
      display: flex;
      height: 400px;
      align-items: center;
      justify-content: center;

      img {
        width: 64px;
        height: 64px;
      }
    }

    .content-list {
      width: 100%;

      li {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        height: 200px;
        border-bottom: solid 1px #f5f5f5;
        padding: 0 36px;

        img {
          width: 189px;
          height: 115px;
          float: left;
          margin: 42.5px 0 0;
        }

        p {
          float: left;
          width: 447px;
          margin-top: 50px;
          margin-left: 26px;
          font-size: 30px;
          line-height: 50px;
        }

        span {
          position: absolute;
          bottom: 0;
          right: 0;
          display: inline-block;
          width: 200px;
          text-align: center;
          background-color: #884cc0;
          opacity: 0.9;
          color: #fff;
          border-radius: 8px;
          padding: 6px;
          margin-right: 40px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
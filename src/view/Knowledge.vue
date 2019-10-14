<!-- 行业案例 -->
<template>
  <div class="Social-box" @click="$store.state.menuShow = false;">
    <div class="Social-box-title">
      <div class="shu"></div>
      <p>营销锦囊</p>
    </div>
    <div class="nav-box">
      <div class="list-box">
        <ul class="nav-list">
          <li
            v-for="(item, index) in navName"
            :key="index"
            :class="{active: navActive[index]}"
            @click="cheakOutNav(index)"
          >{{item.name}}</li>
        </ul>
      </div>

      <div class="head-tabcover"></div>
    </div>
    <div class="content-box">
      <div v-if="loading" class="loading-box"><img src="/static/img/loading.gif" alt=""></div>
      <ul  v-else class="content-list" >
        <router-link
          :to="{ path: '/case/CaseContent', query: { slug: item.userKey }}"
          v-for="(item, index) in dataList"
          :key="index"
        >
          <li>
            <img :src="pcUrl + item.img_src" alt />
            <p>{{item.title}}</p>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      loading: true,
      pcUrl: "http://www.webpowerchina.com",
      dataUrl: "/knowledges/get",
      navName: [
        {
          name: "全部",
          tags: 'all'

        },
        {
          name: "案例",
          tags: 'case'
        },
        {
          name: "观点",
          tags: 'point'
        }
      ],
      navActive: [1, 0, 0],
      dataList: []
    };
  },
  mounted () {
    this.getData('all');
  },
  methods: {
    getData (tag) {
      this.$ajax.get(this.dataUrl,{
          params: {
              tags: tag
          }
      })
      .then(res => {
        this.dataList = res.data;
        this.loading = false;
      })
      .catch(err => {});
    },
    cheakOutNav(index) {
      this.loading = true;
      this.navActive = [0, 0, 0];
      this.navActive[index] = 1;
      this.contentIndex = index;
      let tag = this.navName[index].tags;
      this.getData(tag)
    }
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

  .nav-box {
    width: 100%;
    border-bottom: solid 2px #f5f5f5;
    position: relative;

    .list-box {
      position: relative;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      position: relative;

      &::-webkit-scrollbar {
        display: none;
      }

      ul.nav-list {
        position: relative;
        overflow: hidden;
        padding-left: 36px;
        box-sizing: border-box;
        // overflow: hidden;
        height: 80px;
        line-height: 80px;
        width: 1100px;

        li {
          float: left;
          margin-right: 46px;
          height: 100%;
          box-sizing: border-box;
          padding: 0 5px;
          font-size: 28px;

          &:last-of-type {
            margin-right: 36px;
          }
        }

        .active {
          border-bottom: #7e35c4 solid 3px;
          color: #7e35c4;
        }
      }
    }

    .head-tabcover {
      position: absolute;
      top: 0;
      right: 0;
      width: 36px;
      height: 38px;
      background-image: -webkit-linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        #fff
      );
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #fff);
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
      }
    }
  }
}
</style>
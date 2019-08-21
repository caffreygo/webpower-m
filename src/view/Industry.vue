<!-- 行业案例 -->
<template>
    <div class="Social-box" @click="$store.state.menuShow = false;">
        <div class="Social-box-title">
            <div class="shu"></div>
            <p>行业案例</p>
        </div>
        <div class="nav-box">
            <div class="list-box">
                <ul class="nav-list">
                    <li  v-for="(item, index) in navName" :key="index" :class="{active: navActive[index]}" @click="cheakOutNav(index)">{{item.name}}</li>
                </ul>
            </div>
            
            <div class="head-tabcover"></div>
        </div>
        <div class="content-box">
            <ul class="content-list">
                <router-link :to= "{ path: '/case/CaseContent', query: { slug: item.slug }}" v-for="(item, index) in dataList" :key="index">
                    <li>
                        <img :src="pcUrl + item.img_src" alt="">
                        <p>{{item.title}}</p>
                    </li>
                </router-link>
            </ul>
            
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            pcUrl: 'http://www.webpowerchina.kooboo.site',
            dataUrl: '/wp-json/wp/v2/posts',
            navName: [
                {
                    name: '全部',
                },
                {
                    name: '会展',
                },
                {
                    name: '国内电商',
                },
                {
                    name: '跨境电商',
                },
                {
                    name: '教育',
                },
                {
                    name: '酒店旅游',
                },
                {
                    name: '零售'
                }
            ],
            navActive: [1,0,0,0,0,0,0],
            dataList: []
        };
    },
    mounted(){
        this.$ajax.get(this.dataUrl,{
            params: {
                order: 'desc',
                orderby: 'date',
                page: '1',
                per_page: '8',
                tags: '66,67,68,69,77,78'
            }
        }).then(res => {
            this.dataList = res.data;
        })
        .catch(err => {

        });
    },
    methods:{
        cheakOutNav(index){
            this.navActive = [0,0,0,0,0,0,0];
            this.navActive[index] = 1;
            this.contentIndex = index;

            switch(index){
                case 0:
                this.$ajax.get(this.dataUrl,{
                    params: {
                        order: 'desc',
                        orderby: 'date',
                        page: '1',
                        per_page: '8',
                        tags: '66,67,68,69,77,78'
                    }
                }).then(res => {
                    this.dataList = res.data;
                }).catch(err => {});
                break;
                case 1:
                    this.$ajax.get(this.dataUrl,{
                        params: {
                            order: 'desc',
                            orderby: 'date',
                            page: '1',
                            per_page: '8',
                            tags: '67'
                        }
                    }).then(res => {
                        this.dataList = res.data;
                    })
                    .catch(err => {

                    });
                    break;
                case 2:
                    this.$ajax.get(this.dataUrl,{
                        params: {
                            order: 'desc',
                            orderby: 'date',
                            page: '1',
                            per_page: '8',
                            tags: '77'
                        }
                    }).then(res => {
                        this.dataList = res.data;
                    })
                    .catch(err => {

                    });
                    break;
                case 3:
                    this.$ajax.get(this.dataUrl,{
                        params: {
                            order: 'desc',
                            orderby: 'date',
                            page: '1',
                            per_page: '8',
                            tags: '68'
                        }
                    }).then(res => {
                        this.dataList = res.data;
                    })
                    .catch(err => {

                    });
                    break;
                case 4:
                    this.$ajax.get(this.dataUrl,{
                        params: {
                            order: 'desc',
                            orderby: 'date',
                            page: '1',
                            per_page: '8',
                            tags: '78'
                        }
                    }).then(res => {
                        this.dataList = res.data;
                    })
                    .catch(err => {

                    });
                    break;
                case 5:
                    this.$ajax.get(this.dataUrl,{
                        params: {
                            order: 'desc',
                            orderby: 'date',
                            page: '1',
                            per_page: '8',
                            tags: '69'
                        }
                    }).then(res => {
                        this.dataList = res.data;
                    })
                    .catch(err => {

                    });
                    break;
                case 6:
                this.$ajax.get(this.dataUrl,{
                    params: {
                        order: 'desc',
                        orderby: 'date',
                        page: '1',
                        per_page: '8',
                        tags: '66'
                    }
                }).then(res => {
                    this.dataList = res.data;
                })
                .catch(err => {

                });
                break;
            }
        }
    }
}
</script>
<style lang='scss' scoped>
    .Social-box{
        width: 100%;
        margin-top: 140px;
        background-color: #fff;
        overflow: hidden;

        .Social-box-title{
            width: 100%;
            height: 115px;
            overflow: hidden;
            border: solid #f5f5f5 2px;
            

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

        


        .nav-box{
            width: 100%;
            border-bottom: solid 2px #f5f5f5;
            position: relative;
           

            .list-box{
                position: relative;
                overflow-x: scroll;
                -webkit-overflow-scrolling:touch;
                position: relative;

                &::-webkit-scrollbar {
                    display: none;
                }

                ul.nav-list{
                    position: relative;
                    overflow: hidden;
                    padding-left: 36px;
                    box-sizing: border-box;
                    // overflow: hidden;
                    height: 80px;
                    line-height: 80px;
                    width: 980px;

                    li{
                        float: left;
                        margin-right: 46px;
                        height: 100%;
                        box-sizing: border-box;
                        padding: 0 5px;
                        font-size: 28px;

                        &:last-of-type{
                            margin-right: 36px;
                        }
                    }


                    .active{
                        border-bottom: #7e35c4 solid 3px;
                        color: #7e35c4;
                    }
                }
            }
            

            .head-tabcover{
                position: absolute;
                top: 0;
                right: 0;
                width: 36px;
                height: 38px;
                background-image: -webkit-linear-gradient(to right,rgba(255,255,255,0),#fff);
                background-image: linear-gradient(to right,rgba(255,255,255,0),#fff);
            }
        }

        .content-box{
            width: 100%;
            min-height: 600px;

            .content-list{
                width: 100%;

                li{
                    width: 100%;
                    box-sizing: border-box;
                    height: 200px;
                    border-bottom: solid 1px #f5f5f5;
                    padding: 0 36px;

                    img{
                        width: 189px;
                        height: 115px;
                        float: left;
                        margin: 42.5px 0 0 
                    }

                    p{
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
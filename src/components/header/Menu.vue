<!-- 下拉菜单 -->
<template>
    <div class="menu-box" v-show="$store.state.menuShow" @click="$store.state.menuShow = false">
        <div class="menu-list" :class="{active: menuBGColor[index]}" v-for="(item, index) in menuData" :key="index" @click.stop="menuChange(index)">
            <div v-if="item.data.length > 1" class="menu-list-box">
                <span class="menu-bigTitle">{{item.name}}</span>
                <img :src="menuOpen[index]?'/static/img/upBtn.png':'/static/img/downBtn.png'" alt="" class="downImg">
            </div>
            <!-- 无下拉子项 -->
            <template v-else>
                <router-link :to="item.data[0].router">
                    <div class="menu-list-box" @click.stop="$store.state.menuShow = false;$store.state.linkText = item.data[0].name;">
                        <span class="menu-bigTitle">{{item.name}}</span>
                    </div>
                </router-link>
            </template>

            <div v-if="item.data.length > 1" class="menu-down-list-box" v-show="menuOpen[index]" >
                <router-link :to="downItem.router" v-for="(downItem, index) in item.data" :key="index">
                    <div class="menu-down-list" @click.stop="$store.state.menuShow = false;$store.state.linkText = downItem.name;">
                        <span class="menu-downTitle" >{{downItem.name}}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'menu-box',
    data () {
        return {
            menuData:[
                {
                    name: '智慧营销',
                    data:[
                        {
                            name: '全渠道数据中心',
                            router: '/dmartech/datacenter'
                        },
                        {
                            name: '营销自动化',
                            router: '/dmartech/automation'
                        },
                        {
                            name: '社会化营销',
                            router: '/dmartech/social'
                        },
                        {
                            name: 'CRM忠诚度管理',
                            router: '/dmartech/crm'
                        },
                        {
                            name: '定制服务',
                            router: '/dmartech/service'
                        }
                    ]
                },
                {
                    name: '客户案例',
                    data:[
                        {
                            name: '明星客户',
                            router: '/case/client'
                        },
                        {
                            name: '行业案例',
                            router: '/case/industry'
                        }
                    ]
                },
                {
                    name: '营销锦囊',
                    data:[
                        {
                            name: '营销锦囊',
                            router: '/knowledge'
                        }
                    ]
                },
                {
                    name: '关于我们',
                    data:[
                        {
                            name: '公司介绍',
                            router: '/about'
                        },
                        {
                            name: '大事记',
                            router: '/about#memorabilia'
                        },
                        {
                            name: '公司新闻',
                            router: '/about/news'
                        }
                    ]
                }
            ],
            menuOpen:[0,0,0,0],
            menuBGColor: [0,0,0,0]
        };
    },
    methods:{
        menuChange:function(index){
            if(this.menuOpen[index] == 1){
                this.menuOpen = [0,0,0,0];
                this.menuBGColor[index] = 0;
            }else if(this.menuOpen[index] == 0){
                this.menuOpen = [0,0,0,0];
                this.menuBGColor = [0,0,0,0];
                this.menuBGColor[index] = true;
                this.menuOpen[index] = 1;
            }
        }
    }
}
</script>
<style lang='scss' scoped>
    .menu-box{
        // position: absolute;
        z-index: 100;
        width: 100%;
        // box-shadow: 0px 1px 5px #bcbcbc;
        border-bottom: solid 1px #f5f5f5;
        overflow: hidden;
        background-color: rgba(0,0,0,0.5);
        height: 100vh;

        .menu-list{
            box-sizing: border-box;
            width: 100%;
            border-bottom: solid 1px #f5f5f5;
            background-color: #fff;
            transition: all .1s linear;

            .menu-list-box{
                width: 100%;
                height: 120px;
                

                .menu-bigTitle{
                    font-size: 30px;
                    line-height: 120px;
                    margin-left: 35px;
                }

                .downImg{
                    width: 28px;
                    height: 15px;
                    display: block;
                    float: right;
                    margin-top: 52.5px;
                    margin-right: 35px;
                }
            }
            

            .menu-down-list-box{
                padding: 18px 0;
                width: 100%;
                background-color: #fff;
                transition: all 3s linear;

                .menu-down-list{
                    width: 100%;
                    height: 100px;
                     transition: all 3s linear;
                    
                    .menu-downTitle{
                        font-size: 24px;
                        line-height: 95px;
                        margin-left: 58px;
                    }
                }
            }
        }
        .menu-list:last-child{
            border-bottom: none;
        }



        .active{
            background-color: #d9d9d9;
        }
    }
    
</style>
<!-- 头部导航 -->
<template>
    <div class="nav-box" :class="{border: $store.state.menuShow}">
        <router-link to="/">
            <img class="logo" src="/static/img/logo.png" alt="logo">
        </router-link>
        <div class="menuBtn" @click="$store.state.menuShow = !$store.state.menuShow;">
            <img :src="$store.state.menuShow?'/static/img/menuOpen.png':'/static/img/menu.png'" alt="">
        </div>
        <div class="phoneBtn" @click="$store.state.subDial = true;">
            <img src="/static/img/phone.png" alt="">
        </div>
        <router-link to="/form">
            <div class="subscribeBtn" @click="$store.state.menuShow = false; $store.state.fromLink = '官网申请试用'">
                <img src="/static/img/subscribe.png" alt="">
            </div>
        </router-link>
        
    </div>
</template>

<script>
export default {
    name: 'nav-box',
    data () {
        return {
            
        };
    },

}
</script>
<style lang='scss' scoped>
    
    .nav-box{
        width: 100%;
        height: 120px;
        background-color: #fff;
        // box-shadow: 0px 1px 5px #bcbcbc;
        border-bottom: solid 3px #f5f5f5;
    
    

        .logo{
            width: 291px;
            height: 59px;
            margin: 31.5px 0 0 46px;
        }

        .subscribeBtn, .phoneBtn, .menuBtn{
            float: right;
            width: 80px;
            height: 100%;
            overflow: hidden;
        }
        .subscribeBtn{
            background-color: #e7cdff;

            img{
                width: 28px;
                height: 38px;
                margin: 42px 0 0 26px;
            }
        }
        .phoneBtn{
            background-color: #d0a3fc;

            img{
                width: 28px;
                height: 38px;
                margin: 42px 0 0 26px;
            }
        }
        .menuBtn{
            width: 110px;
            background-color: #7e35c4;
            
            img{
                width: 45px; 
                height: 38px; 
                margin: 40.5px 0 0 32px;
            }
        }
    }
    .border{
        border-bottom: solid 3px #7e35c4;
    }
</style>
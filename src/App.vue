<template>
    <div id="app">
        <Header></Header>
        <!-- <Menu></Menu> -->
        <router-view/>
        <SubscribeSuccess></SubscribeSuccess>
        <SubscribeFail></SubscribeFail>
        <Dial></Dial>
        <Loading></Loading>
        <FormSubSucc></FormSubSucc>
        <FormSubSuccFail></FormSubSuccFail>
        <Footer @click="$store.state.menuShow = false;"></Footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import SubscribeSuccess from './components/SubscribeSuccess.vue'
    import SubscribeFail from './components/SubscribeFail.vue'
    import Dial from './components/Dial.vue'
    import Loading from './components//Loading'
    import FormSubSucc from './components/FormSubSucc'
    import FormSubSuccFail from './components/FormSubFail'

    export default {
        name: 'App',
        components:{
            Header,
            Footer,
            SubscribeSuccess,
            SubscribeFail,
            Dial,
            Loading,
            FormSubSucc,
            FormSubSuccFail
        }
    }
</script>

<style>
    #app{
        position: relative;
        background-color: #f5f5f5;
        overflow: hidden;
    }
</style>
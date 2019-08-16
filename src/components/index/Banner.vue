<!-- banner -->
<template>
<!-- :style="{left: bannerLeft+'%'}"  -->
    <div class="banner-box">
        <div class="banner-longBox"
            
            
            @touchstart.prevent="drag($event)"
        >
            <div class="banner">
                <a href="">
                    <img :src="imgsBanner[imgsBanner.length - 1].add" alt="">
                </a>
            </div>
            <div class="banner" v-for="(img, index) in imgsBanner" :key="index">
                <a href="">
                    <img :src="img.add" alt="">
                </a>
            </div>
            <div class="banner">
                <a href="">
                    <img :src="imgsBanner[0].add" alt="">
                </a>
            </div>
        </div>
        <div class="bannerIndex-box">
            <div v-for="(imgIndex, index) in imgsBanner.length" :key="index" :class="{active: imgIndexActive[index]}"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "banner-box",
    data() {
        return {
            bannerTimer: undefined,
            bannerLeft: -100,
            bannerIndex: 0,
            imgsBanner: [
                {
                    add: "/static/img/banner1.jpg"
                },
                {
                    add: "/static/img/banner2.jpg"
                },
                {
                    add: "/static/img/banner3.jpg"
                }
            ],
            imgIndexActive: [1,0,0],
            imgAnimateTF: true,
        };
    },
    methods:{
        bannerFn(){
            let _this = this;
            // console.log(this);
            this.bannerTimer = setInterval(function(){
                _this.bannerLeft-=100;
                _this.bannerIndex++;
                $('.banner-longBox').animate({
                    left: _this.bannerLeft + '%'
                }, 500,function(){
                    if(_this.bannerIndex == _this.imgsBanner.length){
                        _this.bannerIndex = 0;
                        
                        // //清除transition
                        // setTimeout(function(){
                        //     _this.imgTransition = false;
                        //     _this.bannerLeft = '0%';
                        //      setTimeout(function(){
                        //          _this.imgTransition = true;
                        //      },500)
                        // },1000)

                        $('.banner-longBox').css({
                            left: '-100%'
                        }); 
                        _this.bannerLeft = -100;
                    }

                    _this.imgIndexActive = [0,0,0];
                    _this.imgIndexActive[_this.bannerIndex] = 1;
                }); 

                
               
                
            },5000)
        },
        drag(event){       
            let _this = this;
            let leftPX = $('.banner-longBox').position().left;
            
            //摁下时的坐标
            let startX = event.touches[0].clientX;

            function touchmoveFn(ev){
                $('.banner-longBox').css({
                    left: leftPX - (startX - ev.touches[0].clientX)
                }) 
            }

            function touchendFn(e){
                if(startX - e.changedTouches[0].clientX >= 80 && startX - e.changedTouches[0].clientX > 0){
                     _this.bannerLeft-=100;
                    _this.bannerIndex++;

                    $('.banner-longBox').animate({
                        left: _this.bannerLeft + '%'
                    }, 300,function(){
                        if(_this.bannerIndex == _this.imgsBanner.length){
                            _this.bannerIndex = 0;
                            $('.banner-longBox').css({
                                left: '-100%'
                            }); 
                            _this.bannerLeft = -100;
                        }

                        _this.imgIndexActive = [0,0,0];
                        _this.imgIndexActive[_this.bannerIndex] = 1;
                        _this.imgAnimateTF = true;
                    }); 
                }else if(startX - e.changedTouches[0].clientX > 0){
                    $('.banner-longBox').animate({
                        left: _this.bannerLeft + '%'
                    }, 150,function(){
                        if(_this.bannerIndex == _this.imgsBanner.length){
                            _this.bannerIndex = 0;
                            $('.banner-longBox').css({
                                left: '-100%'
                            }); 
                            _this.bannerLeft = -100;
                        }
                        _this.imgAnimateTF = true;
                    }); 
                }

                if(startX - e.changedTouches[0].clientX <= 80 && startX - e.changedTouches[0].clientX < 0){
                    _this.bannerLeft+=100;
                    _this.bannerIndex--;

                    $('.banner-longBox').animate({
                        left: _this.bannerLeft + '%'
                    }, 300,function(){
                        if(_this.bannerIndex == -1){
                            _this.bannerIndex = 2;
                            $('.banner-longBox').css({
                                left: '-300%'
                            }); 
                            _this.bannerLeft = -300;
                        }

                        _this.imgIndexActive = [0,0,0];
                        _this.imgIndexActive[_this.bannerIndex] = 1;
                        _this.imgAnimateTF = true;
                    }); 
                }else if(startX - e.changedTouches[0].clientX < 0){
                    $('.banner-longBox').animate({
                        left: _this.bannerLeft + '%'
                    }, 150,function(){
                        if(_this.bannerIndex == -1){
                            _this.bannerIndex = 2;
                            $('.banner-longBox').css({
                                left: '-300%'
                            }); 
                            _this.bannerLeft = -300;
                        }
                        _this.imgAnimateTF = true;
                    }); 
                }



                //移除touchmove
                _this.$el.removeEventListener("touchmove",touchmoveFn,false);
                
                //移除touchend
                _this.$el.removeEventListener("touchend",touchendFn,false);

                _this.bannerFn();
            }


            if(this.imgAnimateTF){
                this.imgAnimateTF = false;
                clearInterval(this.bannerTimer);

                //touchmove
                this.$el.addEventListener("touchmove",touchmoveFn,false);
                
                //touchend
                this.$el.addEventListener("touchend",touchendFn,false);
            }
            

            
        },
       
    },
    mounted(){
        this.bannerFn();
    },
    beforeDestroy(){
        clearInterval(this.bannerTimer);
    }
};
</script>
<style lang='scss' scoped>
.banner-box {
    width: 100%;
    height: 360px;
    position: relative;
    overflow: hidden;

    .banner-longBox {
        width: 500%;
        height: 100%;
        position: absolute;
        top: 0;
        left: -100%;
        
        // &.imgTransition{
        //     transition: .3s linear;
        // }

        .banner{
            width: calc(100% / 5);
            height: 100%;
            float: left;
            overflow: hidden;

            img{
                width: 100%;
                height: 100%;
            }
        }
    }

    .bannerIndex-box{
        position: absolute;
        top: 310px;
        // left: 0;
        left: 50%;
        transform: translateX(-87px);
        height: 7px;

        &>div{
            width: 44px;
            height: 100%;
            float: left;
            background-color: #7f6d69;
            margin-left: 21px;

            &:first-child{
                margin-left: 0;
            }

            &.active{
                background-color: #feece8;
            }
        }

    }
}
</style>
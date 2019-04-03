<template>
    <div id="com">
        <div class="head">
            <div class="search">
                <span>
                    <input type="text" placeholder="请输入搜索内容">
                    <i class="iconfont icon">&#xe515;</i>
                </span>
                <i class="iconfont mes">&#xe62d;</i>                
            </div>
            <ul class="nav">
                <router-link tag="li" v-for="item in topNav" :to='item.to'>
                    <p>{{item.con}}</p>
                </router-link>
            </ul>
        </div>
        <div class="content">
        <div class="lunB">
            <div class="pic">
                <a :href="item.a" v-for="item in pic">
                    <img :src="item.src" alt="">
                </a>
            </div>
            <div class="lunShop">
                <ul>
                    <li v-for="item in lunShop">
                        <a :href="item.a">
                            <img :src="item.pic" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="new">
            <div class="newli" v-for="item in newlist">
                <a :href="item.a" >
                    <img :src="item.src" alt="">
                </a>
            </div>
        </div>
        <div class="love">
            <a href="">
                <img src="http://img2.epetbar.com/2019-03/07/17/36d96166d20d8091d53e1a0ce74d66ca.gif?x-oss-process=style/water" alt="">
            </a>
        </div>
        <div class="timeout">
            <div class="timeout_left">
                <div class="timeout_leftT">
                    <img src="https://static.epetbar.com/static_wap/appmall/main/index_icon_berserk_mark_415.png?version=03" alt="">
                    <div class="time">
                        <div class="timeL">
                            <span class="ti">10点场</span>
                        </div>
                        <div class="timeR">
                            <span>即将开始</span>
                        </div>
                    </div>
                </div>
                <div class="timeout_leftB">
                    
                </div>
            </div>
            <div class="timeout_right">
                <div class="timeout_rightT">
                    
                </div>
                <div class="timeout_rightB">
                    
                </div>
            </div>
            
        </div>
        <div class="shop">
            <div class="shopL">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/19/18/70a514335f1957ee99e41c14c364a05c.png" alt="">
                </a>
            </div>
            <div class="shopR">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png" alt="">
                </a>
            </div>
        </div>
        <div class="shop_1">
            <div class="shop_1T">
                <a href="">
                    <img src="http://img2.epetbar.com/nowater/showcase/2019/03/26/093350854.jpg@!water" alt="">
                </a>
            </div>
            <div class="shop_1M">
                <a href="">
                    <img src="http://img2.epetbar.com/nowater/showcase/2019/03/26/093420832.jpg@!water" alt="">
                </a>
                <a href="">
                    <img src="http://img2.epetbar.com/nowater/showcase/2019/03/26/093306391.jpg@!water" alt="">
                </a>
            </div>
            <div class="shop_1B">

            </div>
        </div>
        <div class="shop">
            <div class="shopL">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/18/c529a10ea2355ecf3c72258de10701ae.png" alt="">
                </a>
            </div>
            <div class="shopR">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png" alt="">
                </a>
            </div>
        </div>
        <div class="shop_2">
            <a href="">
                <img src="http://img2.epetbar.com/2018-10/18/18/4a2465f4f49c13c19713d609f0d3f7bb.png?x-oss-process=style/water" alt="">
            </a>
        </div>
        <div class="shop">
            <div class="shopL">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/21/86cb055b728a68ab706bb3168406543d.png" alt="">
                </a>
            </div>
            <div class="shopR">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png" alt="">
                </a>
            </div>
        </div>
        <div class="shop_3">
            <div class="shop_3L">
                <a href="">
                    <img src="http://img2.epetbar.com/2018-10/18/14/5610ec6beb192a92d989efa045ffa35b.jpg?x-oss-process=style/water" alt="">
                </a>
            </div>
            <div class="shop_3R">
                <a href="">
                    <img src="http://img2.epetbar.com/2018-10/18/14/fc257191ff347b1d26e726936c1024c2.jpg?x-oss-process=style/water" alt="">
                </a>
            </div>
        </div>
        <div class="shop">
            <div class="shopL">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/18/f0ae00c3bfb036c84967a2487f7a02cc.png" alt="">
                </a>
            </div>
            <div class="shopR">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png" alt="">
                </a>
            </div>
        </div>
        <div class="shop_4">
            <div class="shop_4L">
                <a href="">
                    <img src="http://img2.epetbar.com/2018-10/18/17/3af9114b128927ea42a7528c40a9daae.jpg?x-oss-process=style/water" alt="">
                </a>
            </div>
        </div>
        <div class="shop">
            <div class="shopL">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/19/18/5f63bd572e248f7c5600a61b9868490e.png" alt="">
                </a>
            </div>
            <div class="shopR">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png" alt="">
                </a>
            </div>
        </div>
        <div class="shop_5">
            <div class="shop_5T">
                <a href="">
                    <img src="http://img2.epetbar.com/2018-10/26/17/deb40cf8a6c2a6e2439ac93052c889fd.jpg?x-oss-process=style/water" alt="">
                </a>
            </div>
            <div class="shop_5B">
                <a href="">
                    <img src="https://img1.epetbar.com/2018-09/12/15/c2793384623aa9f7462c83caf357d9b2.jpg?x-oss-process=style/fill&$1=200&$2=200" alt="">
                    <p>￥55.5</p>
                    <del>￥188.0</del>
                </a>
                <a href="">
                    <img src="https://img1.epetbar.com/2018-09/12/15/c2793384623aa9f7462c83caf357d9b2.jpg?x-oss-process=style/fill&$1=200&$2=200" alt="">
                    <p>￥55.5</p>
                    <del>￥188.0</del>
                </a>
                <a href="">
                    <img src="https://img1.epetbar.com/2018-09/12/15/c2793384623aa9f7462c83caf357d9b2.jpg?x-oss-process=style/fill&$1=200&$2=200" alt="">
                    <p>￥55.5</p>
                    <del>￥188.0</del>
                </a>
                <a href="">
                    <img src="https://img1.epetbar.com/2018-09/12/15/c2793384623aa9f7462c83caf357d9b2.jpg?x-oss-process=style/fill&$1=200&$2=200" alt="">
                    <p>￥55.5</p>
                    <del>￥188.0</del>
                </a>
            </div>
        </div>
        <div class="shop_6">
            <a href="">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" alt="">
            </a>
            <a href="">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" alt="">
            </a>
            <a href="">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" alt="">
            </a>
            <a href="">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" alt="">
            </a>
        </div>
        <div class="shop">
            <div class="shopL">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-12/17/14/590ec7ecf89f97331153467f226b4e33.png" alt="">
                </a>
            </div>
            <div class="shopR">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png" alt="">
                </a>
            </div>
        </div>
        <div class="shop_5">
            <div class="shop_5T">
                <a href="">
                    <img src="http://img2.epetbar.com/2019-01/21/13/405e9589bb8c2b6b61624f43d9862fc9.jpg?x-oss-process=style/water" alt="">
                </a>
            </div>
            <div class="shop_5B">
                <a href="">
                    <img src="https://img1.epetbar.com/2015-12/29/10/e8cb7c5553f77d0613dc961c5c95ec8e.jpg?x-oss-process=style/fill&$1=200&$2=200" alt="">
                    <p>￥109.0</p>
                    <del>￥210.0</del>
                </a>
                <a href="">
                    <img src="https://img1.epetbar.com/2015-12/29/10/e8cb7c5553f77d0613dc961c5c95ec8e.jpg?x-oss-process=style/fill&$1=200&$2=200" alt="">
                    <p>￥109.0</p>
                    <del>￥210.0</del>
                </a>
                <a href="">
                    <img src="https://img1.epetbar.com/2015-12/29/10/e8cb7c5553f77d0613dc961c5c95ec8e.jpg?x-oss-process=style/fill&$1=200&$2=200" alt="">
                    <p>￥109.0</p>
                    <del>￥210.0</del>
                </a>
                <a href="">
                    <img src="https://img1.epetbar.com/2015-12/29/10/e8cb7c5553f77d0613dc961c5c95ec8e.jpg?x-oss-process=style/fill&$1=200&$2=200" alt="">
                    <p>￥109.0</p>
                    <del>￥210.0</del>
                </a>
            </div>
        </div>
        <div class="shop_6">
            <a href="">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/f66738a09706211ad0b2b1ccd821330f.jpg?x-oss-process=style/fill&$1=100&$2=50" alt="">
            </a>
            <a href="">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/f66738a09706211ad0b2b1ccd821330f.jpg?x-oss-process=style/fill&$1=100&$2=50" alt="">
            </a>
            <a href="">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/f66738a09706211ad0b2b1ccd821330f.jpg?x-oss-process=style/fill&$1=100&$2=50" alt="">
            </a>
            <a href="">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/f66738a09706211ad0b2b1ccd821330f.jpg?x-oss-process=style/fill&$1=100&$2=50" alt="">
            </a>
        </div>
        <div class="shop">
            <div class="shopL">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/16/7e71c9ede139faae845bff0c4e61b52a.png" alt="">
                </a>
            </div>
            <div class="shopR">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png" alt="">
                </a>
            </div>
        </div>
        <div class="shop_7">
            <a href="">
                <img src="https://img1.epetbar.com/2019-01/24/11/d9db8eedb8b6f627cca3c896333b5da3.jpg" alt="">
            </a>
        </div>
        <div class="shop">
            <div class="shopL">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/19/15/63e297e32650e7ad39a964e19e6077d6.png" alt="">
                </a>
            </div>
            <div class="shopR">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png" alt="">
                </a>
            </div>
        </div>
        <div class="shop_7">
            <a href="">
                <img src="https://img1.epetbar.com/2019-01/24/14/6efa215cd0c4f004b9f15882dc89c5e6.jpg" alt="">
            </a>
        </div>
        <div class="shop">
            <div class="shopL">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/20/3fbb022a3225b959f51312c47f378016.png" alt="">
                </a>
            </div>
            <div class="shopR">
                <a href="">
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png" alt="">
                </a>
            </div>
        </div>
        <div class="shopList">
            <ul class="listUl">
                <li class="listLi" v-for="item in list">
                    <div class="listShop">
                        <a href="">
                            <img :src="item.good_image.img_url" alt="">
                            <p>{{item.subject}}</p>
                            <span>￥{{item.sale_price}}</span>
                        </a>
                        <div class="car">
                            <a href="">
                               <img data-v-0c7bc348="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ3MUI2MTBFQkJEMzExRTg4REU2QTE4MTFBMEM0OEE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ3MUI2MTBGQkJEMzExRTg4REU2QTE4MTFBMEM0OEE3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDcxQjYxMENCQkQzMTFFODhERTZBMTgxMUEwQzQ4QTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDcxQjYxMERCQkQzMTFFODhERTZBMTgxMUEwQzQ4QTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4o4IOoAAAFYklEQVR42sxaT28jNRS3PU7S7m5aURAILdJeEP/KYS+ACohFVHCCb8CVTwBIHPgQHPkUHPm3h0rsahESaMXSChDiANIiBGqhCZs0yWTMezNvEo/jmbE903YtWR5P/Oz38/trZ/j0jedZaFHFbgS1xxTvQCupL6BybXgCdQ41hs4M2gn1LZNzlzXZ2vWv01Y2BIDMXoC6ns5VsjgVTsCkQsDLEkMdQx2loBwBmEUGgsBdv0QAWA2AOmaQhz7g7MMABPQfy6TlBMAbCE2IO7pBUmgKwKZG61RROgOVqWI7QDQmcIHNFEz7AEw63Kg1qMekdrX00oEJTlK46CqFBgD0gtJ/AGoXpVP42UIvayZDii3yRi1IgVsH1AC/SHwepUOJD5NG1IB4EAh7rlJQdVJQAdLLCvKAvPAyGlHCBAeiLajddgBwf7pV+i6M31LLuFQEoqzi5xus6OvPE4BO0yN7tUvEEP/6wrBD7KApAGYFYNrMuh3IcvGIXGy4FFiwHRTsqIZmk3jVgBQX31iR0vmpUVURporp7rdjisyc8GTS+wSaF7RXn651p+80koAvjRagleKLdEbf/b4DMx2j/8oZSaBIDrQqo++bxh5RSlA58Vpv8hZI4DJW6H6HieM8EZtnJQUNwIKl0e5LkQ7kgq8dwNM+tgDk8mlLwQJAL2kCK9UyIfTyRIyrA/wtScT1ybTLWixDztVHHRl/nIOosxWkEaRW0tcTcQRyOqUPzL9bI4WCw0L1ktYI7hAPIpH8BNLAY6rqdGZPCK4mJr2vDYCaPjSfR9/D49TzsNcTBU/kEQ+ESE6g+RV3BBZ/ymYHvoYMG/M4dQ8cASxOrGJx1g4LaPvExHZTd0obsU2vfnTO8zLeJUb2KDQi53aCQFQL7hTor7IK+7MAWGi61HMWL0ZgEpjmgGi2gySwWnbItd8ptU87rVjcO/kldtlkXCT5zj1ty9F84gEY+hVoHoV6GEXzn0ulUKIcoklaAZ4Lj59/YoSP59GVcp2ud6Xw+8v0eDPtlqtRaRapGkbkpcGXqZFyUrddso9bPgCILyVKryyNeKDKj0EHNiAeAQ3HYZ53LV2Rqz0PADlfiR2ITzxYephnfQFo9nGNktY7EFjvBtzWzAXdvQYndrCD+/S47QsgXwPoXqdXnwdedsQyPZg0SK1lNP99moghPD4yi+Vd1qDApnzmfU+Q8T7DgDhpeMBBsi9bSBa/BS/4i3NwLtrRhI93d3Dgw8znQttThVZ2tOmtZZE+vrR346/8XmvcwgHHNS8Kv7W004/1E+KoiRQgGL4G9nEb6g/w/KYrAPBWz8H4W1D3IYN+2xMA03nno92d/MVWfm73VSMA8A00j1F3IGX8DNMunCs24IvcbacGK5InueVcUyG5k/7ejSPzFmXYQI30WBR72EGsPSfM0Y40yQ1tV6Z4PzQOsQPYxQ+g+Q3qH/D8Hss8Wa0dwNgPoUFP9TfU91Np1NiRKtrGzHZBhwAGdPQVPl4FstWvYPEXfT0RqNJtaF51cQTGzqD0Bit3v5oUUEWO7wNPVEd3bKZWQtnd2b3anXEE4BEPXE+p92zhoiwIDui33hkENHe67AODgW0OUTEXurXpfaBGeZky439EFyDpYQXqYboL5wsgl8Rh6g1L5hE1doCER1U2U60OjQFkNoE8GC7dpJUOiZ0iL4Gi3WTV/wQ7G7JDSWAO6wcDNnrpYchjEnH6CccpGHIxf8piWuJKK5WfJ0pg/L+kasuPatoDMGbav1A+tDLQleJC/6SuUPHlZ05hAGICMDKDnM9BTwaA0NVoTonbkOUfnmWX4ijpyg/PWP7hWTZHqAQX5X8BBgD+l+mJ4+BFcgAAAABJRU5ErkJggg==">
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        </div>
        <router-view></router-view>
        
    </div>
    
</template>
<script>
import Vuex from 'vuex';
export default {
    created(){
        this.gethomeList();
    },
    computed:{
        ...Vuex.mapState({
            list:state=>state.home.homeList            
        })
    },
    methods: {
        ...Vuex.mapActions({
            gethomeList:"home/getActionsHomeList"
        })
    },
    data(){
        return{
            topNav:[
                {
                    con:"精选",
                    to:"/"
                },
                {
                    con:"进口狗粮",
                    to:"/"
                },
                {
                    con:"国产狗粮",
                    to:"/"
                },
                {
                    con:"特殊狗粮",
                    to:"/"
                },
                {
                    con:"强化免疫",
                    to:"/"
                },
                {
                    con:"内外驱虫",
                    to:"/"
                },
                {
                    con:"黑科技",
                    to:"/"
                }
            ],
            pic:[
                {
                    a:"",
                    src:"http://img2.epetbar.com/2019-03/13/15/02c510761e648bf5ab4154553f4341c9.jpg?x-oss-process=style/water"
                },
                {
                    a:"",
                    src:"http://img2.epetbar.com/2019-03/25/14/db3a31f8aac1f4ef8724f407b6c03ab7.jpg?x-oss-process=style/water"
                },
                {
                    a:"",
                    src:"http://img2.epetbar.com/2019-02/26/13/9728596c1e1b5f04143ca9f9ea4bbc1c.jpg?x-oss-process=style/water"
                },
                {
                    a:"",
                    src:"http://img2.epetbar.com/2019-03/22/10/fa3d7c4a32c6075152f671c6d7d71f51.png?x-oss-process=style/water"
                }
            ],
            lunShop:[
                {
                    a:"",
                    pic:"https://img1.epetbar.com/2018-10/19/19/9aa905ec1644bf2773a451aca9af06d3.png@!water"
                },
                {
                    a:"",
                    pic:"https://img1.epetbar.com/2018-10/19/18/ed8fcf7e8b283838a02a6a1604cb0237.png@!water"
                },
                {
                    a:"",
                    pic:"https://img1.epetbar.com/2018-10/19/18/5156506734c2d1c2a8fbbaa74fae5494.png@!water"
                },
                {
                    a:"",
                    pic:"https://img1.epetbar.com/2018-10/19/18/8faa333a45eb95384551b712866e91ff.png@!water"
                },
                {
                    a:"",
                    pic:"https://img1.epetbar.com/2019-03/12/10/7afd8f297dcf5ef870f87e8bca179ee1.png@!water"
                }
            ],
            newlist:[
                {
                    a:"",
                    src:"http://img2.epetbar.com/nowater/2019-03/15/16/8f3cd3691322a9a5e28b61fde6032652.jpg?x-oss-process=style/water"
                },
                {
                    a:"",
                    src:"http://img2.epetbar.com/nowater/2019-03/15/16/8706d20f27505c2421787738d7e1f3d4.jpg?x-oss-process=style/water"
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    #com{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        .head{
            position: fixed;
            top: 0;
            left: 0;
            height: 1.98rem;  
             width: 100%;       
            .search{
                height: 1.1rem;
                display: flex;
                align-items: center;
                justify-content: space-around;
                width: 100%;
                input{
                    width: 6.7rem;
                    height: .60rem;
                    border:none;                    
                    line-height: .60rem;
                    background-color: #f1f1f1;
                    border-radius: .3rem;
                    padding-left: .7rem;
                    font-size:.28rem;
                }
                .icon{
                    font-size: .52rem;
                    position: absolute;
                    left: .37rem;
                }
                .mes{
                    font-size: 0.4rem;
                }
            }           
           .nav{
                height: .88rem;
                display: flex;
                align-items: center;
                overflow: auto;
                li{                   
                    width: 1.82rem;
                    flex-shrink: 0;
                    text-align: center;
                    p{
                        font-size: .28rem;
                    }
                    .router-link-active{
                        font-size: .4rem;
                        font-weight: 600;
                    }
                }
            }
        }
        .content{
            
            overflow: auto;
            
            flex: 1;
        }
        .lunB{
            height: 8.18rem;
            .pic{
                height: 6.46rem;
                overflow: hidden;
                img{
                    height: 6.46rem;
                    width:100%;
                }
            }
            .lunShop{
                height: 8.18rem;
                position: relative;
                z-index: 1;
                margin-top: -10%;
                display: flex;
                ul{
                   display: flex;
                    flex-direction: row; 
                }
                li{
                    width: 20%;
                    height: 2.56rem;                   
                    img{
                        width: 1.5rem;
                        height: 2.56rem;
                    }
                }
            }
        }
        .new{
            height: 4.68rem;
            display: flex;
            margin-bottom: 1.46rem;
            img{
                width: 3.8rem;
                height: 4.68rem;
            }
            
        }
        .love{
            height: 1.78rem;
            margin-bottom: .36rem;
            img{
                width:100%;
                height: 1.78rem;
            }
        }
        .timeout{
            height: 3.16rem;
            
            padding:.3rem 0;
            margin: 0 .2rem 1.46rem 0;
            background: pink;
            display: flex;
            .timeout_left{
                width: 50%;
                height: 2.54rem;                
                background:black;
                 .timeout_leftT{
                     width: 2.88rem;
                     height: .5rem;
                     background: #ccc;
                     margin:0 .1rem 0 .4rem;
                     display: flex;
                     img{
                         width: 1.2rem;
                         height: .4rem;
                         background: bisque;
                     }
                     .time{
                         width: 2.16rem;
                         height: .4rem;
                         background: #fb4752;
                         border-radius: .4rem;
                         display: flex;
                         .timeL{
                             padding: 0 .1rem;
                             color: #fff;
                             font-size: .16rem;
                             .ti{
                                 color: #fff;
                                 font-size: .16rem!important;
                                 text-align: center;
                                 line-height: .36rem;
                             }
                         }
                         .timeR{
                             background: #fff;
                             border:1px solid #fb4752;
                             span{
                                 font-size: .10rem;
                             }
                         }
                     }
                 }
            }
            .timeout_right{
                width: 50%;
                 height: 2.54rem;
                background: orange;
            }
        }
        .shop{
            height: .5rem;
            width: 100%;
            margin-bottom: .36rem;
            padding: 0 .2rem;
            display: flex;
            justify-content: space-between;
            .shopL{
                width: 5.62rem;
                height: .5rem;
                img{
                    width: 2.82rem;
                    height: .4rem;
                }
            }
            .shopR{
                width: .76rem;
                height: .5rem;
                img{
                    width: .76rem;
                    height: .5rem;
                }
            }
        }
        .shop_1{
            height: 7.28rem;
            margin-bottom: .36rem;
            padding: 0 .2rem;
            .shop_1T{
                height: 3.06rem;
                img{
                    height: 3.06rem;
                    width: 100%;
                }
            }
             .shop_1M{
                 height: 3.1rem;
                 margin-top: .2rem;
                 display: flex;
                 justify-content: space-between;
                 img{
                     width: 3.5rem;
                     height: 3.1rem;
                 }
             }
             .shop_1B{
                 height: .5rem;
                 margin-top: .2rem;
                 background: #ccc;
             }
        }
        .shop_2{
            height: 3.06rem;
            margin-bottom: .64rem;
            padding: 0 .2rem;            
            img{
                height: 3.06rem;
                width: 100%;
            }
        }
        .shop_3{
            height: 2.36rem;
            margin-bottom: .62rem;
            display: flex;
            justify-content: space-between;
            .shop_3L{
                width: 3.4rem;
                img{
                    width: 3.7rem;
                }
            }
            .shop_3R{
                width: 3.7rem;
                img{
                    width: 3.4rem;
                }
            }
        }
        .shop_4{
            height: 3.06rem;
            margin-bottom: .62rem;
            padding: 0 .2rem;
            img{
                height: 3.06rem;
                width: 100%;
            }
        }
        .shop_5{
            height: 4.9rem;
            margin-bottom: 0.3rem;
            padding: 0 .2rem;
            .shop_5T{
                height: 2.1rem;
                img{
                    height: 2.1rem;
                    width: 100%;
                }
            }
            .shop_5B{
                height: 2.2rem;
                padding: .4rem 0 .2rem 0;
                display: flex;
                justify-content: space-around;
                a{
                    width: 1.47rem;
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    img{
                        height: 1.47rem;
                        width: 1.47rem;
                    }
                    p{
                       color:#f03e3e;
                       font-weight: 700;
                       font-size: .2rem;
                    }
                    del{
                        color: #999;
                        font-size: .2rem;
                    }
                }               
            }
        }
        .shop_6{
            height: 1.42rem;
            margin: .36rem;
            padding: .3rem ;
            display: flex;
            img{
                width: 1.6rem;
                height: .64rem;
            }
        }
        .shop_7{
            height: 4.94rem;
            margin-bottom: .5rem;
            padding: 0 .2rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .shopList{
            display: flex;
            padding: 0 .1rem;
            margin-bottom: 5rem;//记得要删除
            .listUl{
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                .listLi{
                    width: 50%;
                    padding: 0 .1rem;
                    .listShop{
                        border: 1px solid #f1f1f1;
                        height: 5.5rem;
                        // width: 100%;
                        border-radius: .2rem;
                        position: relative;
                        a{
                            padding: .3rem;                           
                            padding:.3rem;
                            display: block;
                            img{
                                width: 3rem;
                                height: 3.8rem;                                
                            }
                            p{
                                font-size: .24rem;
                                display: block;
                                height: .64rem;
                                 color: #333;
                            }
                            span{
                                font-size: .2rem;
                                display: block;
                                color: #f03e3e;
                                font-weight: 700;
                                margin-top: 0.06rem;
                            }
                        }
                        .car{
                            img{
                                width: .52rem;
                                height: .52rem;
                                position: absolute;
                               bottom:.3rem;
                               left:2.8rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
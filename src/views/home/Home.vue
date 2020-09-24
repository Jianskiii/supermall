<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "@/views/home/childComps/HomeSwiper";
  import RecommendView from "@/views/home/childComps/RecommendView";

  import {getHomeMultidata} from "network/home";
  // import Swiper from "@/components/common/swiper/Swiper";
  // import SwiperItem from "@/components/common/swiper/SwiperItem";


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        //result:null //保存created获取到的res，即使函数执行完毕，数据仍然存在
        banners: [],
        recommends: []
      }
    },
    //让组件在注册完成后（首页创建完成）便发送网络请求 请求数据，
    // 此时我们需要生命周期函数
    created() {
      //1.请求多个数据  通过.then拿到函数请求到的数据
      getHomeMultidata().then(res => {
        //this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>

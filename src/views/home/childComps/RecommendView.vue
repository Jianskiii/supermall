<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
<!--        切记要动态绑定！！！！！！！！！！！！！！！！！-->
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
 .recommend {
   display: flex;
   width: 100%;
   text-align: center;
   font-size: 12px;

   padding: 10px 0 13px;
   border-bottom: 8px solid #eee;
 }
 /* 使横向排列均等分*/
 .recommend-item {
   flex: 1;
 }
 /* 调整图片大小*/
 .recommend-item img {
   width: 65px;
   height: 65px;
   margin-bottom: 10px;
 }
</style>

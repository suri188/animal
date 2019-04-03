<template>
  <section>
    <article>
      <!-- <ul>
        <li
          v-for="(item,index) in nav"
          :key="index"
          @click="handlelist(index)"
          :class="activeIndex == index?'active':''"
        >{{item}}</li>
      </ul>-->
      <ul>
        <li @click="handleClick(0)" :class="activeIndex == 0?'active':''">为您推荐</li>
        <li @click="handleClick(1)" :class="activeIndex == 1?'active':''">E宠国际</li>
        <li @click="handleClick(2)" :class="activeIndex == 2?'active':''">狗狗服饰</li>
        <li @click="handleClick(3)" :class="activeIndex == 3?'active':''">狗狗窝垫</li>
        <li @click="handleClick(4)" :class="activeIndex == 4?'active':''">狗狗主粮</li>
        <li @click="handleClick(5)" :class="activeIndex == 5?'active':''">狗狗零食</li>
        <li @click="handleClick(6)" :class="activeIndex == 6?'active':''">狗狗玩具</li>
        <li @click="handleClick(7)" :class="activeIndex == 7?'active':''">狗狗清洁</li>
        <li @click="handleClick(8)" :class="activeIndex== 8?'active':''">狗狗保健</li>
        <li @click="handleClick(9)" :class="activeIndex == 9?'active':''">狗狗护理</li>
        <li @click="handleClick(10)" :class="activeIndex == 10?'active':''">狗狗生活</li>
        <li @click="handleClick(11)" :class="activeIndex == 11?'active':''">狗狗牵引</li>
        <li @click="handleClick(12)" :class="activeIndex == 12?'active':''">狗狗美容</li>
        <li @click="handleClick(13)" :class="activeIndex == 13?'active':''">出游洗澡</li>
      </ul>
      <aside>
        <div class="hot">
          <div class="hot_shop">
            <a>热门分类</a>
            <div class="shop">
              <i>
                <img
                  src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300"
                  alt
                >
              </i>
              <span>强化免疫</span>
            </div>
          </div>
        </div>
      </aside>
    </article>
  </section>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "tab1",
  
  components: {},
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    ...Vuex.mapActions({
      getclassify: "Tab1/getActionclassify"
    }),
    handleClick(index) {
      this.activeIndex = index;
    }
  },
  created (){
    this.getclassify();
  }
};
</script>
<style scoped>
section {
  width: 100%;
  height: 100%;
  overflow: auto;
}
article {
  display: flex;
}
article > ul {
  display: flex;
  flex-direction: column;
  width: 70px;
  margin-top: 50px;
  overflow: auto;
}
article > ul > li {
  width: 70px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
article > ul > li.active {
  color: brown;
  background: #ccc;
}
aside {
  width: 300px;
  height: 100%;
  margin-top: 50px;
}
.hot {
  width: 300px;
  height: 100%;
}
.hot_shop {
  width: 300px;
  height: 308px;
  background: orange;
}
.hot_shop a {
  padding-top: 10px;
  padding-left: 10px;
  display: inline-block;
}
.shop {
  width: 96px;
  height: 116px;
  background: gray;
}
i img {
  width: 86px;
  height: 86px;
  margin: 0 auto;
}
span {
  display: inline-block;
  font-size: 14px;
}
</style>



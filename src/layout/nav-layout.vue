<template>
  <van-nav-bar
    safe-area-inset-top
    placeholder
    z-index="99"
    :title="title"
    left-arrow
    v-show="!NavigatorWhiteList.includes(path)"
  >
  </van-nav-bar>
  <van-sticky offset-top="0">
  <van-row style="background: white">
    <van-col span="2"><van-icon color="var(--van-icon-color)" size="25" name="search" /></van-col>
    <van-col span="20"
      ><van-search
        left-icon="``"
        v-model="value"
        placeholder="请输入搜索关键词"
    /></van-col>
    <van-col span="2"><van-icon color="var(--van-icon-color)" size="25" name="user-o" /></van-col>
  </van-row>
  </van-sticky>
</template>

<script lang='ts'>
import { NavigatorWhiteList } from "@/common/white";
import { defineComponent, toRefs } from "vue";
import { useRoute } from "vue-router";
import { useTitle, useSearch } from "../common/navigator";
// import { Toast } from "vant";
export default defineComponent({
  name: "header-layout",
  setup() {
    let route = useRoute();
    const { title } = useTitle();
    const { value } = useSearch();

    return {
      title,
      value,
      ...toRefs(route),
      NavigatorWhiteList,
    };
  },
});
</script>

<style lang='scss' scoped>
.van-col {
  text-align: center;
  align-self: center;
}
</style>
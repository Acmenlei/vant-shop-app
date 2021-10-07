<template>
  <div class="my-nav">
    <van-nav-bar
      safe-area-inset-top
      placeholder
      z-index="99"
      :title="title"
      v-show="!NavigatorWhiteList.includes(path)"
    >
    </van-nav-bar>
    <van-sticky offset-top="0">
      <van-row
        :style="{
          background: NavigatorWhiteList.includes(path)
            ? 'var(--custom-primary-color)'
            : 'white',
        }"
      >
        <van-col span="2">
          <van-icon
            name="credit-pay"
            :color="NavigatorWhiteList.includes(path) ? 'white' : 'var(--custom-primary-color)'"
            size="25"
            :style="`border-color: ${ NavigatorWhiteList.includes(path) ? 'white' : 'var(--custom-primary-color)'}`"
          />
        </van-col>
        <van-col span="20"
          ><van-search
            right-icon="search"
            left-icon="''"
            v-model="value"
            placeholder="请输入搜索关键词"
        /></van-col>
        <van-col span="2"
          ><van-icon
            :color="NavigatorWhiteList.includes(path) ? 'white' : 'var(--custom-primary-color)'"
            size="25"
            name="user-o"
        /></van-col>
      </van-row>
    </van-sticky>
  </div>
</template>

<script lang='ts'>
import { NavigatorWhiteList } from "@/common/white";
import { defineComponent, toRefs } from "vue";
import { useRoute } from "vue-router";
import { useTitle, useSearch } from "../common/navigator";

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
.my-nav {
  .van-row {
    padding: 0 12px;
    height: 3.2rem;
    .van-col {
      text-align: center;
      align-self: center;
    }
  }
  .van-search {
    // border: 1px solid var(--custom-primary-color);
    padding: 0;
    border-radius: 5px;
    margin: 8px 15px;
  }
  .van-icon {
    border-radius: 50%;
    border: 1px solid;
    padding: 4px;
  }
}
</style>
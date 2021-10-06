<template>
  <van-nav-bar
    safe-area-inset-top
    fixed
    placeholder
    z-index="99"
    :title="title"
    left-arrow
  >
    <template #right>
      <van-icon name="search" size="20" />
    </template>
  </van-nav-bar>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useTitle } from "../common/navigator";
// import { Toast } from "vant";

export default defineComponent({
  name: "header-layout",
  setup() {
    const { title } = useTitle();
    return {
      title,
    };
  },
});
</script>

<style lang='scss' >
</style>
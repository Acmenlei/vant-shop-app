<template>
  <van-list
    class="design-container"
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="design-item" v-for="item of list" :key="item">
      <van-image fit="cover" width="98%" :src="item.src"></van-image>
    </div>
  </van-list>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useDesign } from "../scritps";

export default defineComponent({
  name: "clothes-style",
  setup() {
    let data = [
        {
            src: "/src/assets/1.png"
        },
        {
            src: "/src/assets/2.png"
        },
        {
            src: "/src/assets/3.png"
        },
        {
            src: "/src/assets/4.png"
        },
        {
            src: "/src/assets/5.png"
        },
        {
            src: "/src/assets/6.png"
        },
        {
            src: "/src/assets/7.png"
        },
        {
            src: "/src/assets/8.png"
        },
        {
            src: "/src/assets/9.png"
        },
        {
            src: "/src/assets/10.png"
        },
        {
            src: "/src/assets/11.png"
        },
        {
            src: "/src/assets/12.png"
        },
        {
            src: "/src/assets/13.png"
        },
        {
            src: "/src/assets/14.png"
        },
        {
            src: "/src/assets/15.png"
        }
    ]
    const { onLoad, list, loading, finished } = useDesign(data);
    return {
      list,
      onLoad,
      loading,
      finished,
    };
  },
});
</script>

<style lang='scss' scoped>
</style>
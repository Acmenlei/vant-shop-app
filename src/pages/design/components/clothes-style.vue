<template>
  <van-list
    class="design-container"
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="design-item" v-for="item of list" :key="item">
      外套{{ item }}
    </div>
  </van-list>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useDesign } from "../scritps";

export default defineComponent({
  name: "clothes-style",
  setup() {
    const { onLoad, list, loading, finished } = useDesign();
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
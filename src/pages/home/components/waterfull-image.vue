<template>
  <van-list
    class="waterfull"
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="design-item" v-for="item in list" :key="item">
      <img :src="item.src">
    </div>
  </van-list>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "waterfull-image",
  setup() {
    const list = reactive<any>([
      {
        src: "/src/assets/logo.png",
      },
      {
        src: "/src/assets/logo.png",
      },
      {
        src: "/src/assets/logo.png",
      },
      {
        src: "/src/assets/logo.png",
      },
      {
        src: "/src/assets/logo.png",
      },
      
    ]);
    const loading = ref(false);
    const finished = ref(false);

    const onLoad = () => {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          list.push(list.length + 1);
        }
        // 加载状态结束
        loading.value = false;
        // 数据全部加载完成
        if (list.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };
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
.waterfull {
  display: flex;
  flex-direction: column;
}
</style>
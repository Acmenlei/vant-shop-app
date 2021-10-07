<template>
  <div id="design">
    <van-sticky offset-top="3.2rem">
      <menu-slider-bar />
    </van-sticky>
    <van-list
      class="design-container"
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="design-item" v-for="item of list" :key="item">外套{{ item }}</div>
    </van-list>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
import MenuSliderBar from "./components/menu-slider-bar.vue";

export default defineComponent({
  components: { MenuSliderBar },
  name: "designer",
  setup() {
    const list = reactive<any>([]);
    const loading = ref(false);
    const finished = ref(false);

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
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
#design {
  display: flex;

  .design-container {
    margin-left: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    .design-item {
      text-align: center;
      line-height: 8rem;
      background: #fff;
      width: 8rem;
      height: 8rem;
      margin: .5rem;
    }
  }
}
</style>
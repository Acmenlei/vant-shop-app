<template>
  <div id="showCase">
    <van-list
      class="showCase-container"
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="showCase-item" v-for="item of list" :key="item">
        原创{{ item }}
      </div>
    </van-list>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  name: "show-case",
  setup() {
    const list = reactive<any>([]);
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
#showCase {
  width: 100%;
  .showCase-container {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    .showCase-item {
      text-align: center;
      line-height: 20rem;
      background: #fff;
      margin: .5rem;
    }
    .showCase-item:nth-child(2n) {
        margin-left: 0;
        margin-bottom: 0;
    }
    .showCase-item:nth-child(2n-1) {
        margin-bottom: 0;
    }
  }
}
</style>
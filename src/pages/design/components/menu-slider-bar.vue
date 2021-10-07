<template>
  <van-sidebar v-model="active" @change="onChange">
    <van-sidebar-item title="类型" />
    <van-sidebar-item title="款式" />
    <van-sidebar-item title="设计师" />
  </van-sidebar>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import { Toast } from "vant";

export default defineComponent({
  name: "menu-slider-bar",
  setup() {
    const active = ref(0);
    const onChange = (index: number) => Toast(`标签名 ${index + 1}`);
    return {
      active,
      onChange,
    };
  },
});
</script>

<style lang='scss' scoped>
.van-sidebar {
    border: 1px solid #eee;
    border-left: none;
    border-top: none;
}
</style>
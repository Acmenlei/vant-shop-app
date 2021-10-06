<template>
  <div id="tabbar">
    <van-tabbar
      placeholder
      route
      active-color="var(--van-nav-bar-background-color)"
      v-model="active"
    >
      <van-tabbar-item
        v-for="(route, index) in TabbarRoutes.children"
        :icon="route.meta.icon"
        :to="route.path"
        >{{ route.name }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import TabbarRoutes from "@/router/modules/tabbar";

export default defineComponent({
  name: "tabbar-layout",
  setup() {
    const active = ref(0);
    return { active, TabbarRoutes };
  },
});
</script>
<style lang='scss' scoped>
</style>
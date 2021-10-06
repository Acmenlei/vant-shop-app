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
        :icon="route.name && route.meta && route.meta.icon"
        :to="route.path"
      >
        <span v-if="route.name">{{ route.name }}</span>
        <div v-else>
          <img width="20" src="../assets/logo.png" alt="" />
        </div>
      </van-tabbar-item>
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
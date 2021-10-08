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
        <div v-else class="publish">
          <van-icon size="20" color="white" name="plus" />
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
.publish {
  background: var(--custom-primary-color);
  padding: .6rem;
  border-radius: 50%;
}
</style>
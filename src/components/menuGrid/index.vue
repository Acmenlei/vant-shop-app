<template>
  <van-grid square class="home-grid-menu">
    <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="Menu" />
  </van-grid>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "menu-grid",
});
</script>

<style lang='scss' scoped>

</style>
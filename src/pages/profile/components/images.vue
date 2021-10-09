<template>
  <div class="images">
    <van-image src="/src/assets/image.png"></van-image>
    <van-image src="/src/assets/image.png"></van-image>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "images",
});
</script>

<style lang='scss' scoped>
.images {
  text-align: center;
  .van-image {
    margin-top: 0.5rem;
    width: 95%;
    border: 1px solid var(--custom-primary-color);
  }
}
</style>
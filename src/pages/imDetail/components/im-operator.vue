<template>
  <div class="im-operator">
    <van-icon size="40" name="phone-o" />
    <van-icon size="40" name="phone-o" />
    <van-icon size="40" name="phone-o" />
    <van-icon size="40" name="phone-o" />
    <van-icon size="40" name="phone-o" />
    <van-icon size="40" name="phone-o" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "im-operator",
});
</script>

<style lang='scss' scoped>
.im-operator{
    display: flex;
    justify-content: space-around;
}
</style>
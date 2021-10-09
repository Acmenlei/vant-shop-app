<template>
  <div class="send-message">
      <input type="text">
      <van-button disabled round color="var(--custom-primary-color)">发送</van-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "send-message",
});
</script>

<style lang='scss' scoped>
.send-message {
    display: flex;
    padding: .5rem;
    input {
        text-indent: 1em;
        border: none;
        outline: none;
        border-radius: 5rem;
        flex: 3;
        margin-right: .5rem;
    }
    .van-button {
        flex: .5;
    }
}
</style>
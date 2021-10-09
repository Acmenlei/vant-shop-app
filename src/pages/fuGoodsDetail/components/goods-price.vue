<template>
  <div class="goods-price">
    <div class="goods-amount">￥{{ 150 }}元</div>
    <div class="goods-copy-right">
      <p>版权 25元</p>
      <small>只限单次生产</small>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "goods-price",
});
</script>

<style lang='scss' scoped>
.goods-price {
  margin-top: 1rem;
  padding: .2rem;
  display: flex;
  align-items: center;
     .goods-amount,.goods-copy-right {
         border-radius: .5rem;
     }
  .goods-amount {
    border: 1px solid var(--custom-primary-color);
    padding: 0.5rem 1rem;
    font-size: 40px;
    color: #567;
  }
  .goods-copy-right {
    color: #567;
    padding: 0.1rem 0.5rem;
    text-align: center;
    margin-left: 1rem;
    background: var(--custom-primary-color);
  }
}
</style>
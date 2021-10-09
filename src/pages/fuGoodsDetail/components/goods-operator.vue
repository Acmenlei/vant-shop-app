<template>
  <van-row class="goods-operator">
    <van-col span="12" class="goods-operator-left">
      <van-row>
        <van-col span="5">
          <van-icon name="like-o"></van-icon>
          <span>点赞</span>
        </van-col>
        <van-col span="5">
          <van-icon name="star-o" />
          <span>收藏</span>
        </van-col>
        <van-col span="5">
          <van-icon name="arrow-left" />
          <span>转发</span>
        </van-col>
      </van-row>
    </van-col>
    <van-col span="12" class="goods-operator-right">
      <van-button round color="var(--custom-primary-color)"
        >购买版权</van-button
      >
      <van-button round color="var(--custom-primary-color)"
        >立即购买</van-button
      >
    </van-col>
  </van-row>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "goods-operator",
});
</script>

<style lang='scss' scoped>
.goods-operator {
  margin-top: 2rem;
  .goods-operator-left {
    .van-row {
      display: flex;
      justify-content: space-around;

      text-align: center;
    }
    .van-col {
      border: 1px solid var(--custom-primary-color);
      border-radius: 50%;
      padding: 0.2rem 0;
      span {
        display: block;
        font-size: 13px;
      }
    }
  }
  .goods-operator-right {
    .van-button {
      margin-left: 0.5rem;
    }
  }
}
</style>
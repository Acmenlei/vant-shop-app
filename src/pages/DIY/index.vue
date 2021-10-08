<template>
  <div id="diy">
    <div class="diy-person"></div>
    <div class="diy-price">
      <div class="diy-price-detail" v-for="item in 5">
        {{ item }}
      </div>
    </div>
    <div class="diy-clothes">
      <div class="diy-clothes-detail" v-for="item in 4">
        {{ item }}
      </div>
    </div>
    <div class="diy-operator">
      <div class="upload">上传</div>
      <div class="forward">转发</div>
      <div>
        <van-button color="var(--custom-primary-color)" url="/vant/mobile.html"
          >保存画稿</van-button
        >
        <van-button color="var(--custom-primary-color)" to="index"
          >立即生成</van-button
        >
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "diy",
  setup() {
    return {};
  },
});
</script>

<style lang='scss' scoped>
#diy {
  width: 90vw;
  height: 60vh;
  margin: 1rem auto;

  .diy-person {
    width: 100%;
    height: 100%;
    background: #999;
  }
  .diy-clothes,
  .diy-price {
    display: flex;
    align-items: center;
    text-align: center;
  }
  .diy-price {
    .diy-price-detail {
      flex: 1;
      background: #fff;
      padding: 2rem;
      border: 1px solid #f8f8f8;
    }
  }
  .diy-clothes {
    margin: 1rem 0;
    .diy-clothes-detail {
      flex: 1;
      background: #fff;
      border-radius: 50%;
      padding: 2rem;
      margin: 0.2rem;
    }
  }
  .diy-operator {
    padding: 1rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .upload,
    .forward {
      color: var(--custom-primary-color);
      border-radius: 50%;
      padding: 0.8rem 0.5rem;
      font-size: 13px;
      border: 1px solid var(--custom-primary-color);
    }
    .van-button {
      margin-left: 0.2rem;
    }
  }
}
</style>
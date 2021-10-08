<template>
  <div id="design">
    <van-sticky offset-top="3.2rem">
      <menu-slider-bar />
    </van-sticky>
    <div v-if="active == 0">
      <types />
    </div>
    <div v-if="active == 1">
      <clothes-style />
    </div>
    <div v-if="active == 2">
      <van-list
        class="design-container"
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="design-item" v-for="item of list" :key="item">
          设计师{{ item }}
        </div>
      </van-list>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import MenuSliderBar from "./components/menu-slider-bar.vue";
import ClothesStyle from "./components/clothes-style.vue";
// import Designer from "./components/designer.vue";
import Types from "./components/types.vue";
import { useSliderBar } from "./scritps/slider-bar";
import { useDesign } from "./scritps";

export default defineComponent({
  components: { MenuSliderBar, ClothesStyle, Types },
  name: "designer",
  setup() {
    const { active } = useSliderBar();
    const { onLoad, list, loading, finished } = useDesign();

    return {
      active,
      list,
      onLoad,
      loading,
      finished,
    };
  },
});
</script>

<style lang='scss' >
#design {
  display: flex;
  .design-container {
    margin-left: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    .design-item {
      text-align: center;
      line-height: 8rem;
      background: #fff;
      width: 8rem;
      margin: 0.5rem;
    }
  }
}
</style>
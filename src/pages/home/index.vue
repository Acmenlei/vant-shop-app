<template>
  <swiper-image />
  <menu-grid :data="rowOne" />
  <menu-grid :data="rowTwo" />
  <menu-grid :data="rowThree" />
  <waterfull-image />
</template>

<script setup lang='ts'>
import SwiperImage from "@/components/swiper/index.vue";
import MenuGrid from "@/components/menuGrid/index.vue";
import menuGridPages from "@/router/modules/menu-grid";
import WaterfullImage from "./components/waterfull-image.vue";

const menus: any = menuGridPages.children;
const rowOne = menus.slice(0, 3);
const rowTwo = menus.slice(3, 5);
const rowThree = menus.slice(5, 9);
</script>
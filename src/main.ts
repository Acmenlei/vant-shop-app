import { createApp } from "vue"
import App from "@/App.vue"
import Vant from "@/plugins/vant"
import router from "@/permission"
import V3WaterFull from "v3-waterfall"
import "@/assets/scss"
import "@/assets/iconfont/iconfont.css"

createApp(App).use(Vant).use(V3WaterFull).use(router).mount("#app");

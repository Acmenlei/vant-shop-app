import { createApp } from "vue"
import App from "@/App.vue"
import Vant from "@/plugins/vant"
import router from "@/permission"
import "@/assets/scss"

createApp(App).use(Vant).use(router).mount("#app");

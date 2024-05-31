import { createApp } from "vue";
import App from "./App.vue";

// 引入 router 和 store
import router from "./routers";
import pinia from "./store/index";

// 引入elementPlus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 引入自定义样式
import "@/styles/index.scss";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus);
app.use(router);
app.use(pinia);

router.isReady().then(() => {
  app.mount("#app");
});

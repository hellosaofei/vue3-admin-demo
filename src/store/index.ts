import { createPinia } from "pinia";
// 用于pinia持久化
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

export default pinia;

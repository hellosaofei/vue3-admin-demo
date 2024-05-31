import { ElMessage } from "element-plus";
import pinia from "@/store/index";
import { useRouter } from "vue-router";
import useUserStore from "@/store/modules/user";
import useAuthStore from "@/store/modules/auth";

const userStore = useUserStore(pinia);
const authStore = useAuthStore(pinia);
const router = useRouter();

export const initDynamicRouter = async () => {
  try {
    await authStore.getMenuList();
    authStore.flattenMenuList.forEach((item: any) => {
      router.addRoute("layout", item);
    });
    ElMessage({
      message: "初始化动态路由成功",
      type: "success",
    });
  } catch (error) {
    console.log("初始化路由错误", error);
  }
};

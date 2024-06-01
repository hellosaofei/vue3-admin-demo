import { ElMessage } from "element-plus";
import pinia from "@/store/index";
// 引入全局路由对象
import router from "@/routers/index";

// 引入store
import useAuthStore from "@/store/modules/auth";

const authStore = useAuthStore(pinia);

export const initDynamicRouter = async () => {
  // 向后端请求 动态路由 数据
  authStore
    .getMenuList()
    .then(() => {
      // 将得到的路由添加到全局路由对象 router上
      authStore.flattenMenuList.forEach((item: any) => {
        router.addRoute("layout", item);
      });
      // ElMessage({
      //   message: "初始化动态路由成功",
      //   type: "success",
      // });
    })
    .catch((error) => {
      console.log("初始化路由错误", error);
    });
};

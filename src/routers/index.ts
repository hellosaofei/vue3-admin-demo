import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { staticRouter, errorRouter } from "./modules/staticRouter";

import useUserStore from "@/store/modules/user";
import useAuthStore from "@/store/modules/auth";

import nprogress from "@/plugins/nprogress";
import { ElMessage } from "element-plus";
import pinia from "@/store";

import { initDynamicRouter } from "./modules/dynamicRouter";

const mode = "hash";
const ROUTER_WHITE_LIST = ["/403"];

const routerMode: any = {
  hash: () => createWebHashHistory(),
  history: () => createWebHistory(),
};

const router = createRouter({
  history: routerMode[mode](),
  routes: [...staticRouter, ...errorRouter],
});

const userStore = useUserStore(pinia);
const authStore = useAuthStore(pinia);

// 全局 前置路由守卫
router.beforeEach(async (to, from, next) => {
  nprogress.start();

  document.title = "Vue3-admin-demo";
  // // 如果没有token，表明尚未登录，如果前往的页面不在白名单内，强制跳转到login界面
  // if(!userStore.token){
  //   if(ROUTER_WHITE_LIST.includes(to.path)){return next()}
  //   return next({path:'/login'})
  // }
  // // 如果已经登录，还要前往login，强制跳转到home界面
  // if(to.path==='/login'){
  //   return next({path:"/"})
  // }

  // if (to.path == "/login") {
  //   if (userStore.token) {
  //     return next();
  //   } else {
  //     ElMessage({
  //       message: "没有token，请重新登录",
  //       grouping: true,
  //       type: "success",
  //     });
  //   }
  //   // resetRouter();
  //   // return next();
  // } else {
  //   if (ROUTER_WHITE_LIST.includes(to.path)) {
  //     return next();
  //   } else {
  //     if (userStore.token) {
  //       if (userStore.name) {
  //         return next();
  //       } else {
  //         await userStore.getInfo();
  //         ElMessage({
  //           message: `获取用户信息成功，即将跳转至${to.path}`,
  //           grouping: true,
  //           type: "success",
  //         });
  //         return next({ path: "/home" });
  //       }
  //     } else {
  //       return next({ path: "/login", replace: true });
  //     }
  //   }
  // }
  if (!authStore.realMenuList.length) {
    await initDynamicRouter();
    console.log("初始化路由成功");
    // return next({ ...to, replace: true });
  }
  return next();
});

// 全局 后置路由守卫
router.afterEach((to, from) => {
  nprogress.done();
});

// 处理路由跳转错误的问题
router.onError((error) => {
  nprogress.done();
  console.warn("路由错误", error.message);
});
export default router;

export function resetRouter() {
  const authStore = useAuthStore();
  authStore.flattenMenuList.forEach((route: any) => {
    const { name } = route;
    if (name && router.hasRoute(name)) {
      router.removeRoute(name);
    }
  });
}

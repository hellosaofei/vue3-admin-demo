import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import {
  layoutRouter,
  staticRouter,
  errorRouter,
} from "./modules/staticRouter";

import useUserStore from "@/store/modules/user";
import useAuthStore from "@/store/modules/auth";

import nprogress from "@/plugins/nprogress";
import { ElMessage } from "element-plus";

import { initDynamicRouter } from "./modules/dynamicRouter";

const mode = "hash";
const ROUTER_WHITE_LIST = ["/403"];

const routerMode: any = {
  hash: () => createWebHashHistory(),
  history: () => createWebHistory(),
};

const router = createRouter({
  history: routerMode[mode](),
  routes: [...layoutRouter, ...staticRouter, ...errorRouter],
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const authStore = useAuthStore();
  nprogress.start();

  document.title = "Vue3-admin-demo";

  // if (to.path === "/login") {
  //   if (userStore.token) {
  //     return next(from.fullPath);
  //   } else {
  //     ElMessage({
  //       message: "没有token，请重新登录",
  //       grouping: true,
  //       type: "success",
  //     });
  //   }
  //   resetRouter();
  //   return next();
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
  //       }
  //     } else {
  //       return next({ path: "/login", replace: true });
  //     }
  //   }
  // }
  if (!authStore.realMenuList.length) {
    await initDynamicRouter();
    return next({ ...to, replace: true });
  }
  next();
});

router.afterEach((to, from) => {
  nprogress.done();
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

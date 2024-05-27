import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import nprogress from "@/utils/nprogress";
import useAuthStore from "@/stores/modules/auth.ts";
import useUserStore from "@/stores/modules/user.ts";

const routerMode: any = {
  hash: () => createWebHashHistory(),
  history: () => createWebHistory(),
};

export const resetRouter = () => {
  const authStore = useAuthStore();
  authStore.getMenuList.forEach((route) => {
    const { name } = route;
    if (name && router.hasRoute(name)) {
      router.removeRoute(name);
    }
  });
};

const router = createRouter({
  history: routerMode[mode](),
  routes: [],
});
router.onError((error) => {
  nprogress.done();
  console.log("路由出现错误", error.message);
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const authStore = useAuthStore();

  nprogress.start();
});

router.afterEach((to, from) => {
  nprogress.done();
});

export default router;

// 用于鉴权与动态路由生成
import { defineStore } from "pinia";
import { getRouteList } from "@/api/route";

import {
  generateRoutes,
  generateFlattenRoutes,
  getShowStaticMenuList,
  getStaticMenuList,
  getShowDynamicMenuList,
  getAllBreadcrumbList,
} from "../tools/index";

import { staticRouter, errorRouter } from "@/routers/modules/staticRouter";
import router from "@/routers/index";

const authStore = defineStore("auth", {
  actions: {
    // 生成 菜单/导航栏 数据
    async getMenuList() {
      console.log("生成菜单的时候， route列表数据为：", router.getRoutes());
      console.log(
        "生成菜单的时候， route嵌套列表数据为：",
        router.options.routes
      );
      const res = await getRouteList();
      return new Promise<void>((resolve, reject) => {
        this.flattenMenuList = generateFlattenRoutes(res.data);
        this.realMenuList = getShowStaticMenuList(staticRouter)
          .concat(getShowStaticMenuList(errorRouter))
          .concat(generateRoutes(res.data, 0));
        // this.realMenuList = getStaticMenuList().concat(
        //   generateRoutes(res.data, 0)
        // );
        console.log("生成完毕，flatten", this.flattenMenuList);
        console.log("生成完毕，real", this.realMenuList);
        resolve();
      });
    },
  },
  state: () => {
    return {
      flattenMenuList: [], // 存储一维路由数据，只包含dynamicRoute部分而不包含静态路由
      realMenuList: [] as any[],
    };
  },
  getters: {
    getBreadcrumbList: (state) => getAllBreadcrumbList(state.realMenuList),
  },
});

export default authStore;

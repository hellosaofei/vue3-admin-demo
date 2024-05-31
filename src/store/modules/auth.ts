// 用于鉴权与动态路由生成
import { defineStore } from "pinia";
import { getRouteList } from "@/api/route";

import {
  generateRoutes,
  generateFlattenRoutes,
  getShowStaticMenuList,
  getShowDynamicMenuList,
  getAllBreadcrumbList,
} from "../tools/index";

import { staticRouter } from "@/routers/modules/staticRouter";

const authStore = defineStore("auth", {
  actions: {
    // 生成 菜单/导航栏 数据
    async getMenuList() {
      const res = await getRouteList();
      this.flattenMenuList = generateFlattenRoutes(res.data);
      this.realMenuList = getShowStaticMenuList(staticRouter).concat(
        generateRoutes(getShowDynamicMenuList(res.data), 0)
      );
    },
  },
  state: () => {
    return {
      flattenMenuList: [],
      realMenuList: [],
    };
  },
  getters: {
    getBreadcrumbList: (state) => getAllBreadcrumbList(state.realMenuList),
  },
});

export default authStore;

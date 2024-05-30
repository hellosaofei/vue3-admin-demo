// 用于鉴权与动态路由生成
import { defineStore } from "pinia";
import { getRouteList } from "@/api/route";

const authStore = defineStore("auth", {
  actions: {
    async getMenuList() {
      const res = await getRouteList();
      const { data } = res;
      this.flattenMenuList = [];
    },
  },
  state: () => {
    return {
      flattenMenuList: [],
      realMenuList: [],
    };
  },
  getters: {},
});

export default authStore;

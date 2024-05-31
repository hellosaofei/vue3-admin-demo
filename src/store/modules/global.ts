// 用于保存全局配置

import { defineStore } from "pinia";

import { pinia_prefix } from "@/config";

const globalStore = defineStore("global", {
  persist: {
    key: pinia_prefix + "global",
    storage: localStorage,
  },
  actions: {
    setState(...args: any) {
      this.$patch({
        [args[0]]: args[1],
      });
    },
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    setMenuItemColor() {
      this.menuItemBgColor = "#ffffff";
    },
  },
  state: () => {
    return {
      isCollapse: false,

      menuWidth: 200,

      // 布局模式 (纵向：vertical | 经典：classic | 横向：crosswise | 分栏：column)
      layout: "vertical",

      menuItemBgColor: "",
      // 是否显示  全局主题配置   界面
      isShowThemeConfig: false,
      // 是否显示 标签式导航栏
      isShowTab: true,
    };
  },
  getters: {},
});
export default globalStore;

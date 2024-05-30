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
      layout: "vertical",
      menuItemBgColor: "",
    };
  },
  getters: {},
});
export default globalStore;

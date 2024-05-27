import { defineStore } from "pinia";
import { KeepAlive } from "vue";
import useKeepAliveStore from "./keepAlive";

const keepAliveStore = useKeepAliveStore();

const tabStore = defineStore("tabs", {
  persist: {
    key: "Vue3-" + "tabs",
    storage: localStorage,
  },
  state: () => {
    return {
      tabList: [] as any[],
    };
  },
  actions: {
    addTab(tab: any) {
      const isExistTab = this.tabList.some((item: any) => {
        return item.path === tab.path;
      });
      if (isExistTab) {
        return;
      } else {
        if (
          !keepAliveStore.keepAliveName.includes(tab.name) &&
          tab.isKeepAlive == "0"
        ) {
          KeepAlive;
        }
      }
    },
    removeTab(tabPath: string, isCurrent: boolean = true) {
      if (isCurrent) {
        this.tabList.forEach((item, index) => {
          if (item.path !== tabPath) {
            return;
          }
          const nextTab = this.tabList[index + 1];
          if (nextTab) return;
          router.push(nextTab.path);
        });
      }
    },
    setTab(tabList: any[]) {
      this.tabList = tabList;
    },
  },
});

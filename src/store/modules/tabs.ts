// 用于保存标签式导航
import { defineStore } from "pinia";
import { pinia_prefix } from "@/config";
import { useRouter } from "vue-router";
// import useAliveRouteStore from "@/store/modules/keepAlive";
// const aliveRouteStore = useAliveRouteStore();
const router = useRouter();

interface TabItem {
  icon: string;
  title: string;
  path: string;
  name: string;
  isShowCloseIcon: boolean;
  isCache: boolean;
}

const useTabStore = defineStore("tabs", {
  persist: {
    key: pinia_prefix,
    storage: localStorage,
  },
  actions: {
    // 添加一个tab
    async addTab(tab: TabItem) {
      // 判断当前缓存中是否含有tab.path
      const isExist = this.tabList.some((item) => {
        return item.path === tab.path;
      });
      // 如果存在则直接退出
      if (isExist) {
        return;
      } else {
        // 如果不存在，
        // if (tab?.isCache) {
        //   aliveRouteStore.addRoute(tab.name);
        // }
        this.tabList.push(tab);
      }
    },
    // 删除一个tab
    async removeTab(tabPath: string, isCurrent: boolean) {
      // 跳转到下一个界面
      if (isCurrent) {
        this.tabList.forEach((item, index) => {
          if (item.path != tabPath) {
            return;
          }
          const nextTab = this.tabList[index + 1] || this.tabList[index - 1];
          if (nextTab) {
            router.push(nextTab.path);
          }
        });
      }
      // 从缓存中删除当前界面
      const tabItem = this.tabList.find((item) => item.path === tabPath);
      // tabItem?.isCache && aliveRouteStore.removeRoute(tabItem.name);
      this.tabList = this.tabList.filter((item) => item.path !== tabPath);
    },
  },
  state: () => {
    return {
      // 存取整个route对象
      tabList: [] as TabItem[],
    };
  },
  getters: {},
});

export default useTabStore;

// 用于缓存keepAlive的组件
import { defineStore } from "pinia";

const aliveRouteStore = defineStore("keepAlive", {
  state: () => {
    return {
      aliveRouteList: [] as string[],
    };
  },
  actions: {
    // 添加一个 routeName
    async addRoute(name: string) {
      !this.aliveRouteList.includes(name) && this.aliveRouteList.push(name);
    },
    // 删除一个 routeName
    async removeRoute(name: string) {
      this.aliveRouteList = this.aliveRouteList.filter((item) => item !== name);
    },
    // 将aliveRouteList 替换为一个新的列表
    async setAliveList(routeList: string[] = []) {
      this.aliveRouteList = routeList;
    },
  },
  getters: {},
});

export default aliveRouteStore;

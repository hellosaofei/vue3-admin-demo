// 用于缓存keepAlive的组件
import { defineStore } from "pinia";

const aliveRouteStore = defineStore("keepAlive", {
  state: (): any => {
    return {
      aliveRouteList: [],
    };
  },
  actions: {
    async addRoute(name: string) {
      !this.aliveRouteList.includes(name) && this.aliveRouteList.push(name);
    },
    async removeRoute(name: string) {
      this.aliveRouteList = this.aliveRouteList.filter(
        (item: any) => item !== name
      );
    },
    async setAliveList(routeList: string[] = []) {
      this.aliveRouteList = routeList;
    },
  },
  getters: {},
});

export default aliveRouteStore;

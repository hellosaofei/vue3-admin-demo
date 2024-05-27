import { defineStore } from "pinia";

const userStore = defineStore("keepAlive", {
  state: (): any => {
    return {
      keepAliveName: [],
    };
  },
  actions: {
    // 向数组中添加一个routeName
    addKeepAliveName(name: string) {
      !this.keepAliveName.includes(name) && this.keepAliveName.push(name);
    },
    // 从数组中删除一个routeName
    removeAliveName(name: string) {
      this.keepAliveName = this.keepAliveName.filter((item: string) => {
        return item !== name;
      });
    },
    // 重置
    setKeepAliveName(keepAliveName: string[] = []) {
      this.keepAliveName = keepAliveName;
    },
  },
  getters: {},
});

export default userStore;

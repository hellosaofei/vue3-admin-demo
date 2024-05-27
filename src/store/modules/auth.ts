import { defineStore } from "pinia";

const authStore = defineStore("auth", {
  actions: {},
  state: () => {
    return {
      // 扁平化路由数据
      menuList: [],
      // 递归得到的导航栏数据
      roleList: [],
      // 按钮权限
      buttonList: [],
      // 用户信息
      loginUser: {
        userId: "",
        loginName: "",
        sex: "",
        avatar: "",
      },
    };
  },
  getters: {
    getButtonList: (state) => state.buttonList,
    getMenuList: (state) => state.menuList,
  },
});

export default authStore;

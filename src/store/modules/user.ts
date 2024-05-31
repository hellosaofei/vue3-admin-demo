// 用于保存用户token、info等信息
import { defineStore } from "pinia";
import { userLogin, userLogout, getUserInfo } from "@/api/user";
import { pinia_prefix } from "@/config";

// import { initDynamicRouter } from "@/routers/modules/dynamicRouter";
const useUserStore = defineStore("user", {
  persist: {
    key: pinia_prefix + "user",
    storage: localStorage,
  },
  actions: {
    resetState() {
      this.token = "";
      this.name = "";
      this.avatar = "";
    },
    login(userInfo: any) {
      const { username, password } = userInfo;
      return new Promise<void>((resolve, reject) => {
        userLogin({ username: username.trim(), password: password })
          .then((response) => {
            const { data } = response;
            this.token = data.token;

            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    // 根据token向后端请求用户数据
    getInfo() {
      return new Promise<void>((resolve, reject) => {
        //获取用户信息时，是拿state中存储的token作为默认参数去向后端请求的
        getUserInfo(this.token)
          .then((response) => {
            const { code, data } = response;
            if (code !== 20000) {
              return reject("后端未返回正确数据");
            }
            if (!data) {
              return reject("验证失败请重新登陆");
            }
            const { name, avatar } = data;
            this.name = name;
            this.avatar = avatar;
            // initDynamicRouter();
            resolve(); //将用户信息交出去
          })
          .catch((error) => {
            reject(error); //抛出错误信息
          });
      });
    },
    logout() {
      return new Promise<void>((resolve, reject) => {
        userLogout(this.token)
          .then(() => {
            resetRouter();
            this.resetState();
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  state: () => {
    return {
      token: "",
      name: "",
      avatar: "",
    };
  },
  getters: {},
});

export default useUserStore;

import { defineStore } from "pinia";

const userStore = defineStore("user", {
  persist: {
    key: "V3-user",
    storage: localStorage,
  },
  state: () => {
    return {
      token: "",
    };
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
  },
  getters: {},
});

export default userStore;

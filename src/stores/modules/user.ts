import { defineStore } from "pinia";
import { UserState } from "@/stores/interface";
import piniaPersistConfig from "@/stores/helper/persist";

export const useUserStore = defineStore({
  id: "my-system-user",
  state: (): UserState => ({
    token: "",
    userInfo: { name: "谭海华" }
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token;
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState["userInfo"]) {
      this.userInfo = { ...userInfo, name: "谭海华" };
    }
  },
  persist: piniaPersistConfig("my-system-user")
});

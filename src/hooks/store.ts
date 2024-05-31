import useAuthStore from "@/store/modules/auth";
import useGlobalStore from "@/store/modules/global";
import useUserStore from "@/store/modules/user";
import useAliveRouteStore from "@/store/modules/keepAlive";
import useTabStore from "@/store/modules/tabs";

const useStoreCase: any = () => {
  const userStore = useUserStore();
  const authStore = useAuthStore();
  const globalStore = useGlobalStore();
  const aliveRouteStore = useAliveRouteStore();
  const tabStore = useTabStore();
  return { authStore, globalStore, userStore, aliveRouteStore, tabStore };
};

export default useStoreCase;

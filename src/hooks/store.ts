import useAuthStore from "@/store/modules/auth.ts";
import useGlobalStore from "@/store/modules/global.ts";
import useUserStore from "@/store/modules/user";

export default function useStore() {
  const userStore = useUserStore();
  const authStore = useAuthStore();
  const globalStore = useGlobalStore();
  return { authStore, globalStore, userStore };
}

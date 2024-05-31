import { computed } from "vue";
import { useRoute } from "vue-router";

export default function useConfigCase() {
  const route = useRoute();

  const activeMenu = computed(
    () => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string
  );

  return { activeMenu };
}

import { useRoute, useRouter } from "vue-router";

export default function useRouteCase() {
  const route = useRoute();
  const router = useRouter();

  return { route, router };
}

<script lang="ts" setup>
import { ref, watch } from "vue";
import { type RouteLocationMatched, useRoute, useRouter } from "vue-router";
// import { useRouteListener } from "@/hooks/useRouteListener";
import { compile } from "path-to-regexp";

const route = useRoute();
const router = useRouter();
// const { listenerRouteChange } = useRouteListener();

/** 定义响应式数据 breadcrumbs，用于存储面包屑导航信息 */
const breadcrumbs = ref<RouteLocationMatched[]>([]);

/** 获取面包屑导航信息 */
const getBreadcrumb = () => {
  console.log("正在获取面包屑导航信息", route.matched);
  let matched = route.matched.filter((item) => item.meta?.title);
  const first = matched[0];

  if (!isHome(first)) {
    matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
  }
  breadcrumbs.value = matched;
};

/** 编译路由路径 */
const pathCompile = (path: string) => {
  const toPath = compile(path);
  return toPath(route.params);
};

const isHome = (route: any) => {
  const name = route && route.name;
  if (!name) {
    return false;
  }
  if (route.path == "/home" || route.path == "/") {
    return true;
  }
};
/** 处理面包屑导航点击事件 */
const handleLink = (item: RouteLocationMatched) => {
  const { redirect, path } = item;
  if (redirect) {
    router.push(redirect as string);
    return;
  }
  router.push(pathCompile(path));
};

// /** 监听路由变化，更新面包屑导航信息 */
// listenerRouteChange((route) => {
//   if (route.path.startsWith("/redirect/")) return;
//   getBreadcrumb();
// }, true);
watch(
  () => route.fullPath,
  () => {
    getBreadcrumb();
  }
);
</script>

<template>
  <el-breadcrumb>
    <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
      <span
        v-if="
          item.redirect === 'noRedirect' || index === breadcrumbs.length - 1
        "
        class="no-redirect"
      >
        {{ item.meta.title }}
      </span>
      <a v-else @click.prevent="handleLink(item)">
        {{ item.meta.title }}
      </a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
.el-breadcrumb {
  line-height: var(--v3-navigationbar-height);
  .no-redirect {
    color: var(--el-text-color-placeholder);
  }
  a {
    font-weight: normal;
  }
}
</style>

<template>
  <el-container class="layout-container">
    <div class="layout-column">
      <el-scrollbar>
        <div></div>
      </el-scrollbar>
    </div>
    <el-aside
      class="layout-aside"
      :style="{
        width: !globalStore.isCollapse
          ? globalStore.menuWidth + 'px'
          : settings.columnMenuCollapseWidth,
      }"
    ></el-aside>
    <el-container>
      <el-header class="layout-header">
        <Header></Header>
      </el-header>
      <el-main class="layout-main">
        <Main></Main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" name="">
import Logo from "../components/Logo/index.vue";

import useAuthStore from "@/store/modules/auth";
import useGlobalStore from "@/store/modules/global";

import { ref, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const globalStore = useGlobalStore();

const menulist = computed(() => {
  authStore.showMenuList.filter((item: any) => {
    item.meta.isHide == "1";
  });
});
const columnActive = ref("");
const subMenuList = ref([]);

const activeMenu = computed(() => {
  (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string;
});

watch(
  () => globalStore.isDark,
  () => {
    menuBLSColor.value = globalStore.setMenuBLSColor();
  },
  {
    deep: true,
    immediate: true,
  }
);
watch(
  () => [menuList, route],
  () => {},
  {
    deep: true,
    immediate: true,
  }
);
</script>

<style></style>

<template>
  <el-container class="layout-container br-10">
    <el-aside
      class="layout-aside transition-all"
      :style="{
        width: !globalStore.isCollapse ? globalStore.menuWidth + 'px' : '70px',
      }"
    >
      <Logo
        :isCollapse="globalStore.isCollapse"
        :layout="globalStore.layout"
      ></Logo>
      <el-menu
        :default-active="activeMenu"
        :collapse="globalStore.isCollapse"
        :collapse-transition="true"
      >
        <AsideSubMenu :menuList="authStore.realMenuList"></AsideSubMenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="layout-header">
        <Header></Header>
      </el-header>
      <el-main class="layout-main">
        <AppMain></AppMain>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { Logo, AppMain, Header } from "@/layout/components/index";
import AsideSubMenu from "./components/AsideSubMenu.vue";

import useConfigCase from "@/hooks/config";

import useAuthStore from "@/store/modules/auth";
import useGlobalStore from "@/store/modules/global";
const authStore = useAuthStore();
const globalStore = useGlobalStore();

const { activeMenu } = useConfigCase();

const router = useRouter();

onMounted(() => {
  console.log(router);
  console.log(authStore.getBreadcrumbList);
});
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .layout-aside {
    z-index: 10; // 左侧菜单层级
    padding-right: 4px; // 左侧布局右边距（用于悬浮和选中更明显）
    padding-left: 4px; // 左侧布局左边距（用于悬浮和选中更明显）
    background-color: #282c34;
    border-right: none;
    // box-shadow: $aside-menu-box-shadow; // 左侧布局右边框阴影
  }
  .layout-header {
    height: 56px;
    background-color: var(--el-header-bg-color);
  }
  .layout-main {
    box-sizing: border-box;
    padding: 0;
    overflow-x: hidden;
    background-color: var(--el-bg-color);
  }
}

// 去除菜单右侧边框
.el-menu {
  border-right: none;
  background-color: #282c34;
  width: 100% !important;
}
.el-menu-item {
  background-color: #282c34;
}
.layout-scrollbar {
  width: 100%;
  height: calc(100vh - 56px);
}
</style>

<style lang="scss">
/** 菜单悬浮折叠宽度 */
.el-menu--collapse {
  width: 70px !important;
}
</style>

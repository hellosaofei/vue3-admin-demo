<template>
  <div class="app-wrapper br-10 clearfix" :class="layoutClasses">
    <SideBar class="sidebar-container" />
    <div class="main-container">
      <div class="app-header">
        <Header></Header>
      </div>
      <AppMain class="app-main"></AppMain>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppMain, Header } from "@/layout/components/index";
import SideBar from "./components/SideBar.vue";

import { computed } from "vue";

import useGlobalStore from "@/store/modules/global";

const globalStore = useGlobalStore();

const layoutClasses = computed(() => {
  return {
    hideSidebar: globalStore.isCollapse,
  };
});
</script>

<style lang="scss" scoped>
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
// 总容器
.app-wrapper {
  position: relative;
  width: 100%;
  min-height: 100%;
}

// 侧边 导航栏区
.sidebar-container {
  background-color: #282c34;
  transition: width 0.5s;
  //--v3-sidebar-width
  width: var(--v3-sidebar-width);
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  border-radius: 10px 0 0 10px;
  border-right: 0;
}

// 主内容区
.main-container {
  min-height: 100%;
  transition: margin-left 0.5s;
  margin-left: var(--v3-sidebar-width);
  position: relative;
}
// header 区域
.app-header {
  position: relative;
  z-index: 9;
  border-bottom: 1px;
}
// 内容区域
.app-main {
  min-height: calc(100vh-var(--v3-navigationbar-height));
  position: relative;
  overflow: hidden;
}
// 左侧导航栏折叠后的 宽度
.hideSidebar {
  .sidebar-container {
    width: var(--v3-sidebar-hide-width) !important;
  }
  .main-container {
    margin-left: var(--v3-sidebar-hide-width);
  }
  .fixed-header {
    width: calc(100% - var(--v3-sidebar-hide-width));
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

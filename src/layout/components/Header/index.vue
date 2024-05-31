<template>
  <div class="header">
    <div class="header-left">
      <!-- 左侧菜单展开和折叠图标 -->
      <Collapse></Collapse>
      <!-- 面包屑 -->
      <BreadCrumb></BreadCrumb>
    </div>
    <div class="header-right">
      <!-- 主题配置 -->
      <ThemeSetting></ThemeSetting>
      <!-- 头像 AND 下拉折叠 -->
      <User></User>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Collapse, BreadCrumb, User, ThemeSetting } from "./components/index";
//   import useToolShow from "@/hooks/toolShow";

//   const { showTool } = useToolShow();
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 56px;
  .header-left {
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
  }
  .header-right {
    display: flex;
    align-items: center;
  }
}
</style>

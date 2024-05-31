<template>
  <el-dialog v-model="isShowThemeConfig" title="全局主题配置" width="800">
    <el-radio-group v-model="layout">
      <el-radio :value="'classic'">经典布局Classic</el-radio>
      <el-radio :value="'columns'">分栏布局Columns</el-radio>
      <el-radio :value="'vertical'">水平布局Vertical</el-radio>
      <el-radio :value="'horizontal'">纵向布局Horizontal</el-radio>
    </el-radio-group>
  </el-dialog>
</template>

<script setup lang="ts">
import useGlobalStore from "@/store/modules/global";

const globalStore = useGlobalStore();

import { storeToRefs } from "pinia";

const { layout, isShowThemeConfig } = storeToRefs(globalStore);
</script>

<style lang="scss" scoped></style>

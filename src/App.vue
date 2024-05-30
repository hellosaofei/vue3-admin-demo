<template>
  <el-config-provider>
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { useTheme } from "@/utils/theme.ts";

const { initThemeConfig } = useTheme();

// 初始化主题配置
initThemeConfig();
</script>

<style scoped></style>

<template>
  <el-tooltip content="主题配置">
    <el-icon
      class="koi-icon m-r-18px"
      :size="20"
      @click="isShowThemeConfig = !isShowThemeConfig"
    >
      <Setting />
    </el-icon>
  </el-tooltip>
</template>

<script setup lang="ts">
import useGlobalStore from "@/store/modules/global";
import { storeToRefs } from "pinia";

const globalStore = useGlobalStore();

const { isShowThemeConfig } = storeToRefs(globalStore);
</script>

<style lang="scss" scoped></style>

<template>
  <component :is="LayoutComponent[layout]" v-if="!isMobile"></component>

  <!-- <component :is="Layout"></component> -->
</template>

<script setup lang="ts">
import { type Component } from "vue";
import { useScreenStore } from "@/hooks/screen/index.ts";

import useGlobalStore from "@/store/modules/global";
// 引入不同布局的组件
import LayoutVertical from "./LayoutVertical/index.vue";
import LayoutColumn from "./LayoutColumn/index.vue";
import LayoutHorizontal from "./LayoutHorizontal/index.vue";

type LayoutType = "vertical" | "columns" | "horizontal" | string;

const LayoutComponent: Record<LayoutType, Component> = {
  vertical: LayoutVertical,
  columns: LayoutColumn,
  horizontal: LayoutHorizontal,
};

const globalStore = useGlobalStore();
// 获取布局格式
const layout = computed(() => {
  return globalStore.layout;
});

// 当前是否为移动端
const { isMobile } = useScreenStore();
</script>

<style lang="scss" scoped></style>

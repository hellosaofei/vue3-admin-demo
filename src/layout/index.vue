<template>
  <ThemeConfig></ThemeConfig>
  <component
    :is="LayoutComponent[globalStore.layout]"
    v-if="!isMobile"
  ></component>
  <component :is="LayoutMobile" v-else></component>
</template>

<script setup lang="ts">
import { type Component } from "vue";

import { ThemeConfig } from "./components";

// 从hooks中导入数据
import useStoreCase from "@/hooks/store";
import useScreenStore from "@/hooks/screen";

import {
  LayoutColumns,
  LayoutVertical,
  LayoutClassic,
  LayoutMobile,
  LayoutHorizontal,
} from "./LayoutPlan/index";

const { globalStore } = useStoreCase();
const { isMobile } = useScreenStore();

type LayoutType = "vertical" | "columns" | "classic" | "horizontal" | string;
const LayoutComponent: Record<LayoutType, Component> = {
  vertical: LayoutVertical,
  columns: LayoutColumns,
  classic: LayoutClassic,
  horizontal: LayoutHorizontal,
};
</script>

<template>
  <el-icon
    class="collapse-icon koi-icon"
    :size="20"
    @click="isCollapse = !isCollapse"
  >
    <el-icon v-if="!isCollapse"><Fold /></el-icon>
    <el-icon v-else><Expand /></el-icon>
  </el-icon>
</template>

<script setup lang="ts">
import useGlobalStore from "@/store/modules/global";

const globalStore = useGlobalStore();
import { storeToRefs } from "pinia";

const { isCollapse } = storeToRefs(globalStore);
</script>

<style lang="scss" scoped></style>

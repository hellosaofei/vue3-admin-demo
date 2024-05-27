<template>
  <el-container class="layout-container">
    <el-aside></el-aside>

    <el-container>
      <el-header class="layout-header"></el-header>
      <el-main class="layout-main"></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import useAuthStore from "@/store/modules/auth";

const route = useRoute();
const quthStore = useAuthStore();

const menuList = computed(() => {});
</script>

<style lang="scss" scoped></style>

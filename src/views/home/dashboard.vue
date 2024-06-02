<template>
  <el-input
    v-model="inputVal"
    style="width: 240px"
    placeholder="用于测试 keepalive"
  />
</template>

<script setup lang="ts" name="Dashboard">
import { ref } from "vue";

const inputVal = ref("");
</script>

<style lang="scss" scoped></style>

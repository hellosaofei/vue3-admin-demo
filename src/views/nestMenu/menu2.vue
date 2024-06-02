<template>
  <div>
    <p>menu2</p>
    <el-input
      v-model="inputVal"
      style="width: 240px"
      placeholder="用于测试 keepalive"
    />
  </div>
</template>

<script setup lang="ts" name="NestMenuPage1">
import { ref } from "vue";

const inputVal = ref("");
</script>

<style lang="scss" scoped></style>

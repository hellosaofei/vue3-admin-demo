<template>
  <template v-for="item in menuList" :key="item.path">
    <el-sub-menu
      v-if="item.children"
      :index="item.path"
      v-show="!item.meta.isHide"
    >
      <template #title>
        <el-icon><Stopwatch /></el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <AsideSubMenu :menuList="item.children" />
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="item.path"
      v-show="!item.meta.isHide"
      @click="handleMenuIsLink(item)"
    >
      <el-icon><Stopwatch /></el-icon>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
defineProps({
  menuList: {
    type: Array,
    require: true,
  },
});
</script>

<style lang="scss" scoped></style>

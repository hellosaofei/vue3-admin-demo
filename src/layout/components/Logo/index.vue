<template>
  <div
    class="logo-container"
    :class="layoutClass"
    v-show="globalStore.isShowLogo"
  >
    <img
      :src="logoUrl"
      alt="avatar"
      v-if="props.layout === 'vertical' || props.layout === 'mobile'"
    />
    <img
      class="m-l--3px m-r-12px koiLogoImg rounded-full select-none"
      :src="logoUrl"
      alt="avatar"
      v-if="props.layout === 'classic'"
    />
    <img
      class="m-l-6px m-r-12px koiLogoImg rounded-full select-none"
      :src="logoUrl"
      alt="avatar"
      v-if="props.layout === 'columns'"
    />
    <img
      class="m-l--6px m-r-12px koiLogoImg rounded-full select-none"
      :src="logoUrl"
      alt="avatar"
      v-if="props.layout === 'horizontal'"
    />
    <transition name="slide-fade">
      <span v-if="!globalStore.isCollapse" class="logo-title">
        Vue3 Admin Demo
      </span>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import useGlobalStore from "@/store/modules/global";

const globalStore = useGlobalStore();

// 接收父组件传递的参数
const props = defineProps({
  isCollapse: {
    require: false, // true显示，false隐藏
    type: Boolean,
  },
  layout: {
    default: "vertical", // 布局模式 (纵向：vertical | 分栏：columns | 经典：classic | 横向：horizontal )
    type: String,
  },
});

const logoUrl = ref("https://vitejs.cn/logo.svg");

const logoWidth = ref();
watch(
  () => globalStore.layout,
  () => {
    if (globalStore.layout == "classic" || globalStore.layout == "horizontal") {
      logoWidth.value = "220px";
    } else {
      logoWidth.value = "100%";
    }
  },
  {
    deep: true,
    immediate: true,
  }
);

const layoutClass = computed(() => {
  return {
    hideSideBar: globalStore.isCollapse,
    showSideBar: !globalStore.isCollapse,
  };
});
</script>

<style lang="scss" scoped>
// 导航栏未折叠时
.logo-container {
  width: 100%;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  // 用于固定logo
  position: absolute;
  top: 0;
  left: 0;
}
// 导航栏折叠后
.hideSideBar {
  img {
    width: 31px;
    height: 31px;
  }
}
// 导航栏未折叠
.showSideBar {
  padding: 0;
  img {
    width: 31px;
    height: 31px;
  }
  span {
    display: inline-block;
    margin-left: 5px;
    color: #fff;
  }
}
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

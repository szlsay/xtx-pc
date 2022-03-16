<template>
<app-navbar></app-navbar>
<header>header</header>
<div class="main">
<!-- <div class="box2">ddd</div> -->
<router-view>main</router-view>
</div>
<footer>footer</footer>
</template>

<script>
import AppNavbar from '@/components/app-navbar.vue'
export default {
  name: 'LayoutPage',
  components: {
    AppNavbar
  }
}
</script>

<style lang="less" scoped>
// @import url('~@/assets/styles/mixins.less');
// .box2{
//   .hoverShadow();
//   color: @xtxColor;
// }
</style>

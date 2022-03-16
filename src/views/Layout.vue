<template>
<nav>nav</nav>
<header>header</header>
<div class="main">
<!-- <div class="box2">ddd</div> -->
<router-view>main</router-view>
</div>
<footer>footer</footer>
</template>

<script>
export default {
  name: 'LayoutPage'
}
</script>

<style lang="less" scoped>
// @import url('~@/assets/styles/mixins.less');
// .box2{
//   .hoverShadow();
//   color: @xtxColor;
// }
</style>

<template>
  <div class="Main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    
  }
}
</script>

<!-- 添加"scoped"属性，使CSS样式只在当前组件生效 -->
<style scoped lang="less">

</style>

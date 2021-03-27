<template>
	<div class="Aside">
		<router-link to="/"><h1>浮生若梦</h1></router-link>
		<router-link to="/life">人生记事</router-link>
	</div>
</template>

<script>
export default {
  name: 'Aside',
  props: {
    
  }
}
</script>

<!-- 添加"scoped"属性，使CSS样式只在当前组件生效 -->
<style scoped lang="less">

</style>

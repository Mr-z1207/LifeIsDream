<template>
	<div class="Aside">
		<ul>
			<router-link to="/" v-slot="{ isActive }">
				<li :class="{ active: isActive }">浮生若梦</li>
			</router-link>
			<router-link to="/life" v-slot="{ isActive }">
				<li :class="{ active: isActive }">人生记事</li>
			</router-link>
			<router-link to="/mood" v-slot="{ isActive }">
				<li :class="{ active: isActive }">心情分享</li>
			</router-link>
			<li><a href="http://blog.mr1207.cn/">我的博客</a></li>
		</ul>
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
.Aside{
	a{
		color: #99CCFF;
		text-decoration: none;

		&:first-child li{
			margin-top: 60px;
			border-top: none;
		}
	}
	li{
		margin: 0 auto;
		padding: 10px;
		width: 85%;
		font-size: 20px;
		line-height: 1.7;
		font-weight: bold;
		border-top: 1px solid #89898979;
	}
	.active{
		background-color: #565753D0;
	}
}
</style>

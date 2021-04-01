<template>
	<el-container>
		<!-- 侧边栏 -->
		<el-aside class="asideWrapper" width="20%">
			<Aside></Aside>
		</el-aside>

		<!-- 主体内容 -->
		<el-container :style="{ height: containerHeight }">

			<!-- 头部 -->
			<el-header class="headerWrapper">
				<Header></Header>
			</el-header>

			<!-- 内容 -->
			<el-main>
				<Main></Main>
			</el-main>

			<!-- 底部 -->
			<el-footer class="footerWrapper">
				<Footer></Footer>
			</el-footer>

		</el-container>
	</el-container>
</template>

<script>
	import Aside from 'components/Aside.vue'
	import Header from 'components/Header.vue'
	import Main from 'components/Main.vue'
	import Footer from 'components/Footer.vue'

	export default {
		name: 'App',
		components: {
			Aside,
			Header,
			Main,
			Footer
		},
		data(){
			return {
				screenHeight: document.documentElement.clientHeight
			}
		},
		mounted(){
			var _this = this
			window.onresize = function() {
				_this.screenHeight = document.documentElement.clientHeight
			}
		},
		computed: {
			containerHeight(){
				return this.screenHeight + "px"
			}
		}
	}
</script>

<style lang="less">
#app {
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
.el-header {
	background-color: #35264F;
}
.el-aside {
	min-width: 150px;
	max-width: 250px;
	background-color: #1A1A1A;
}
.el-main {
	background-color: #FFFFFF;
}
.el-footer {
	background-color: #FFFFFF;
	border-top:  1px solid #ccc;
}
</style>

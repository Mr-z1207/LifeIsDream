<template>
	<el-container>
		<!-- 侧边栏 -->
		<el-aside>
			<Aside></Aside>
		</el-aside>

		<!-- 主体内容 -->
		<el-container class="containerWrapper" :style="{ height: asideHeight }">

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
			asideHeight(){
				return this.screenHeight + "px"
			}
		}
	}
</script>

<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

.el-header {
	background-color: #B3C0D1FF;
}
.el-aside {
	background-color: #D3DCE6;
}
.el-main {
	background-color: #E9EEF3;
}
.el-footer {
	background-color: #E9EEF3;
	border-top:  1px solid #ccc;
}
</style>

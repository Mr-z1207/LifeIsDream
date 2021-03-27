<template>
  <el-container>
    <!-- 侧边栏 -->
    <el-aside>
      <Aside></Aside>
    </el-aside>

    <!-- 左侧内容 -->
    <el-container>
        <!-- 头部 -->
        <el-header>
          <Header></Header>
        </el-header>

        <!-- 主要内容 -->
        <el-main>main</el-main>

        <!-- 底部 -->
        <el-footer>
          <Footer></Footer>
        </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Header from 'components/Header.vue'
import Aside from 'components/Aside.vue'
import Footer from 'components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Aside,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

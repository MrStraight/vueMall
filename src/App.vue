<template>
  <div id="app">
   <keep-alive>	<!-- 只获取一次json数据 优化性能   有这个标签的时候 会多出一个生命周期函数 activated -->
			 <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

<template>
	<div>
		<home-header></home-header>
		<home-nav></home-nav>
		<home-swiper></home-swiper>
		<home-icon></home-icon>
	</div>
</template>

<script>
	import HomeHeader from './components/header'
	import HomeNav from './components/HomeNav'
	import HomeSwiper from './components/HomeSwiper'
	import HomeIcon from './components/HomeIcon'
export default {
	name: 'Home',
	components:{
		HomeHeader,
		HomeNav,
		HomeSwiper,
		HomeIcon
	}
}
</script>

<style scoped="scoped">
	.search{
		font-size: 4.1rem;
	}
</style>

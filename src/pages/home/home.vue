<template>
	<div>
		<home-header></home-header>
		<home-nav></home-nav>
		<home-swiper></home-swiper>
		<home-icon></home-icon>
		<home-shopping></home-shopping>
	</div>
</template>

<script>
	import HomeHeader from './components/header'
	import HomeNav from './components/HomeNav'
	import HomeSwiper from './components/HomeSwiper'
	import HomeIcon from './components/HomeIcon'
	import HomeShopping from './components/HomeShopping'
export default {
	name: 'Home',
	components:{
		HomeHeader,
		HomeNav,
		HomeSwiper,
		HomeIcon,
		HomeShopping
	}
}
</script>

<style scoped="scoped">

</style>

<template>
	<div class="HomeWrapper">
			<home-header></home-header>
			<home-nav></home-nav>
			<home-swiper></home-swiper>
			<home-icon></home-icon>
			<home-shopping></home-shopping>
			<home-new-product></home-new-product>
	</div>
</template>

<script>
	import HomeHeader from './components/header'
	import HomeNav from './components/HomeNav'
	import HomeSwiper from './components/HomeSwiper'
	import HomeIcon from './components/HomeIcon'
	import HomeShopping from './components/HomeShopping'
	import HomeNewProduct from './components/HomeNewProduct'
export default {
	name: 'Home',
	components:{
		HomeHeader,
		HomeNav,
		HomeSwiper,
		HomeIcon,
		HomeShopping,
		HomeNewProduct
	}
}
</script>

<style scoped="scoped">

</style>

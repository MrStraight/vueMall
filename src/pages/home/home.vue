<template>
	<div class="HomeWrapper">
			<home-header></home-header>
			<home-nav></home-nav>
			<home-swiper></home-swiper>
			<home-icon></home-icon>
			<home-shopping></home-shopping>
			<home-new-product></home-new-product>
			<set></set>
			<home-style></home-style>
			<home-hot></home-hot>
			<guess-like></guess-like>
	</div>
</template>

<script>
	import HomeHeader from './components/header'
	import HomeNav from './components/HomeNav'
	import HomeSwiper from './components/HomeSwiper'
	import HomeIcon from './components/HomeIcon'
	import HomeShopping from './components/HomeShopping'
	import HomeNewProduct from './components/HomeNewProduct'
	import Set from './components/set'
	import HomeStyle from './components/style'
	import HomeHot from './components/HomeHot'
	import GuessLike from './components/GuessLike'
export default {
	name: 'Home',
	components:{
		HomeHeader,
		HomeNav,
		HomeSwiper,
		HomeIcon,
		HomeShopping,
		HomeNewProduct,
		Set,
		HomeStyle,
		HomeHot,
		GuessLike
	}
}
</script>

<style scoped="scoped">

</style>

<template>
	<div class="HomeWrapper">
			<home-header></home-header>
			<home-swiper></home-swiper>
			<home-icon></home-icon>
			<home-shopping></home-shopping>
			<home-new-product></home-new-product>
			<set></set>
			<home-style></home-style>
			<home-hot></home-hot>
			<guess-like></guess-like>
			<home-footer></home-footer>
	</div>
</template>

<script>
	import HomeHeader from './components/header'
	import HomeSwiper from './components/HomeSwiper'
	import HomeIcon from './components/HomeIcon'
	import HomeShopping from './components/HomeShopping'
	import HomeNewProduct from './components/HomeNewProduct'
	import Set from './components/set'
	import HomeStyle from './components/style'
	import HomeHot from './components/HomeHot'
	import GuessLike from './components/GuessLike'
	import HomeFooter from './components/footer'
export default {
	name: 'Home',
	components:{
		HomeHeader,
		HomeSwiper,
		HomeIcon,
		HomeShopping,
		HomeNewProduct,
		Set,
		HomeStyle,
		HomeHot,
		GuessLike,
		HomeFooter
	}
}
</script>

<style scoped="scoped">

</style>

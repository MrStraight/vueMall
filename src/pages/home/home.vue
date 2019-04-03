<template>
	<div class="HomeWrapper">
			<home-header :city="city"></home-header>
			<home-swiper :SwiperList="HomeSwiperList"></home-swiper>
			<home-icon :IconsList="HomeIconsList"></home-icon>
			<home-shopping :ShoppingList="HomeShoppingList"></home-shopping>
			<home-new-product></home-new-product>
			<set :SetList="HomeSetList"></set>
			<home-style></home-style>
			<home-hot></home-hot>
			<guess-like :GuessLikeList="HomeGuessLikeList"></guess-like>
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
	
	import axios from 'axios'
export default {
	name: 'Home',
	data(){
		return{
			city:'',
			HomeSwiperList:[],
			HomeIconsList:[],
			HomeShoppingList:[],
			HomeSetList:[],
			HomeGuessLikeList:[]
		}
	},
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
	},
	methods:{
		getAxiosInfo(){
			axios.get('./api/index.json').then(this.getAxiosInfoSucc)
		},
		getAxiosInfoSucc(res){
			let AxiosData = res.data.data
			if(res.data.ret){
				this.city = AxiosData.city
				this.HomeSwiperList = AxiosData.HomeSwiperList
				this.HomeIconsList = AxiosData.HomeIconsList
				this.HomeShoppingList = AxiosData.HomeShoppingList
				this.HomeSetList = AxiosData.HomeSetList
				this.HomeGuessLikeList = AxiosData.HomeGuessLikeList
			}
		}
	},
	mounted() {
		this.getAxiosInfo()
	}
}
</script>

<style scoped="scoped">

</style>

<template>
	<div class="CityHome">
		<city-header></city-header>
		<city-list :HotCities="HotCities" :Cities="Cities"></city-list>
	</div>
</template>

<script>
	
	import CityHeader from './components/CityHeader'
	import CityList from './components/CityList'
	import axios from 'axios'
	export default{
		name:'CityHome',
		data(){
			return{
				HotCities:[],
				Cities:{}
			}
		},
		components:{
			CityHeader,
			CityList
		},
		methods:{
			getAxiosInfo(){
				axios.get('./api/city.json').then(this.getAxiosInfoSucc)
			},
			getAxiosInfoSucc(res){
				var AxiosData = res.data.data 
				this.HotCities = AxiosData.hotCities
				this.Cities = AxiosData.cities
				
			}
		},
		mounted() {
			this.getAxiosInfo()
			
		},
		computed:{
			letters (){
				const letters = []
				for(let i in this.Cities){
					letters.push(i)
				}
				return letters
			}
		}
	}
</script>

<style scoped="scoped">
	
</style>

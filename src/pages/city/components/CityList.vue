<template>
	<div class="CityList">
		<div class="CityTitle">		
			当前城市
		</div>
		<div class="NowCity">
			{{this.StateCity}}
		</div>
		<div class="CityTitle">
			热门城市
		</div>
		<div class="HotCity">		<!-- 热门城市最外层 -->
			<ul class="HotCityUl">
				<li>全国</li>
				<li v-for="item of HotCities" :key="item.id" @click="ChangeCity(item.name)">{{item.name}}</li>
			</ul>
		</div>
		<div class="MoreCity">
			<div class="CityTitle">
				更多城市
			</div>
			<ul class="MoreCityUl">
				<li 
					v-for="(item,key) of Cities" 
					:key="item.key"
					@click="FindKeyLetter"
					>
					{{key}}
				</li>
			</ul>
		</div>
		<!-- A开头的城市 -->
		<div class="CityItem" v-for="(item,key) of Cities" :key="item.key" :ref="key">
			<div class="CityTitle" id="a">{{key}} (以{{key}}为开头的城市名)</div>
			<ul class="HotCityUl">
				<li v-for="innerItem of item" :key="innerItem.id" @click="ChangeCity(innerItem.name)">{{innerItem.name}}</li>
			</ul>
		</div>
		<!-- 回到顶部 -->
		<div class="BackTop" @click="BackTop" v-if="ShowBackTop">
			<span class="iconfont icon-top"></span>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		name:'CityList',
		data(){
			return{
				letter:'',
				distance:'',
				ShowBackTop:false
			}
		},
		props:{
			HotCities:Array,
			Cities:Object
		},
		computed:{
			...mapState({
				StateCity:'city'
			})
		},
		mounted() {
			addEventListener('scroll',this.ListenTop)
		},
		methods:{
			ChangeCity(e){
				this.$router.push('/')
				this.$store.commit('ChangeCity',e)
			},
			ListenTop(){	//判断距离顶部250就显示bancktop按钮
				if(window.pageYOffset > 250 || document.documentElement.scrollTop > 250){
					this.ShowBackTop = true
				}else{
					this.ShowBackTop = false
				}
			},
			destroyed () {
			  window.removeEventListener('scroll', this.ListenTop)
			},
			FindKeyLetter(e){		
				this.letter =  e.target.innerText
			},
			BackTop(){		//返回顶部
				let distance = document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
				let step = distance/50; //每步的距离
				(function jump(){
				if(distance > 0){
				distance-=step;
				window.scrollTo(0,distance);
				setTimeout(jump,5)
				}
				})();
			}
		},
		watch:{
			
			letter(){
				if(this.letter){
					const element = this.$refs[this.letter][0]
					element.scrollIntoView();		//scrollIntoView跳转到DOM元素
				}
			}
		}
	}
</script>

<style scoped="scoped">
	a{
		color: #333;
	}
	a:visited{
		color: #333;
	}
	a:hover{
		color: #333;
		text-decoration: none;
	}
	a:active{
		color: #333;
	}
	.CityTitle{
		line-height: 2rem;
		height: 2rem;
		font-size: 0.9rem;
		font-weight: 600;
		padding-left: 0.9375rem;
		background-color: #eee;
		border-bottom: 0.06rem solid #ddd;
	}
	.NowCity{
		color: #da0000;
		font-size: 0.9rem;
		font-weight: 800;
		padding-left: 1.125rem;
		line-height: 2.7rem;
		height: 2.7rem;
		border-bottom: 0.06rem solid #ddd;
	}
	.HotCityUl,.MoreCityUl{
		display: flex;
		flex-wrap: wrap;
		text-align: center;
	}
	.HotCityUl > li{
		width: 33.33%;
		font-size: 0.9rem;
		color: #444;
		border: 0.05rem solid #eee;
		box-sizing: border-box;
		padding: .75rem 0;
	}
	
	.MoreCityUl > li{
		width: 20%;
		font-size: 0.9rem;
		color: #444;
		border: 0.05rem solid #eee;
		box-sizing: border-box;
		padding: .75rem 0;
	}
	.BackTop{
		display: inline-block;
		position: fixed;
		bottom: 1.3rem;right: 1rem;
	}
	.BackTop span{
		font-size: 2.6rem;
	}
</style>

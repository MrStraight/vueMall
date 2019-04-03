<template>
	<div class="sss">
		<div class="wrap">
			<div class="header">
				<!-- <div class="logo"><img src="../../../assets/imgs/logo.png"></div> -->
				<router-link class="logo" tag="a" to="/"><span></span></router-link>
				<router-link class="input" tag="div" to="/search"><i class="iconfont icon-sousuo"></i>搜索商品</router-link>
				<router-link class="city" tag="div" to="/city">{{this.city}}<span class="iconfont icon-down"></span></router-link>
			</div>
			<div class="HomeNav">
				 <ul>
					 <router-link tag="li" to="/" class="active">首页</router-link>
					 <router-link tag="li" to="/new">新品</router-link>
					<li>每日特卖</li>
					<li>沙发床</li>
					<li>床垫</li>
					<li>实木家具</li>
					<li>地板</li>
				 </ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'HomeHeader',
		props:{
			city:String
		},
		data(){
			return{
				
			}
		},
	}
</script>

<style scoped="scoped">
	.fiex{
		position: fixed;
		top: 0;
		z-index: 999;
		background-color: #fff;
		width: 100%;
	}
	.sss{
		position: sticky;
		top: 0;
		z-index: 99999;
	}
	.wrap{
		z-index: 999;
		width: 100%; 
		background-color: #fff;
	}
	.header{
		
		display: flex;
		flex-wrap:nowrap;
		padding: 0.4rem 0.7rem;
		
	}
	.header .logo span{
		display: inline-block;
		width: 5.6875rem;
		height: 1.375rem;
		background: url(../../../assets/imgs/logo.png) center center no-repeat;
		background-size: cover;
	}
	.input{
		height: 1.6875rem;
		line-height: 1.6875rem;
		background-color: #eee;
		color: #aaa;
		text-align: center;
		border-radius: 0.3rem;
		width: 100%;
		margin: 0 1rem;
		white-space: nowrap;  
	}
	.city{
		font-size: 0.875rem;
		height: 1.625rem;
		line-height: 1.625rem;
		white-space: nowrap;  
	}
	
	
	.HomeNav{
		padding: 0.3125rem 0.2rem;
		
	}
	.HomeNav ul{
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-around;
	}
	.HomeNav ul li{
		white-space: nowrap;  
		overflow: hidden;
		font-size: 0.85rem;
		color: #666;
		padding: 0.2rem;
	}
</style>
<style>
	.active{
		border-bottom: 0.1rem solid #000;
	}
</style>
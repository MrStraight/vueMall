<template>
	<div class="header">
		<!-- <div class="logo"><img src="../../../assets/imgs/logo.png"></div> -->
		<router-link class="logo" tag="a" to="/"><span></span></router-link>
		<router-link class="input" tag="div" to="/search"><i class="iconfont icon-sousuo"></i>搜索商品</router-link>
		<router-link class="city" tag="div" to="/city">石家庄<span class="iconfont icon-down"></span></router-link>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="scoped">
	.header{
		background-color: #fff;
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
</style>

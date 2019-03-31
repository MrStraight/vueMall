<template>
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
</template>

<script>
	export default{
		name:'HomeNav'
	}
</script>

<style scoped="scoped">
	.HomeNav{
		padding: 0.3125rem 0.2rem;
	}
	.HomeNav ul{
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-around;
	}
	.HomeNav ul li{
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

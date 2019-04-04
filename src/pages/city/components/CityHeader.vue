<template>
	<div class="CityHeader">
		<router-link tag="div" to="/" class="back">
			<span class="iconfont icon-fanhui"></span>
		</router-link>
		<div class="title">
			切换城市
		</div>
	</div>
</template>

<script>
	export default{
		name:'CityHeader'
	}
</script>

<style scoped="scoped">
	.CityHeader{
	
		background-color: #fff;
		z-index: 2;
	}
	.back{
		position: absolute;
		top: 0;left: 0;
		padding: .85rem 0 0 0.9375rem;
		font-size: 1.25rem;
		font-weight: 900;
	}
	.title{
		text-align: center;
		font-size: 1.375rem;
		padding: 15px;
	}
</style>

<template>
	<div class="style">
		<div class="title">精选风格</div>
		<div class="img">
			<img src="@/assets/imgs/style1.jpg">
			<img src="@/assets/imgs/style2.jpg">
			<img src="@/assets/imgs/style3.jpg">
			<img src="@/assets/imgs/style4.jpg">
			<img src="@/assets/imgs/style5.jpg">
			<img src="@/assets/imgs/style6.jpg">
			<img src="@/assets/imgs/style7.jpg">
			<img src="@/assets/imgs/style8.jpg">
			<img src="@/assets/imgs/style9.jpg">
		</div>
	</div>
</template>

<script>
	export default{
		name:"HomeStyle"
	}
</script>

<style scoped="scoped">
	.title{
		font-size: 1.25rem;
		font-weight: 700;
		text-align: center;
		padding: .85rem .2rem;
	}
	.img{
		text-align: center;
		
	}
	.img img{
		width: 28%;
		padding: 0.3rem 0.3rem;
	}
</style>

<template>
	<div class="hot">
		<div class="title">热销榜</div>
			<div class="img">
				<img src="@/assets/imgs/hot.jpg">
			</div>
			<div class="info">
				<span class="iconfont icon-baojiaquotation2 yinhao"></span>
				<div class="text">近30天家具热销Top35，专属你的购物指南，24小时更新...<span class="addText">[全文]</span></div>
			</div>
	</div>
</template>

<script>
	export default{
		name:"HomeHot"
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
		height: 100%;
	}
	.img img{
		width: 90%;
	}
	.info{
		margin: 0.625rem 0 1.3rem;
	}
	.yinhao{
		font-size: 1.5rem;
		color: #999;
		margin: 2.5rem 1rem ;
	}
	.text{
		padding: 0rem 2.7rem;
		color: #666666;
		font-size: 1rem;
		line-height: 1.2rem;
	}
	.addText{
		color: #c81c28;
		
		}
</style>

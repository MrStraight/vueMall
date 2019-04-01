<template>
	<div class="hot">
		<div class="title">猜你喜欢</div>
		<div class="GuessLikeList">
			<div class="GuessItem">
				<div class="img"><img src="@/assets/imgs/like1.jpg"></div>
				<div class="info">
					<p class="price">￥<span>2250</span> <span class="tejia">特价</span></p>
					<p class="text">人气爆款 栅栏式简约设计 臻选美国进口白杨木1.2米/1.5米/1.8米床</p>
					<p class="sell">已售50207</p>
				</div>
			</div>
			<div class="GuessItem">
				<div class="img"><img src="@/assets/imgs/like1.jpg"></div>
				<div class="info">
					<p class="price">￥<span>2250</span></p>
					<p class="text">人气爆款 栅栏式简约设计 臻选美国进口白杨木1.2米/1.5米/1.8米床</p>
					<p class="sell">已售50207</p>
				</div>
			</div>
			<div class="GuessItem">
				<div class="img"><img src="@/assets/imgs/like1.jpg"></div>
				<div class="info">
					<p class="price">￥<span>2250</span></p>
					<p class="text">人气爆款 栅栏式简约设计 臻选美国进口白杨木1.2米/1.5米/1.8米床</p>
					<p class="sell">已售50207</p>
				</div>
			</div>
			<div class="GuessItem">
				<div class="img"><img src="@/assets/imgs/like1.jpg"></div>
				<div class="info">
					<p class="price">￥<span>2250</span></p>
					<p class="text">人气爆款 栅栏式简约设计 臻选美国进口白杨木1.2米/1.5米/1.8米床</p>
					<p class="sell">已售50207</p>
				</div>
			</div>
			<div class="GuessItem">
				<div class="img"><img src="@/assets/imgs/like1.jpg"></div>
				<div class="info">
					<p class="price">￥<span>2250</span></p>
					<p class="text">人气爆款 栅栏式简约设计 臻选美国进口白杨木1.2米/1.5米/1.8米床</p>
					<p class="sell">已售50207</p>
				</div>
			</div>
			<div class="GuessItem">
				<div class="img"><img src="@/assets/imgs/like1.jpg"></div>
				<div class="info">
					<p class="price">￥<span>2250</span></p>
					<p class="text">人气爆款 栅栏式简约设计 臻选美国进口白杨木1.2米/1.5米/1.8米床</p>
					<p class="sell">已售50207</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"GuessLike"
	}
</script>

<style scoped="scoped">
	img{
		width: 95%;
		
	}
	.img{
		text-align: center;
	}
	.title{
		font-size: 1.25rem;
		font-weight: 700;
		text-align: center;
		padding: 0rem .2rem 1.3rem;
	}
	.GuessLikeList{
		margin: 0 1rem;
		display: flex;
		flex-wrap:wrap;
		margin-bottom: 1.4rem;
	}
	.GuessItem{
		width: 50%;
		display: inline-block;
	}
	.info{
		line-height: 1.4rem;
		padding-left: 0.5rem;
	}
	.price,.price span{
		color: #c81c28;
		font-size: 0.9375rem;
	}
	.tejia{
		background-color: #c81c28;
		color: #fff !important;
		padding: 0.125rem 0.4rem;
		border-radius: 0.2rem;
		font-size: 0.7rem !important;
	}
	.text{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-right: 1.6rem;
		color: #333;
	}
	.sell{
		color: #999999;
		font-size: 0.85rem;
	}
</style>

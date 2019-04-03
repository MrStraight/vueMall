<template>
	<div class="HomeNewProDuct">
		<div class="title">新品首发 <span class="iconfont icon-xiayiye"></span></div>
		<div class="content">
			<div class="left">
				<div class="info">
						<p class="InfoTitle">可拉伸实木餐厅套装</p>
						<p class="InfoPrice">￥<span class="InfoPrice">6099</span></p>
					</div>
				<div class="img">
					<img src="@/assets/imgs/NewProduct1.jpg">
				</div>
			</div>
			<div class="right">
				<div class="RightTop">
					<div class="info">
							<p class="InfoTitle">1.8米实木双人床</p>
							<p class="InfoPrice">￥<span class="InfoPrice">3099</span></p>
						</div>
					<img src="@/assets/imgs/NewProduct2.jpg">
				</div>
				<div class="RightBottom">
					<div class="info">
							<p class="InfoTitle">精选黄牛皮转角沙发</p>
							<p class="InfoPrice">￥<span class="InfoPrice">8999</span></p>
						</div>
					<img src="@/assets/imgs/NewProduct3.jpg">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'HomeNewProduct',
		data(){
			return{
// 				HomeNewProductList:[{
// 					id:'0001',
// 					HomeNewProductImgs:'http://lhvideo.xyz/vuescimgs/NewProduct1.jpg',
// 					HomeNewProductInfo:'可拉伸实木餐厅套装',
// 					HomeNewProductPrice:'6099'
// 				},{
// 					id:'0002',
// 					HomeNewProductImgs:'http://lhvideo.xyz/vuescimgs/NewProduct2.jpg',
// 					HomeNewProductInfo:'1.8米实木双人床',
// 					HomeNewProductPrice:'3099'
// 				},{
// 					id:'0003',
// 					HomeNewProductImgs:'http://lhvideo.xyz/vuescimgs/NewProduct3.jpg',
// 					HomeNewProductInfo:'精选黄牛皮转角沙发',
// 					HomeNewProductPrice:'8999'
// 				}]
			}
		}
	}
</script>

<style scoped="scoped">
	img{
		width: 90%;
	}
	.content{
		display: flex;
		flex-grow: 1;
		margin: 0 auto;
		justify-content: center;
	}
	.title{
		font-size: 1.25rem;
		font-weight: 700;
		text-align: center;
		padding: .3rem .2rem 1.1rem .2rem;
	}
	.title span{
		font-size: 1.125rem;
	}
	.left{
		padding-left: 0.35rem;
	}
	.left,.RightTop,.RightBottom{
		position: relative;
		
	}
	.img{
		text-align: center;
	}
	.info{
		position: absolute;
		top: 1.125rem;right: 0;left: 1.4rem;bottom: 0;
		display: inline-block;
	}
	.InfoTitle{
		padding-bottom: 0.35rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 0.895rem;
		width: 90%;
	}
	.InfoPrice{
		color: #c81c28;
		font-size: 0.8rem;
	}
	.right{
		padding-left: 0.35rem;
	}
	.RightBottom{
		margin-top: .32rem;
	}
</style>

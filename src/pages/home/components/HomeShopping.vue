<template>
	<div class="HomeShopping">
		<div class="title">限时抢购 <span class="iconfont icon-xiayiye"></span></div>
		<div class="wrapper">
			<div class="content">
				<router-link v-for="item of ShoppingList" :key="item.id" tag="div" :to="item.url" class="item">
					<div class="img"><img :src="item.HomeShoppingImgsUrl"></div>
					<div class="itemInfo">
						<p class="time"><span class="iconfont icon--lishi"></span>仅剩0天X小时</p>
						<p class="info">古铜色奢华雕花浴室柜 进口橡木实木浴室柜 爵士白天然大理石台面 1.4米长浴室柜</p>
						<p class="price">￥<span>8542</span></p>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'

	export default{
		name:'HomeShopping',
		props:{
			ShoppingList:Array
		},
		mounted() {
			let wrapper = document.querySelector('.wrapper')
			let scroll = new BScroll(wrapper,{
				scrollX:true,
				click: true,
			})
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="scoped">
	.wrapper{
		overflow: hidden;
	}
	img{
		width: 100%;
	}
	.title{
		font-size: 1.25rem;
		font-weight: 700;
		text-align: center;
		padding: 1.2rem .2rem;
	}
	.title span{
		font-size: 1.125rem;
	}
	.img{
		width: 10.9375rem;
		height: 10.9375rem;
	}
	
	.content{
		display: inline-block;
		overflow: hidden;
		white-space: nowrap;
		padding: 0 0.625rem;
	}
	.item{
		display: inline-block;
	}
	.itemInfo{
		width: 11.25rem;
	}
	.time{
		font-size: 0.8rem;
		background-color: #fff4e6;
		color: #bf915a;
		border-radius: 1rem;
		text-align: center;
		padding: 0.15rem;
		margin: 0.4rem .4rem;
	}
	.info{
		font-size: 0.875rem;
		padding: 0.15rem;
		margin: 0.4rem 1.3rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
	}
	.price{
		color: #c81c28;
		margin: 0.2rem 1.55rem;
	}
</style>
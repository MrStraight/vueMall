<template>
	<div class="set">
		<div class="title">新品首发 <span class="iconfont icon-xiayiye"></span></div>
		<ul class="title2">
			<li @click="change">客厅</li>
			<li @click="change2">卧室</li>
			<li @click="change3">餐厅</li>
			<li @click="change4">书房</li>
		</ul>
		<swiper class="swiper-wrapper" ref="mySwiper" :options="swiperOption">
			<swiper-slide class="swiper-container">
				<div class="img"><img src="@/assets/imgs/set1.jpg"></div>
				<ul class="smallImg">
					<li>
						<img src="@/assets/imgs/set1-1.jpg">
						<p class="info">白椿木框架沙发</p>
						<p class="price">￥<span>9998</span></p>
					</li>
					<li>
						<img src="@/assets/imgs/set1-2.jpg">
						<p class="info">白椿木框架沙发</p>
						<p class="price">￥<span>9998</span></p>
					</li>
					<li>
						<img src="@/assets/imgs/set1-3.jpg">
						<p class="info">白椿木框架沙发</p>
						<p class="price">￥<span>9998</span></p>
					</li>
				</ul>
			</swiper-slide>
			<swiper-slide class="swiper-container">
				<div class="img"><img src="@/assets/imgs/set2.jpg"></div>
				<ul class="smallImg">
					<li>
						<img src="@/assets/imgs/set2-1.jpg">
						<p class="info">白椿木框架沙发</p>
						<p class="price">￥<span>9998</span></p>
					</li>
					<li>
						<img src="@/assets/imgs/set2-2.jpg">
						<p class="info">白椿木框架沙发</p>
						<p class="price">￥<span>9998</span></p>
					</li>
					<li>
						<img src="@/assets/imgs/set2-3.jpg">
						<p class="info">白椿木框架沙发</p>
						<p class="price">￥<span>9998</span></p>
					</li>
				</ul>
			</swiper-slide>
			<swiper-slide class="swiper-container">
				<div class="img"><img src="@/assets/imgs/set3.jpg"></div>
				<ul class="smallImg">
					<li>
						<img src="@/assets/imgs/set3-1.jpg">
						<p class="info">白椿木框架沙发</p>
						<p class="price">￥<span>9998</span></p>
					</li>
					<li>
						<img src="@/assets/imgs/set3-2.jpg">
						<p class="info">白椿木框架沙发</p>
						<p class="price">￥<span>9998</span></p>
					</li>
					<li>
						<img src="@/assets/imgs/set3-3.jpg">
						<p class="info">白椿木框架沙发</p>
						<p class="price">￥<span>9998</span></p>
					</li>
				</ul>
			</swiper-slide>
			<swiper-slide class="swiper-container">
				<div class="img"><img src="@/assets/imgs/set4.jpg"></div>
				<ul class="smallImg">
					<li>
						<img src="@/assets/imgs/set4-1.jpg">
						<p class="info">白椿木框架沙发</p>
						<p class="price">￥<span>9998</span></p>
					</li>
					<li>
						<img src="@/assets/imgs/set4-2.jpg">
						<p class="info">白椿木框架沙发</p>
						<p class="price">￥<span>9998</span></p>
					</li>
					<li>
						<img src="@/assets/imgs/set4-3.jpg">
						<p class="info">白椿木框架沙发</p>
						<p class="price">￥<span>9998</span></p>
					</li>
				</ul>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination">
			</div>
		</swiper>
	</div> 
</template>

<script>
	
	export default{
		name:'set',
		data(){
			return{
				list:["客厅","卧室","餐厅","书房"],
				swiperOption:{
					atuo:false,
				}
			}
		},
		computed: {
		  swiper() {
			return this.$refs.mySwiper.swiper
		  }
		},
		mounted() {
			
		},
		methods:{
			change(){
				var a = document.getElementsByTagName('li')
				this.swiper.slideTo(0, 500, false);//切换到第一个slide，速度为0.5秒
			},
			change2(){
				this.swiper.slideTo(1, 1000, false);
				console.log(this.swiper.realIndex);
				this.showBorder = true
			},
			change3(){
				this.swiper.slideTo(2, 1000, false);
				console.log(this.swiper.realIndex)
			},
			change4(){
				this.swiper.slideTo(3, 1000, false);
				console.log(this.swiper.realIndex)
			},
		}
	}
	
</script>

<style scoped="scoped">
	img{
		width: 92%;
	}
	.smallImg img{
		width: 95%;
	}
	.smallImg li{
		width: 31%;
		text-align: center;
	}
	.title{
		font-size: 1.25rem;
		font-weight: 700;
		text-align: center;
		padding: .8rem .2rem;
	}
	.title span{
		font-size: 1.125rem;
	}
	ul{
		display: flex;
		flex-grow: 1;
		justify-content: center;
	}
	.title2 li{
		margin: 0 auto;
	}
	.img{
		margin: 1rem auto .5rem;
		text-align: center;
	}
	.info,.price{
		text-align: left;
		margin-left: 0.3125rem;
	}
	.info{
		font-size: 0.9rem;
		color: #444;
		margin-top: 0.1875rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.price{
		margin-top: 0.4rem;
	}
	.price,.price span{
		font-size: .85rem;
		color: #c81c28;
	}
</style>
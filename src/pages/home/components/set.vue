<template>
	<div class="set">
		<div class="title">全套屋系 <span class="iconfont icon-xiayiye"></span></div>
		<ul class="title2">
			<li @click="change">客厅</li>
			<li @click="change2">卧室</li>
			<li @click="change3">餐厅</li>
			<li @click="change4">书房</li>
		</ul>
		<swiper class="swiper-wrapper" ref="mySwiper" :options="swiperOption">
			<swiper-slide class="swiper-container" v-for="item of SetList" :key="item.id">
				<div class="img"><img :src="item.SetImgs"></div>
				<ul class="smallImg">
					<li>
						<img :src="item.SetImgs1">
						<p class="info">{{item.SetInfo1}}</p>
						<p class="price">￥<span>{{item.SetPrice1}}</span></p>
					</li>
					<li>
						<img :src="item.SetImgs2">
						<p class="info">{{item.SetInfo2}}</p>
						<p class="price">￥<span>{{item.SetPrice2}}</span></p>
					</li>
					<li>
						<img :src="item.SetImgs3">
						<p class="info">{{item.SetInfo3}}</p>
						<p class="price">￥<span>{{item.SetPrice3}}</span></p>
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
		props:{
			SetList:Array
		},
		data(){
			return{
				/* SetList:[{
					id:'0001',
					SetImgs:'http://lhvideo.xyz/vuescimgs/set1.jpg',
					SetImgs1:'http://lhvideo.xyz/vuescimgs/set1-1.jpg',
					SetImgs2:'http://lhvideo.xyz/vuescimgs/set1-2.jpg',
					SetImgs3:'http://lhvideo.xyz/vuescimgs/set1-3.jpg',
					SetInfo1:'白椿木框架沙发',
					SetInfo2:'开放式储物茶几',
					SetInfo3:'实木电视柜',
					SetPrice1:'9998',
					SetPrice2:'6899',
					SetPrice3:'3022'
				},{
					id:'0002',
					SetImgs:'http://lhvideo.xyz/vuescimgs/set2.jpg',
					SetImgs1:'http://lhvideo.xyz/vuescimgs/set2-1.jpg',
					SetImgs2:'http://lhvideo.xyz/vuescimgs/set2-2.jpg',
					SetImgs3:'http://lhvideo.xyz/vuescimgs/set2-3.jpg',
					SetInfo1:'白椿木框架沙发',
					SetInfo2:'开放式储物茶几',
					SetInfo3:'实木电视柜',
					SetPrice1:'9998',
					SetPrice2:'6899',
					SetPrice3:'3022'
				},{
					id:'0003',
					SetImgs:'http://lhvideo.xyz/vuescimgs/set3.jpg',
					SetImgs1:'http://lhvideo.xyz/vuescimgs/set3-1.jpg',
					SetImgs2:'http://lhvideo.xyz/vuescimgs/set3-2.jpg',
					SetImgs3:'http://lhvideo.xyz/vuescimgs/set3-3.jpg',
					SetInfo1:'白椿木框架沙发',
					SetInfo2:'开放式储物茶几',
					SetInfo3:'实木电视柜',
					SetPrice1:'9998',
					SetPrice2:'6899',
					SetPrice3:'3022'
				},{
					id:'0004',
					SetImgs:'http://lhvideo.xyz/vuescimgs/set4.jpg',
					SetImgs1:'http://lhvideo.xyz/vuescimgs/set4-1.jpg',
					SetImgs2:'http://lhvideo.xyz/vuescimgs/set4-2.jpg',
					SetImgs3:'http://lhvideo.xyz/vuescimgs/set4-3.jpg',
					SetInfo1:'白椿木框架沙发',
					SetInfo2:'开放式储物茶几',
					SetInfo3:'实木电视柜',
					SetPrice1:'9998',
					SetPrice2:'6899',
					SetPrice3:'3022'
				}], */
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
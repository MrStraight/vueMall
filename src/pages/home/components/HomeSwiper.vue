<template>
	<div class="HomeSwiper">
		<swiper :options="swiperOption" v-if="SwiperList.length">
			<!-- slides -->
			<swiper-slide v-for="item of SwiperList" :key="item.id">
				<div class="img"><img :src="item.HomeSwiperImgsUrl" /></div>
			</swiper-slide>
			
			<div class="swiper-pagination" slot="pagination"></div>
			
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	props:{
		SwiperList:Array
	},
	data() {
		return {
			/*HomeSwiperList:[{
				id:'0001',
				HomeSwiperImgsUrl:'http://lhvideo.xyz/vuescimgs/banner1.jpg'
			},{
				id:'0002',
				HomeSwiperImgsUrl:'http://lhvideo.xyz/vuescimgs/banner2.jpg'
			},{
				id:'0003',
				HomeSwiperImgsUrl:'http://lhvideo.xyz/vuescimgs/banner3.jpg'
			},{
				id:'0004',
				HomeSwiperImgsUrl:'http://lhvideo.xyz/vuescimgs/banner4.jpg'
			}],*/
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true,
				autoplay: 3000
			},
			
		};
	}
};
</script>

<style scoped="scoped">
.img {
	width: 100%;
	margin-top: 0.1875rem;
}
.img img {
	width: 100%;
}
</style>
<style>
.swiper-pagination-bullet {
	width: 1.6rem !important;
	height: 0.25rem !important;
	border-radius: 15%;
}
</style>

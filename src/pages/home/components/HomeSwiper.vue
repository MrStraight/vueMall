<template>
	<div class="HomeSwiper">
		<swiper :options="swiperOption" v-if="SwiperList.length">
			<!-- slides -->
			<swiper-slide v-for="item of SwiperList" :key="item.id" v-if="showSwiper">
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
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true,
				autoplay: 3000
			},
		};
	},
	computed:{
		showSwiper(){
			return this.SwiperList.length
		}
	}
};
</script>

<style scoped="scoped">
	.HomeSwiper >>> .swiper-pagination-bullet {
	width: 1.6rem !important;
	height: 0.25rem !important;
	border-radius: 15%;
}
.img {
	width: 100%;
	margin-top: 0.1875rem;
}
.img img {
	width: 100%;
}
</style>

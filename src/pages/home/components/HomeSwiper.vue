<template>
	<div class="HomeSwiper">
		<swiper :options="swiperOption">
			<!-- slides -->
			<swiper-slide>
				<div class="img"><img src="../../../assets/imgs/banner2.jpg" /></div>
			</swiper-slide>
			<swiper-slide>
				<div class="img"><img src="../../../assets/imgs/banner1.jpg" /></div>
			</swiper-slide>
			<swiper-slide>
				<div class="img"><img src="../../../assets/imgs/banner3.jpg" /></div>
			</swiper-slide>
			<swiper-slide>
				<div class="img"><img src="../../../assets/imgs/banner4.jpg" /></div>
			</swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
			
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true,
				autoplay: 3000
			},
			swiperList: {
				id: '001',
				imgUrl: ''
			}
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

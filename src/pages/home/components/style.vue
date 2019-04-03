<template>
	<div class="style">
		<div class="title">精选风格</div>
		<div class="img">
			<img v-for="item of HomeStyleList" :src="item.HomeStyleImgsUrl" :key="item.id">
			<!-- <img src="@/assets/imgs/style2.jpg">
			<img src="@/assets/imgs/style3.jpg">
			<img src="@/assets/imgs/style4.jpg">
			<img src="@/assets/imgs/style5.jpg">
			<img src="@/assets/imgs/style6.jpg">
			<img src="@/assets/imgs/style7.jpg">
			<img src="@/assets/imgs/style8.jpg">
			<img src="@/assets/imgs/style9.jpg"> -->
		</div>
	</div>
</template>

<script>
	export default{
		name:"HomeStyle",
		data(){
			return{
				HomeStyleList:[{
					id:'0001',
					HomeStyleImgsUrl:'http://lhvideo.xyz/vuescimgs/style1.jpg'
				},{
					id:'0002',
					HomeStyleImgsUrl:'http://lhvideo.xyz/vuescimgs/style2.jpg'
				},{
					id:'0003',
					HomeStyleImgsUrl:'http://lhvideo.xyz/vuescimgs/style3.jpg'
				},{
					id:'0004',
					HomeStyleImgsUrl:'http://lhvideo.xyz/vuescimgs/style4.jpg'
				},{
					id:'0005',
					HomeStyleImgsUrl:'http://lhvideo.xyz/vuescimgs/style5.jpg'
				},{
					id:'0006',
					HomeStyleImgsUrl:'http://lhvideo.xyz/vuescimgs/style6.jpg'
				},{
					id:'0007',
					HomeStyleImgsUrl:'http://lhvideo.xyz/vuescimgs/style7.jpg'
				},{
					id:'0008',
					HomeStyleImgsUrl:'http://lhvideo.xyz/vuescimgs/style8.jpg'
				},{
					id:'0009',
					HomeStyleImgsUrl:'http://lhvideo.xyz/vuescimgs/style9.jpg'
				}]
			}
		}
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

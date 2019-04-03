<template>
	<div class="HomeIcon">
		<ul>
			<router-link tag="li"  v-for="item of IconsList" :key="item.id" :to="item.url"><div><img :src="item.HomeIconsUrl"></div><span>体验馆</span></router-link>
			
		</ul>
	</div>
</template>

<script>
	export default{
		name:'HomeIcon',
		props:{
			IconsList:Array
		},
		data(){
			return{
				/* HomeIconsList:[{
					id:'0001',
					url:'/tyg',
					HomeIconsUrl:'http://lhvideo.xyz/vuescimgs/icon1.jpg',
					HomeIconsTitle:'体验馆'
					},{
					id:'0002',
					url:'/phb',
					HomeIconsUrl:'http://lhvideo.xyz/vuescimgs/icon2.jpg',
					HomeIconsTitle:'排行榜'
					},{
					id:'0003',
					url:'/mrtm',
					HomeIconsUrl:'http://lhvideo.xyz/vuescimgs/icon3.jpg',
					HomeIconsTitle:'每日特卖'
					},{
					id:'0004',
					url:'/ym',
					HomeIconsUrl:'http://lhvideo.xyz/vuescimgs/icon4.jpg',
					HomeIconsTitle:'阅木'
					},{
					id:'0005',
					url:'/tyb',
					HomeIconsUrl:'http://lhvideo.xyz/vuescimgs/icon5.jpg',
					HomeIconsTitle:'实木家具'
					},{
					id:'0006',
					url:'/sf',
					HomeIconsUrl:'http://lhvideo.xyz/vuescimgs/icon6.jpg',
					HomeIconsTitle:'沙发'
					},{
					id:'0007',
					url:'/tyb',
					HomeIconsUrl:'http://lhvideo.xyz/vuescimgs/icon7.jpg',
					HomeIconsTitle:'床'
					},{
					id:'0008',
					url:'/cd',
					HomeIconsUrl:'http://lhvideo.xyz/vuescimgs/icon8.jpg',
					HomeIconsTitle:'床垫'
					}] */
				}
			}
		}
</script>

<style scoped="scoped">
	img{
		width: 100%;
	}
	.HomeIcon{
		text-align: center;
	}
	.HomeIcon ul{
		
	}
	.HomeIcon ul li{
		width: 23%;
		display: inline-block;
		cursor: pointer;
	}
	.HomeIcon ul li div{
		padding:.05rem .7rem;
	}
	.HomeIcon ul li span{
		font-size: 0.85rem;
		color: #444;
	}
</style>

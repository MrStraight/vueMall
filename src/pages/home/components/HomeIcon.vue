<template>
	<div class="HomeIcon">
		<ul>
			<router-link tag="li" to="tyg"><div><img src="@/assets/imgs/icon1.jpg"></div><span>体验馆</span></router-link>
			<router-link tag="li" to="phb"><div><img src="@/assets/imgs/icon2.jpg"></div><span>排行榜</span></router-link>
			<router-link tag="li" to="mrtm"><div><img src="@/assets/imgs/icon3.jpg"></div><span>每日特卖</span></router-link>
			<router-link tag="li" to="ym"><div><img src="@/assets/imgs/icon4.jpg"></div><span>阅木</span></router-link>
			<router-link tag="li" to="smjj"><div><img src="@/assets/imgs/icon5.jpg"></div><span>实木家具</span></router-link>
			<router-link tag="li" to="sf"><div><img src="@/assets/imgs/icon6.jpg"></div><span>沙发</span></router-link>
			<router-link tag="li" to="c"><div><img src="@/assets/imgs/icon7.jpg"></div><span>床</span></router-link>
			<router-link tag="li" to="cd"><div><img src="@/assets/imgs/icon8.jpg"></div><span>床垫</span></router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'HomeIcon',
		data(){
			return{
				
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

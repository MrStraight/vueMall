<template>
	<div>
		<home-header></home-header>
		<home-nav></home-nav>
	</div>
</template>

<script>
	import HomeHeader from './components/header'
	import HomeNav from './components/HomeNav'
export default {
	name: 'Home',
	components:{
		HomeHeader,
		HomeNav
	}
}
</script>

<style scoped="scoped">
	.search{
		font-size: 4.1rem;
	}
</style>

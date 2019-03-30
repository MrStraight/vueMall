<template>
	<div>
		<home-header></home-header>
		<search></search>
	</div>
</template>

<script>
	import HomeHeader from './components/header'
	import Search from '../search/search'
export default {
	name: 'Home',
	components:{
		HomeHeader,
		Search
	}
}
</script>

<style scoped="scoped">
	.search{
		font-size: 4.1rem;
	}
</style>

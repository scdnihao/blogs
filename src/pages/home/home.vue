<template>
	<div id="home">
		<div>
			<a href="./index.html">GO index.html</a>
		</div>
		<HelloWorld></HelloWorld>
	</div>
</template>

<script>
	import HelloWorld from '../../components/HelloWorld'
	export default {
		name: 'Home',
		components: {
			HelloWorld
		}
	}
</script>

<style>
	#home{
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>

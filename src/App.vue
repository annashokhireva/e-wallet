<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
	@import './sass';
</style>

<style lang="scss" scoped>
	#app {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		min-height: 100vh;
	}
</style>

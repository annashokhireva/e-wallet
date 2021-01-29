<template>
	<div>
		<credit-card v-for="card in cards" :key="card.id" :card="card" class="single-card" />
	</div>
</template>

<script>
	import CreditCard from './templates/CreditCard.vue'

	export default {
		components: { CreditCard },
		props: {
		cards: {
			type: Array,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>

	.single-card{
		grid-column-start: 1;
		margin-top: -250px;
	}

</style>
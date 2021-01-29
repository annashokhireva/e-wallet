<template>
  <div>
    <top-header header="E-WALLET" />
    <h2 v-if="noCards"> Your wallet is empty. Please add a new card. </h2>
	<template v-else>
		<credit-card v-if="primaryCard" :card="primaryCard" msg="active card" :show-delete="true" />
		<card-stack :cards="cardStack" class="main-card" />
	</template>
    <button class="light">
        <h3><router-link to="/add-card"> add a new card </router-link></h3>
    </button>
  </div>
</template>

<script>
import CardStack from '../components/CardStack.vue';
import CreditCard from '../components/templates/CreditCard.vue';
import TopHeader from '../components/TopHeader.vue';
import Store from '../store';

export default {

	components: { 
		CardStack,
		TopHeader,
		CreditCard
	},

	computed: {
		primaryCard() {
			const cards = Store.cards.filter(card => card.primary);
			return (cards.length ? cards[0] : null);
		},

		cardStack() {
			return Store.cards.filter(card => !card.primary);
		},

		noCards() {
			return (!this.primaryCard && !this.cardStack.length);
		},
	}
}
</script>

<style lang="scss" scoped>
	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.main-card {
		display: grid;
		justify-items: start;
		padding-top: 300px;
	}

	.light {
		@include btn_light;
		margin-top: $spacing;
	}

</style>
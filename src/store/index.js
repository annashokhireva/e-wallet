import Vue from 'vue';

const Store = Vue.observable({
	cards: []
});

if (localStorage) {
	let cards = localStorage.getItem('creditCards');
	if (cards) {
		Store.cards = JSON.parse(cards);
	}
}

export default Store
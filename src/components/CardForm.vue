<template>
	<div class="form-container">
		<div @mouseenter="showBack = true" @mouseleave="showBack = false">
			<credit-card msg="new card" :card="card" :show-back="showBack" />
		</div>
		<form @submit.prevent="onSubmit">
			<div class="field-container">
				<label for="vendors">vendor</label>
				<select 
					id="Vendors" 
					class="options" 
					v-model="card.vendor" 
				>
					<option v-for="(vendor, index) in vendors" :key="index" :value="vendor"> {{ vendor }} </option>
				</select>
			</div>

			<div class="field-container">
				<label :for="card.id">card number</label>
				<input 
					@keypress="onlyNumber"
					:id="card.id" 
					value="card.number"
					autocomplete="off"
					pattern="[0-9]*" 
					inputmode="numeric"
					maxlength="16"
					minlength="16" 
					placeholder="XXXX XXXX XXXX XXXX"
					v-model="card.number"
				>
			</div>
			
			<div class="field-container">
				<label :for="card.cardholder">name</label>
				<input 
					:id="card.cardholder" 
					maxlength="20" 
					type="text" 
					placeholder="FIRSTNAME LASTNAME"
					v-model="card.cardholder"
				>
			</div>

			<div class="validation">
				<div class="field-container"> 
					<label :for="card.month">month</label>
					<select 
						name="month"
						:id="card.month" 
						class="small options" 
						v-model="card.month"
					>
						<option v-for="(month, index) in months" :key="index" :value="month"> {{ month }} </option>
					</select>   
				</div>

				<div class="field-container">
					<label :for="card.year">year</label>
					<select 
						:id="card.year" 
						class="small options" 
						v-model="card.year" 
					>
						<option v-for="(year, index) in years" :key="index" :value="year"> {{ year }} </option>
					</select>
				</div>

				<div class="field-container">
					<label :for="card.cvv">cvv</label>
					<input
						@keypress="onlyNumber"
						:id="card.cvv"
						maxlength="3"
						minlength="3"
						autocomplete="off"
						inputmode="numeric"   
						class="small" 
						v-model="card.cvv" 
					>
				</div>
			</div>

			<div class="error-box" v-if="errors.length">
				<img src="../assets/exclamation.svg" alt="!" width="50">
				<ul>
					<li class="error-message" v-for="(error, index) in errors" :key="index">{{ error }}</li>
				</ul>
			</div>

			<button class="dark" type="submit">
				<h3>add card</h3>
			</button>
	
		</form>
	</div>
</template>

<script>
import Store from '../store';
import {v4} from 'uuid';
import CreditCard from './templates/CreditCard.vue';

export default {
  components: { 
		CreditCard 
	},

	data() {
		return {
			months: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
			years: ["2021", "2022", "2023", "2024", "2025", "2026", "2027"],
			vendors: ["Bitcoin Inc", "Ninja Bank", "Block Chain Inc", "Evil Corp"],
			errors: [],
			card: this.cardDefinition(),
			showBack: false
		}
	},
	
	methods: {
		onSubmit: function() {
			if (this.checkForm()){
				this.addCard();
				this.$router.push({name: 'activeCards'});
			}
		},

		onlyNumber ($event) {
			let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
			if ((keyCode < 48 || keyCode > 57)) { 
				$event.preventDefault();
			}
		},

		cardDefinition() {
			return {
				cardholder: '',
				vendor: '',
				number: '',
				month: '',
				year: '',
				cvv: '',
				primary: false
			};
		},

		addCard() {
			this.card.id = v4();
			Store.cards.unshift(this.card);
			localStorage.setItem('creditCards', JSON.stringify(Store.cards));
			this.card = this.cardDefinition();
		},

		checkForm() {
			this.errors = [];

			if (!this.card.vendor) {
				this.errors.push('Vendor required.');
			}
			if (!this.card.number) {
				this.errors.push('Card number required.');
			} 
			if (!this.card.cardholder) {
				this.errors.push('Full name required.');
			} 
			if (!this.card.month) {
				this.errors.push('Month required.');
			} 
			if (!this.card.year) {
				this.errors.push('Year required.');
			} 
			if (!this.card.cvv) {
				this.errors.push('CVV required.');
			} 
			if (!this.errors.length) {
				return true;
			}

			return false;
		},
	}

}
</script>

<style lang="scss" scoped>

	.form-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: space-between;
		margin: $spacing 0;
	}

	.field-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 5px 0;
	}

	.field-container-dates {
		display: flex;
	}

	.validation {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 1em;
	}

	input,
	.options {
		width: $full_width;
		height: $input_height;
		padding: 5px 20px;
		border-radius: $corners;
		border: $black_border;
	}
	
	.small {
		width: 130px;
	}
	
	label {
		line-height: 1em;
		margin-left: 5px;
	}

	.dark {
		@include btn_dark;
	}

	.error-box {
		display: flex;
		align-items: center;
		margin-bottom: $spacing;
	}

	ul {
		text-align: left;
		padding: 0;
		color: red;
	}

	.error-message {
		border-left: 3px solid red;
		padding-left: $spacing;
		margin-left: $spacing / 2;
	}
</style>
<template>
    <div class="card-container">
        <h2> {{msg}} </h2>
        <div class="card">
            <span v-if="showDelete" @click="deleteCard">
                    <img class="delete" src="../../assets/delete.svg" alt="X" width="40">
            </span>

            <div class="card-inner">
                <transition-group name="flip">
                    <div v-if="showBack" key="back" class="card-back" :style="{ backgroundColor: cardBackground }">
                        <div class="stripe"></div>
                        <div class="cvv-field">
                            <p class="signature">{{ card.cardholder }}</p>
                            <div class="cvv">{{ card.cvv || 'cvv' }}</div>
                        </div>
                    </div>

                    <div v-else key="front" class="card-front" :style="{ backgroundColor: cardBackground }" @click="primaryCard">
                        <div class="top-part">
                            <img v-if="cardVendor.length <= 0" src="@/assets/chip-dark.svg" alt="chip">
                            <img v-else src="@/assets/chip-light.svg" alt="chip">
                            <img v-if="card.vendor === 'Bitcoin Inc'" src="@/assets/bitcoin.svg" height="50" alt class="icon" />
                            <img v-if="card.vendor === 'Ninja Bank'" src="@/assets/vendor-ninja.svg" height="50" alt class="icon" />
                            <img v-if="card.vendor === 'Block Chain Inc'" src="@/assets/vendor-blockchain.svg" height="50" alt class="icon" />
                            <img v-if="card.vendor === 'Evil Corp'" src="@/assets/vendor-evil.svg" height="50" alt class="icon" />
                        </div>

                        <div class="card-number" :class="textColor">
                            <p>
                                {{ splitDigits() || 'XXXX XXXX XXXX XXXX'}}
                            </p>
                        </div>

                        <div class="details" :class="textColor">
                            <div class="cardholder">
                                <h4>cardholder name</h4>
                                <p>
                                    {{ cardholder || `firstname lastname`}}
                                </p>
                            </div>
                            <div class="expiry-date">
                                <h4>valid thru</h4>
                                <p>
                                    {{ month || 'MM' }}/{{ year || 'YY'}}
                                </p>
                            </div>
                        </div>
                    </div>
                </transition-group>
                
        
            </div>
        </div>
    </div>
</template>

<script>

import Store from '../../store';

export default {
    data() {
        return {
            colors: {
                light: 'light',
                dark: 'dark'
            }
        }
    },

    props: {
        msg: String,

        showBack: {
            type: Boolean,
            default: false
        },

        showDelete: {
            type: Boolean,
            default: false
        },

        card: {
            type: Object,
            required: true
        }
    },

    computed: {

        cardVendor() {
            return this.card.vendor;
        },

        cardNumber() {
            return this.card.number;
        },

        cardholder() {
            return this.card.cardholder;
        },

        month() {
            return this.card.month;
        },

        year() {
            return this.card.year.toString().slice(2);
        },

        cardBackground() {
            let bgc = 'rgb(204, 204, 204)';

            if (this.card.vendor === 'Bitcoin Inc'){
                bgc = 'rgb(235, 182, 69)';
            }

            else if (this.card.vendor === 'Ninja Bank'){
                bgc = 'rgb(54, 50, 50)';
            }

            else if (this.card.vendor === 'Block Chain Inc'){
                bgc = 'rgb(118, 65, 204)';
            }

            else if (this.card.vendor === 'Evil Corp'){
                bgc = 'rgb(197, 36, 76)';
            }

            return bgc
        },

        textColor() {
            let color;

            if (this.card.vendor != 'Bitcoin Inc' && this.card.vendor != ''){
                color = this.colors.light;
            }

            else {
                color = this.colors.dark;
            }

            return color;
        }
    },

    methods: {
        splitDigits() {
            let originalNumber = this.cardNumber;
            let newNumber = originalNumber.replace(/(\d{4}(?!\s))/g, "$1 ");
            return newNumber;
        },

        primaryCard(){
            Store.cards.forEach(c => c.primary = false)
            this.card.primary = true;
		},
		
		deleteCard() {
            var x = confirm(`Are you sure you want to delete ${this.card.vendor} card from your wallet?`);
			
            if (x){
                const index = Store.cards.indexOf(this.card);
				Store.cards.splice(index, 1);
            }
                
            else
                return false;

        },
    }
};
</script>

<style lang="scss" scoped>
    .card-container {
        margin: 0 0 3em 0;
    }

    .card {
        width: $full_width;
        height: 15em;
        background-color: transparent;
        perspective: 1000px;
		cursor: pointer;

		&:hover {
			margin: 0;
		}
	}

    .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }

    .delete {
        position: absolute;
        left: 95%;
        top: -7%;
        z-index: 1;
        border-radius: 50%;
        background-color: white;
		box-shadow: 0 4px 10px 0 rgba(71, 71, 71, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		opacity: 80%;

		&:hover {
			width: 50px;
			opacity: 100%;
			top: -8%
		}

    }

    .card-front,
    .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: $corners;
        box-shadow: 0 4px 10px 0 rgba(71, 71, 71, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        display: flex;
        flex-direction: column;
    }

    .card-front {
        justify-content: space-between;
        padding: 1.5em;
    }

    .card-back {
        justify-content: space-around;
        align-items: center;
        padding: 0;
    }

    .top-part {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    
    .card-number {
        margin: 0.5 0;
        
        p {
            font-size: 32px;
            text-align: left;
            height: 30px;
            margin: 0;
            width: 100%;
        }
    }

    .details {
        display: flex;
        text-align: left;
        justify-content: space-between;
        min-height: 40px;
        
        p {
            text-transform: uppercase;
            font-size: 20px;
            margin: 0;
        }
    }

    .cardholder p {
        text-align: left;
    }

    .expiry-date p {
        text-align: right;
    }

    .icon {
        min-height: 20px;
    }

    .stripe {
        padding: 24px;
        opacity: 0.8;
        width: 100%;
        background-color: black;
    }

    .cvv-field {
        border-radius: 4px;
        width: 92%;
        background-color: white;
        color: black;
        text-align: right;
        font-size: 22px;
        min-height: 45px;
        display: flex;
        justify-content: flex-end;
        box-sizing: border-box;
        background-image: url('../../assets/stripes.svg');
        background-size: cover;

    }

    .signature {
        width: 80%;
        text-align: left;
        padding: 10px 30px;
        margin: 0;
        background: linear-gradient(to right, rgba(255,0,0,0), rgb(255, 255, 255));
    }

    .cvv {
        background: white;
        width: 20%;
        text-align: center;
        padding: 10px;
    }    

    .flip-enter-active,
    .flip-leave-active {
        transition: transform $flip_speed linear;
        transform-style: preserve-3d;
    }

    .flip-enter-active {
        transition-delay: $flip_speed;
        transition-timing-function: ease-out;
    }

     .flip-leave-active {
        transition-timing-function: ease-in;
    }

    .flip-enter {
        transform: rotateY(-90deg);
    }

    .flip-leave-to {
        transform: rotateY(90deg);
    }

    .light {
        @include card_text_light;
    }

    .dark {
        @include card_text_dark;
    }
</style>
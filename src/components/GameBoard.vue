<template>
	<div>
		<div class="game-board">
			<div class="cards">
				<my-card v-for="card in cards"
						 :card="card"
						 @flip="flipCard"
						 :key="card.id">
				</my-card>
			</div>
			<div class="matches m-3" v-if="isGameWon"><h2>Congratulations! You won!</h2></div>
			<div class="matches m-3" v-else>Matches: {{ matches }} / {{ cards.length }}</div>
		</div>
		
		<button  class="btn btn-primary float-end"
				 @click="resetGame"
		>Reset</button>
		
	</div>
</template>

<script setup lang="ts">
import  Card   from "@/types/card";
import { onMounted, ref, Ref } from "vue";
import { shuffle } from "@/utils/shuffle";
import MyCard from "@/components/MyCard.vue";


const cards: Ref<Card[]> = ref([]);
const matches: Ref<number> = ref(0);
const isGameWon: Ref<boolean> = ref(false);
let cardID = 0;

const initializeGame = () => {
	const images = [
		require("../assets/images/img1.png"),
		require("../assets/images/img2.png"),
		require("../assets/images/img3.png"),
		require("../assets/images/img4.png"),
		require("../assets/images/img5.png"),
		require("../assets/images/img6.png"),
		require("../assets/images/img7.png"),
		require("../assets/images/img8.png"),
		require("../assets/images/img9.png"),
		require("../assets/images/img10.png"),
		require("../assets/images/img11.png"),
		require("../assets/images/img12.png"),
		require("../assets/images/img13.png"),
		require("../assets/images/img14.png"),
		require("../assets/images/img15.png"),
	];
	
	const shuffledImages = shuffle(images.concat(images));
	
	cards.value = shuffledImages.map((value) => ({
		id: cardID++,
		value,
		isFlipped: false,
		isMatched: false
	}));
};

let openedCards: Card[] = [];

const isInitialLoading = ref(true);

const loadCards = () => {
	cards.value.forEach((card) => {
		card.isFlipped = true;
	});
	setTimeout(() => {
		cards.value.forEach((card) => {
			card.isFlipped = false;
		});
		isInitialLoading.value = false;
	}, 2000);
};

const flipCard = (card: Card) => {
	if (card.isMatched || card.isFlipped || openedCards.length >= 2) {
		return;
	}
	
	card.isFlipped = true;
	openedCards.push(card);
	
	if (openedCards.length === 2) {
		const [card1, card2] = openedCards;
		
		if (card1.value === card2.value) {
			card1.isMatched = true;
			card2.isMatched = true;
			matches.value++;
			
			openedCards = [];
			
			if (matches.value === cards.value.length / 2) {
				isGameWon.value = true;
			}
		} else {
			setTimeout(() => {
				card1.isFlipped = false;
				card2.isFlipped = false;
				
				openedCards = [];
			}, 1000);
		}
	}
};


onMounted(() => {
	initializeGame();
	loadCards();
	
});
const resetGame = () => {
	initializeGame();
	loadCards();
	matches.value = 0;
	isGameWon.value = false;
};

</script>

<style lang="scss" scoped>
.cards {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 2px;
  width: 550px;
}
h2 {
  color: cornflowerblue;
}
</style>
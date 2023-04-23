<template>
	<div>
		<div class="game-board">
			<div class="cards">
				<my-card v-for="card in cards"
						 :card="card"
						 @flip="flipCard"
						 :key="card.value">
				</my-card>
			</div>
			<div class="matches">Matches: {{ matches }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import  Card   from "@/types/card";
import { onMounted, ref, Ref } from "vue";
import { shuffle } from "@/utils/shuffle";
import MyCard from "@/components/MyCard.vue";


const cards: Ref<Card[]> = ref([]);
const currentCard: Ref<Card | undefined> = ref(undefined);
const matches: Ref<number> = ref(0);

const initializeGame = () => {
	const images = [
		require("../assets/images/img1.png"),
		require("../assets/images/img2.png"),
		require("../assets/images/img3.png"),
		require("../assets/images/img4.png"),
		// "image5.jpg",
		// "image6.jpg",
		// "image7.jpg",
		// "image8.jpg",
		// "image9.jpg",
		// "image10.jpg",
		// "image11.jpg",
		// "image12.jpg",
		// "image13.jpg",
		// "image14.jpg",
		// "image15.jpg",
	];
	
	const shuffledImages = shuffle(images.concat(images));
	
	cards.value = shuffledImages.map((value) => ({
		value,
		isFlipped: false,
		isMatched: false
	}));
};

const flipCard = (card: Card) => {
	if(card && currentCard.value) {
		card.isFlipped = true;
		console.log('1');
		if(card.value === currentCard.value.value) {
			card.isMatched = true;
			currentCard.value.isMatched = true;
			matches.value++;
			console.log('2');
			
		} else {
			setTimeout(() => {
				card.isFlipped = false;
				currentCard.value!.isFlipped = false;
				console.log('3');
			}, 1000);
		}
		currentCard!.value = undefined;
		console.log('4');
	} else {
		card.isFlipped = true;
		currentCard.value = card;
		console.log('5');
	}
};
onMounted(() => {
	initializeGame();
});

</script>

<style lang="scss" scoped>
.cards {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 2px;
  width: 300px;
}
</style>
<template>
	<div class="container">
		<div class="card" @click="flipCard">
			<div class="front" v-if="!props.card.isFlipped"></div>
			<div class="back" v-if="props.card.isFlipped">
				<template v-if="props.card.value">
					
					<img :src="props.card.value" :alt="props.card.value"/>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import  Card  from "@/types/card";

const props = defineProps({
	card: {
		type: Object as () => Card,
		required: true
	}
});
const emit = defineEmits(["flip"]);

const flipCard = () => {
	if(!props.card.isMatched && !props.card.isFlipped) {
		emit("flip", props.card);
	}
};
</script>

<style lang="scss" scoped>
.card {
  margin: 0 auto;
  width: 75px;
  height: 75px;
  cursor: pointer;
}
.card img {
  max-width: 75px;
}
.container :hover {
  box-shadow: 0 12px 22px 0 rgba(0,0,0,.1);
}

</style>
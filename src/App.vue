<template>
	<div class="container w-50">
		<header>
			<div class=""><h2>Game: Train your Memory</h2></div>
		</header>
		<GameBoard></GameBoard>
	</div>
</template>

<script setup lang="ts">

import GameBoard from "@/components/GameBoard.vue";

</script>

<style lang="scss">
* {
  font-family: 'Montserrat', sans-serif;
}
.container {
  margin-top: 20px;
}

</style>

<template>
	<div class="container w-75">
		<header>
			<div class=""><h2>Game: Train your Memory</h2></div>
			<button class="btn btn-primary">Reset</button>
		</header>
		<GameBoardComponent></GameBoardComponent>
	</div>
</template>

<script setup lang="ts">

import GameBoardComponent from "@/components/GameBoardComponent.vue";

</script>

<style lang="scss">
* {
  font-family: 'Montserrat', sans-serif;
}
.container {
  margin-top: 20px;
}
.btn {
  float: right;
}
</style>

<template>
	<main class="tickets-layout">
		<h1>Your Suport Tickets</h1>
		<Tickets/>
	</main>
</template>

<script>
	import Tickets from './Tickets.vue';

	export default {
		components: {
			Tickets
		}		
	}
</script>
<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation'
	import Navbar from '$lib/components/Navbar.svelte';


	onNavigate((navigation) => {
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})

	let { children } = $props();
</script>


<div class="p-4 relative overflow-hidden">
	<Navbar/>
	{@render children()}
</div>


<style>
	@import url('https://fonts.googleapis.com/css2?family=Delius+Unicase:wght@400;700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

	:global(*){
		font-family: "IBM Plex Mono", serif;
	}
</style>
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


<div class="bg-blue-400 p-4">
	<Navbar/>
	{@render children()}
</div>

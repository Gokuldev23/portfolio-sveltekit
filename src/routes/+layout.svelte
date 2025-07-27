<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import InDevelopment from '$lib/components/InDevelopment.svelte';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(() => {
				resolve();
				navigation.complete.finally(() => {
					document.documentElement.removeAttribute('view-transition-name');
				});
			});
		});
	});

	let { children } = $props();
</script>

<div id="scroll-bar-css" class="relative h-dvh overflow-auto bg-black">
	<InDevelopment devMode={true} />
	{@render children()}
</div>

<style>
	:global(*) {
		font-family: 'Poppins', serif;
	}
	#scroll-bar-css::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgb(0, 0, 0);
		background-color: #000000;
	}

	#scroll-bar-css::-webkit-scrollbar {
		width: 10px;
		background-color: #1f1e1e;
	}

	#scroll-bar-css::-webkit-scrollbar-thumb {
		background-color: #3a3838;
		border-radius: 999px;
	}
	@media (width<500px) {
		#scroll-bar-css::-webkit-scrollbar {
			display: none;
		}
	}
</style>

<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import Icon from '@iconify/svelte';
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

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Days+One&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

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
	}
</style>

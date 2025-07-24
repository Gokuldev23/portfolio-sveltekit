<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import Icon from '@iconify/svelte';

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

<div class="relative h-dvh overflow-x-hidden bg-black">
	<div class="fixed right-4 top-4 text-white flex gap-2 items-center bg-yellow-800 px-3 py-0.5 rounded-sm">
		<div>
			<Icon icon="arcticons:nrf-toolbox" />
		</div>
		<p>In Development</p>
	</div>
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
		scrollbar-width: none;
	}
</style>

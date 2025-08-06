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

<div id="root-layout" class="relative bg-black h-dvh overflow-auto">
	<div id="progress" class="fixed top-0 left-0 right-0 h-1 bg-yellow-500 z-50 origin-left" ></div>
	<InDevelopment devMode={true} />
	{@render children()}
</div>

<style>
	:global(*) {
		font-family: 'Poppins', serif;
	}
	#root-layout {
		scroll-timeline:--scroller;
	}
	#root-layout::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgb(0, 0, 0);
		background-color: #000000;
	}

	#root-layout::-webkit-scrollbar {
		width: 10px;
		background-color: #1f1e1e;
	}

	#root-layout::-webkit-scrollbar-thumb {
		background-color: #3a3838;
		border-radius: 999px;
	}
	@media (width<500px) {
		#root-layout::-webkit-scrollbar {
			display: none;
		}
	}

	@keyframes grow-progress {
		from {
			transform: scaleX(0);
		}
		to {
			transform: scaleX(1);
		}
	}

	#progress {
		animation: grow-progress linear;
		animation-timeline: --scroller;
		@supports not (animation-timeline: scroll(nearest)) {
			display: none;
		}
	}
</style>
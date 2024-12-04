<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation'
	import Navbar from '$lib/components/Navbar.svelte';
	import { page } from '$app/stores';

	let previousPath = '';

	onNavigate((navigation) => {

    if (!document.startViewTransition) return;

    // Start the view transition
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


<div class="p-4 relative h-dvh overflow-x-hidden bg-black">
	<Navbar/>
	{@render children()}
</div>


<style>
	@import url('https://fonts.googleapis.com/css2?family=Delius+Unicase:wght@400;700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

	:global(*){
		font-family: "IBM Plex Mono", serif;
	}
	:root {
    --view-transition-duration: 0.5s;
  }

  :root[view-transition-name='slide-in'] {
    animation: slideIn var(--view-transition-duration) ease-out;
  }

  :root[view-transition-name='slide-out'] {
    animation: slideOut var(--view-transition-duration) ease-in;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
</style>
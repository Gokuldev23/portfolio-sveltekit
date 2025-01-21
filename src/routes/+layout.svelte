<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onNavigate } from '$app/navigation'
	import Navbar from '$lib/components/Navbar.svelte';


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


<div class=" relative overflow-x-hidden">
	<Navbar/>
	{@render children()}
</div>


<style>
	:global(*){
		font-family: "IBM Plex Mono", serif;
    scrollbar-width: none;
	}
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" >
  <link as="style" href="https://fonts.googleapis.com/css2?family=Days+One&family=Delius+Unicase:wght@400;700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
</svelte:head>
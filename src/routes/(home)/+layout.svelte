<script lang="ts">
	import About from '$lib/components/About.svelte';


    let {children} = $props()

	
</script>

<div class=" bg-gray-950 max-w-6xl mx-auto px-4 py-10 text-white sm:px-10">

	<About/>

	{@render children()}

</div>


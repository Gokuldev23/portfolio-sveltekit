<script>
	import { projects } from '$lib/js/projects';
	import About from './About.svelte';
	import ProjectCatogory from './ProjectCatogory.svelte';


	let grouped = Object.groupBy(projects, (item) => item.type);

	let categories = Object.entries(grouped); // [ [type, projects[]], ... ]

</script>

<div class="min-h-screen bg-gray-950 px-4 py-10 text-white sm:px-10">

	<About/>

	{#each categories as category}
		<ProjectCatogory category={category}/>
	{/each}

</div>

<style>
	
</style>

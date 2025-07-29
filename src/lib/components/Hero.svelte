<script lang="ts">
	import { projects } from '$lib/js/projects';
	import About from './About.svelte';
	import ProjectCatogory from './ProjectCatogory.svelte';

	const order = {
		FEATURED: 0,
		PROFESSIONAL: 1,
		EXPERIMENTAL: 2
	} as const;

	let grouped = Object.groupBy(projects, (item) => item.type);

	let categories = Object.entries(grouped).sort(
		([a], [b]) => order[a as keyof typeof order] - order[b as keyof typeof order]
	);
</script>

<div class=" bg-gray-950 px-4 py-10 text-white sm:px-10">

	<About/>

	{#each categories as category}
		<ProjectCatogory category={category}/>
	{/each}

</div>


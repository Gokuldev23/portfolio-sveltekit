<script lang="ts">
	import ProjectCatogory from '$lib/components/ProjectCatogory.svelte';
	import { projects } from '$lib/js/projects';

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

<main>
	{#each categories as category}
		<ProjectCatogory {category} />
	{/each}
</main>

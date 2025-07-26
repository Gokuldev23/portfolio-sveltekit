<script>
	import Icon from '@iconify/svelte';

	let { project } = $props();

	let type = $derived(project.type);
</script>

<div
	class="relative block h-full rounded-2xl bg-gray-800 p-5 shadow-md transition hover:bg-gray-700"
>
	{#if project.link}
		<a href={project.link} target="_blank" class="redirect-icon group absolute right-4 top-4 w-6 text-gray-400">
			<Icon
				class="transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2"
				icon="mingcute:external-link-line"
				width="100%"
			/>
		</a>
	{/if}
	{#if project.logo}
		<img src={project.logo} width="100px" class="mx-auto mb-4 rounded-md" alt="" />
	{:else}
		<div class="text-center text-8xl/[120px]">📦</div>
	{/if}
	<h3 class="mb-2 text-xl font-semibold">{project.title}</h3>
	<p class="mb-3 line-clamp-3 text-sm text-gray-300">
		{project.description}
	</p>
	<div class="flex flex-wrap gap-2">
		{#each project.techStack as tag}
			<span class="rounded-full bg-gray-700 px-2 py-1 text-xs">{tag}</span>
		{/each}
	</div>
</div>

<style>
</style>

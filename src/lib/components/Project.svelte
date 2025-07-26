<script>
	let { project } = $props();

	let type = $derived(project.type)

	$inspect({type})
	
</script>

<div class="relative ">
	<a
		href={project.link}
		class="block rounded-2xl bg-gray-800 p-5 shadow-md transition hover:bg-gray-700"
	>
		{#if project.logo}
			<img src={project.logo} width="100px" class="mx-auto mb-4 rounded-md" alt="" />
		{:else}
			<div class="text-8xl/[120px] text-center">📦</div>
		{/if}
		<h3 class="mb-2 text-xl font-semibold">{project.title}</h3>
		<p class="mb-3 line-clamp-5 text-sm text-gray-300">
			{project.description}
		</p>
		<div class="flex flex-wrap gap-2">
			{#each project.techStack as tag}
				<span class="rounded-full bg-gray-700 px-2 py-1 text-xs">{tag}</span>
			{/each}
		</div>
	</a>
</div>

<style>
	
</style>

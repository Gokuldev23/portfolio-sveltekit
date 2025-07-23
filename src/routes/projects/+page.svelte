<script>
	import { projects } from '$lib/js/projects';

	import Project from '$lib/components/Project.svelte';
</script>

<main class="px-4">
	<div
		class=" mx-auto my-14 max-w-5xl rounded-xl bg-neutral-800 p-4 lg:my-32"
		style="view-transition-name: projects;"
	>
		<div class=" mb-4 text-white">
			<h2 class="text-2xl font-semibold">Projects</h2>
		</div>
		<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project, i}
				<Project
					title={project.title}
					description={project.description}
					image={project.image}
					logo={project.logo}
				/>
			{/each}
		</div>
	</div>
</main>

<style>
	@view-transition {
		navigation: auto;
	}
</style>

<script>
	import { projects } from '$lib/js/projects';
	import About from './About.svelte';
	import Project from './Project.svelte';

	const mainProjects = projects.filter((pr) => pr.type === 'CORE');

	const sideProjects = projects.filter((pr) => pr.type === 'SIDE');
</script>

<div class="min-h-screen bg-gray-950 px-4 py-10 text-white sm:px-10">

	<About/>

	<section class="mb-16">
		<h2 class="mb-6 text-2xl font-bold">🚀 Main Projects</h2>
		<div class="flex gap-4 overflow-x-scroll scrollbar-css  w-full rounded-lg p-2">
			{#each mainProjects as project}
				<div class=" whitespace-nowrap max-w-xs">
					<Project project={project}/>
				</div>
			{/each}
		</div>
	</section>

	<section>
		<h2 class="mb-6 text-2xl font-bold">🛠️ Side Projects</h2>
		<div class="grid gap-6 sm:grid-cols-3">
			{#each sideProjects as project}
				<Project project={project}/>
			{/each}
		</div>
	</section>
</div>

<style>
	.scrollbar-css{
		 scrollbar-color: grey rgba(39, 38, 38, 0.649);
  		scrollbar-width: thin;
	}
	.scrollbar-css::-webkit-scrollbar-button {
		display: none;
		width: 0;
	}
</style>

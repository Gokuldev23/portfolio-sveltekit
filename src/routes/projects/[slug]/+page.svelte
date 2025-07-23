<script>
	// @ts-nocheck
	import Icon from '@iconify/svelte';

	import { page } from '$app/stores';
	import { projects } from '$lib/js/projects.ts';

	let project_name = $derived($page.params.slug);
	let current_project = $derived(projects.filter((project) => project.title == project_name)[0]);
	let image = $derived(current_project.image);
	let description = $derived(current_project.description);
	let logo = $derived(current_project.logo);
	let contribution = $derived(current_project.contribution);
	let underDev = $derived(current_project.underDevelpoment);
	let solo = $derived(current_project.solo);
	let link = $derived(current_project.link);

	let icons = {
		web: 'icon-park:add-web',
		android: 'flat-color-icons:android-os',
		ios: 'fa6-brands:app-store-ios'
	};
</script>

<main class="mx-auto my-14 max-w-6xl p-4 lg:my-32">
	<div
		id="projects"
		class="w-full rounded-2xl bg-neutral-900 p-4"
		style="view-transition-name: projects;"
	>
		<div class="flex items-center justify-between text-white">
			<h2 class="text-center text-xl font-medium text-neutral-200">Project</h2>
			<div class="flex items-center gap-5">
				{#if solo}
					<div class="trail flex items-center gap-3 rounded-full bg-blue-200/20 px-4 py-1">
						<div class="relative size-3 rounded-full bg-blue-500">
							<div class="absolute size-3 animate-ping rounded-full bg-blue-500"></div>
						</div>
						<p class="text-sm">Indie Build / Solo</p>
					</div>
				{/if}
				{#if underDev}
					<div class="flex items-center gap-3 rounded-full bg-green-200/20 px-4 py-1">
						<div class="h-2 w-2 rounded-full bg-green-300"></div>
						<p class="text-sm">Under development</p>
					</div>
				{/if}
			</div>
		</div>

		<div class="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
			<img
				style="view-transition-name: {project_name}-image;"
				class="w-full rounded-xl"
				src={image}
				alt=""
			/>
			<div class="space-y-5 lg:col-span-2">
				<h1
					style="view-transition-name: {project_name}-name;"
					class="text-2xl font-bold uppercase text-white lg:text-4xl"
				>
					{project_name}
				</h1>
				<p class="text-base/6 text-white lg:text-lg/7">{description}</p>
				<a
					target="_blank"
					href={link}
					class="flex w-fit items-center gap-3    {link == null?"cursor-not-allowed bg-gray-500":"bg-blue-200/20  hover:bg-blue-500 hover:text-white text-blue-500"} rounded-full  px-4 py-1 font-semibold  transition-all duration-500"
				>
					<p>Go to {project_name}</p>
					<Icon icon="humbleicons:external-link" />
				</a>
			</div>
		</div>
	</div>

	<div class="my-4 rounded-xl bg-neutral-900 p-4">
		<div class="flex items-center justify-between text-white">
			<h2 class="text-2xl font-semibold">Contribution</h2>
		</div>
		<div class="mt-5 pl-5">
			<ul class="list-outside list-disc space-y-4 text-white">
				{#each contribution as contribute}
					<li class=" font-medium lg:text-lg">{contribute}</li>
				{/each}
			</ul>
		</div>
	</div>
</main>

<style>
	@view-transition {
		navigation: auto;
	}
</style>

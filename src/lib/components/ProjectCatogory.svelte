<script>
	import { getProjectEmoji } from "$lib/js/projects";
	import Project from "./Project.svelte";

    const {category} = $props()

    const [categoryName , projects] = $derived(category)

	const categoryEmoji = $derived(getProjectEmoji(categoryName))
</script>

<section class="xl:mb-16 md:mb-10 mb-6">
	<h2 class="mb-6 text-2xl font-bold capitalize">{categoryEmoji} {categoryName.split("_").join(" ").toLowerCase()} Projects</h2>
	<div class="{projects.length>3?"scroll-bar-css":"no-scrollbar"} flex w-full gap-4 overflow-x-scroll rounded-lg p-2">
		{#each projects as project}
			<div class="max-w-xs min-w-80">
				<Project {project} />
			</div>
		{/each}
	</div>
</section>

<style>
   .scroll-bar-css::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgb(0, 0, 0);
		background-color: #000000;
	}

	.scroll-bar-css::-webkit-scrollbar {
		width: 10px;
		scrollbar-width: thin;
		background-color: #1f1e1e;
	}

	.scroll-bar-css::-webkit-scrollbar-thumb {
		background-color: #3a3838;
		border-radius: 999px;
	}
    
    .no-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;    /* Firefox */
    }
    
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
</style>
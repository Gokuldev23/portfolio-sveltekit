<script>
	import Project from "./Project.svelte";

    const {category} = $props()

    const [categoryName , projects] = $derived(category)

</script>

<section class="xl:mb-16 md:mb-10 mb-6">
	<h2 class="mb-6 text-2xl font-bold capitalize">🚀 {categoryName.toLowerCase()} Projects</h2>
	<div class="{projects.length>3?"scrollbar-css":"no-scrollbar"} flex w-full gap-4 overflow-x-scroll rounded-lg p-2">
		{#each projects as project}
			<div class="max-w-xs min-w-80">
				<Project {project} />
			</div>
		{/each}
	</div>
</section>

<style>
    .scrollbar-css{
		 scrollbar-color: grey rgba(39, 38, 38, 0.649);
  		scrollbar-width: thin;
	}
	.scrollbar-css::-webkit-scrollbar-button {
        display: none;
        height: 0;
        width: 0;
    }
    
    .no-scrollbar {
        scrollbar-width: none;
        
    }
</style>
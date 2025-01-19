<script>
    import { projects } from "$lib/js/projects";
	import { tick } from "svelte";
</script>



<main>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 my-32 max-w-5xl mx-auto ">
        {#each projects as project,i}

            <a href="projects/{project.title}" class="shadow-lg relative overflow-hidden bg-radial">
                <img style="view-transition-name: {project.title}-logo;" class="absolute left-0 top-0 size-10  z-10 rounded-full logo" src="{project.logo}" alt="">
                <img  style="view-transition-name: {project.title}-image;" class="text-xl brightness-75 bg" src={project.image} alt={project.title} />
                <div class="p-4">
                    <h1 style="view-transition-name:{project.title}-name;" class="text-gray-900 font-semibold text-xl capitalize">{project.title}</h1>
                    <p style="view-transition-name: {project.title}-description;" class="mt-2 text-gray-600 text-sm line-clamp-3">{project.description}</p>
                    <div class="flex items-center mt-3 text-blue-500 hover:underline">View Project</div>
                </div>
            </a>
        {/each}
    </div>
</main>


<style>
    @view-transition {
    navigation: auto;
}   
</style>
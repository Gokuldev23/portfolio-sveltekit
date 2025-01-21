<script>
    import { projects } from "$lib/js/projects";

    import Project from "$lib/components/Project.svelte";
</script>



<main>
    <div class="grid p-4 my-32 max-w-5xl mx-auto gap-y-10">
        {#each projects as project,i}
            <Project title={project.title} description={project.description} image={project.image} logo={project.logo} />
        {/each}
    </div>
</main>


<style>
    @view-transition {
        navigation: auto;
    }   
</style>
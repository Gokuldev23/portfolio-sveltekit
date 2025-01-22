<script>
    import { page } from "$app/stores";
    import { projects } from "$lib/js/projects.js";


    let project_name = $derived($page.params.slug) 
    let current_project = $derived(projects.filter(project => project.title == project_name)[0])
    let image = $derived(current_project.image)
    let description = $derived(current_project.description)
    let logo = $derived(current_project.logo)
</script>


<main class="min-h-screen  text-black mt-20 md:mt-0">
    <div class="w-full max-h-[60vh] flex justify-center bg-black">
        <img style="view-transition-name:{project_name}-image;" class="max-w-5xl w-full aspect-auto rounded-lg" src="{image}" alt="">
    </div>
    <div class="max-w-5xl mx-auto p-4">
        <div class="flex items-center gap-4">
            <img style="view-transition-name: {project_name}-logo;" class="size-24" src="{logo}" alt="">
            <h1 style="view-transition-name:{project_name}-name;" class="text-gray-900 font-bold text-2xl capitalize">{project_name}</h1>
        </div>
        <p style="view-transition-name: {project_name}-description;" class="my-4">{description}</p>
    </div>
</main>

<style>
@view-transition {
    navigation: auto;
}
</style>
<script>
// @ts-nocheck

    import { page } from "$app/stores";
    import { projects } from "$lib/js/projects.js";
	import Icon from "@iconify/svelte";


    let project_name = $derived($page.params.slug) 
    let current_project = $derived(projects.filter(project => project.title == project_name)[0])
    let image = $derived(current_project.image)
    let description = $derived(current_project.description)
    let logo = $derived(current_project.logo)

    let icons = {
        web:"icon-park:add-web",
        android:"flat-color-icons:android-os",
        ios:"fa6-brands:app-store-ios"
    }
</script>


<main class="min-h-screen max-w-5xl mx-auto pb-20 text-black mt-20 md:mt-0 p-4">
    <div class="w-full max-h-[60vh] flex justify-center ">
        <img style="view-transition-name:{project_name}-image;" class="max-w-5xl w-full aspect-auto rounded-lg" src="{image}" alt="">
    </div>
    <div class="max-w-5xl mx-auto">
        <div class="flex items-center gap-4">
            <img style="view-transition-name: {project_name}-logo;" class="size-24" src="{logo}" alt="">
            <h1 style="view-transition-name:{project_name}-name;" class="text-gray-900 font-bold text-2xl capitalize">{project_name}</h1>
        </div>
        <p style="view-transition-name: {project_name}-description;" class="mt-4">{description}</p>
    </div>


    <div class="grid md:grid-cols-2 gap-y-10 my-10">
        <div class="">
            <h1 class="text-red-500 font-bold mb-5 uppercase text-2xl">Tech stack used</h1>
            <div class="grid  md:grid-cols-3 gap-4 items-center flex-wrap capitalize">
                {#each current_project.techStack as stack}
                    <p class="bg-black hover:bg-white border-2 text-center border-black cursor-default hover:text-black transition-all duration-200 text-white px-3 py-1 rounded-full">{stack}</p>
                {/each}
            </div>
        </div>
    
        <div class="w-fit mx-auto">
            <h1 class="text-blue-500 font-bold mb-5 uppercase text-center text-2xl">Available</h1>
            <div class="flex justify-center gap-4 items-center w-full mx-auto flex-wrap capitalize">
                {#each current_project.platform as platform}
                    <a href="{platform == 'web'?current_project.link:'#'}" class="bg-slate-300 hover:bg-white border-2 flex gap-2 items-center text-center border-black 
                    cursor-default hover:text-black transition-all duration-200 text-slate-800 px-3 py-1 rounded-full">
                        <div>
                            <Icon icon={icons[platform]}  />
                        </div>
                        {platform}
                    </a>
                {/each}
            </div>
        </div>
    </div>
</main>

<style>
@view-transition {
    navigation: auto;
}
</style>
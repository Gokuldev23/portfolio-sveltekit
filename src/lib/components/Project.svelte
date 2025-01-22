<script>
    let {title, description, image, logo} = $props();

    let imgLoaded = $state(false)
    const handleImgLoaded = () => {
        imgLoaded = true
    }

</script>

<a href="projects/{title}" class=" grid landscape:grid-cols-[300px_1fr] portrait:grid-cols-1 relative overflow-hidden">
    <h1 style="view-transition-name:{title}-name;" class="text-gray-900 my-3 font-semibold text-2xl portrait:block landscape:hidden capitalize">{title}</h1>
    <div class="relative">
        <img style="view-transition-name: {title}-logo;" class="absolute left-0 top-0 size-10  z-10 rounded-full" src="{logo}" alt="">
        <div class="w-full h-full bg-gray-500 animate-pulse {imgLoaded?'hidden':'block'}"></div>
        <img loading="lazy" style="view-transition-name: {title}-image;" onload={handleImgLoaded} class="text-xl brightness-75 transition-opacity duration-500
         {imgLoaded?'opacity-100':'opacity-0'}" src={image} alt={title} />
    </div>
    <div class="px-4">
        <h1 style="view-transition-name:{title}-name;" class="text-gray-900 font-semibold text-xl portrait:hidden  capitalize">{title}</h1>
        <p style="view-transition-name: {title}-description;" class="mt-2 text-gray-600 text-sm line-clamp-3">{description}</p>
        <div class="flex items-center mt-3 text-blue-500 hover:underline">View Project</div>
    </div>
</a>
<script>
	let { title, description, image, logo } = $props();

	let imgLoaded = $state(false);
	const handleImgLoaded = () => {
		imgLoaded = true;
	};
</script>

<!-- <a href="projects/{title}">
	<img src={image} class="rounded-2xl" alt="" />
</a> -->

<div class="project relative w-full">
	<img style=" view-transition-name:{title}-image" class="w-full rounded-xl" src={image} alt="" />
	<a
		class="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border
						bg-black/80 text-lg font-semibold uppercase tracking-wider text-white shadow-lg xl:text-2xl"
		href="/projects/{title}"
	>
		<span class="text-center" style="view-transition-name: {title}-name;">{title}</span>
	</a>
</div>

<style>
	.project a {
		opacity: 0;
		transition: opacity 400ms ease;
	}

	.project:hover a {
		opacity: 1;
		animation: slide-up 400ms ease-out;
	}
</style>

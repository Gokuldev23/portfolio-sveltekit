<script>
	let slogan = 'Full-stack developer crafting seamless user-to-server experiences.';
</script>

<main class="mx-auto my-10 grid max-w-7xl grid-cols-2">
	<div id="col-one">
		<div id="box1" class="relative rounded-xl bg-neutral-900 p-4 py-6 pb-8 font-bold">
			<h1 class="tracking-wider text-white">{slogan}</h1>
			<button
				class="absolute bottom-3 right-5 rounded-full bg-violet-600 px-5 py-4 text-xl font-semibold text-white"
				>Hire me 👋</button
			>
		</div>
		<div id="metrics" class="my-5 grid grid-cols-3 gap-4">
			<div class="rounded-xl bg-teal-400 py-20 text-white">
				<p class="mx-auto text-center text-4xl font-bold">2+</p>
				<p class="my-1 text-center text-sm">Years Experience</p>
			</div>
			<div class="rounded-xl bg-yellow-500 py-20">
				<p class="mx-auto text-center text-4xl font-bold">10+</p>
				<p class="my-1 text-center text-sm">Real-World Projects</p>
			</div>
			<div class="rounded-xl bg-pink-400 py-20 text-white">
				<p class="mx-auto text-center text-4xl font-bold">AI</p>
				<p class="my-1 text-center text-sm">Shipped an AI project</p>
			</div>
		</div>
	</div>

	<div id="col-two">
		<header></header>
		<div id="image-detail">
			<img src="/gokul2x.png" alt="" />
		</div>
	</div>
</main>

<style>
	#box1 h1 {
		font-size: clamp(24px, 2vw, 48px);
		word-spacing: 4px;
	}
</style>

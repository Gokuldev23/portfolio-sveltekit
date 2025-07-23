<script>
	import { projects } from '$lib/js/projects';
	import Icon from '@iconify/svelte';

	let slogan = 'Full-stack developer crafting seamless user-to-server experiences.';

	let metricsData = [
		{
			metric: '2+',
			description: 'Years Experience',
			bg: 'bg-zinc-800'
		},
		{
			metric: '10+',
			description: 'Real-World Projects',
			bg: 'bg-slate-700'
		},
		{
			metric: 'AI',
			description: 'Shipped an AI project',
			bg: 'bg-neutral-700'
		}
	];
</script>

{#snippet project(
	/** @type {string} */ name,
	/** @type {string} */ image,
	/** @type {string} */ link
)}
	<div class="project relative h-fit">
		<img class="w-56 rounded-xl" src={image} alt="" />
		<a
			class="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl
						bg-black/60 text-lg font-semibold tracking-wider text-white shadow-lg"
			href="/projects/{name}">{name}</a
		>
	</div>
{/snippet}

{#snippet metrics(
	/** @type {string} */ metric,
	/** @type {string} */ desc,
	/** @type {string} */ bg
)}
	<div class="rounded-xl border bg-neutral-700 {bg} py-10 text-white sm:py-16">
		<p class="mx-auto text-center text-2xl font-bold sm:text-4xl">{metric}</p>
		<p class="my-1 text-center text-xs sm:text-sm">{desc}</p>
	</div>
{/snippet}

<main class="mx-auto max-w-4xl p-4 lg:py-10 xl:max-w-7xl">
	<div class=" grid gap-5 xl:grid-cols-2">
		<div id="col-one" class="order-2">
			<div
				id="box1"
				class="relative hidden rounded-xl bg-neutral-900 p-4 py-6 pb-12 font-bold sm:block"
			>
				<h1 class="text-4xl/[44px] tracking-wider text-white">{slogan}</h1>
				<button
					class="absolute bottom-2 right-5 rounded-full bg-violet-600 px-5 py-2 text-xl font-semibold text-white"
					>Connect me 👋</button
				>
			</div>
			<div id="metrics" class="my-5 grid grid-cols-3 gap-4">
				{#each metricsData as { metric, description, bg }}
					{@render metrics(metric, description, bg)}
				{/each}
			</div>
		</div>

		<div id="col-two " class="order-1 xl:order-2">
			<header class=" mb-4 flex rounded-2xl bg-neutral-900 p-4">
				<p class="text-xl text-white">Full stack developer</p>
			</header>
			<div id="image-detail" class="grid gap-4 xs:grid-cols-2">
				<img
					class="grayscale-75 h-full w-full rounded-xl object-cover saturate-50 xl:w-auto"
					src="/gokul2x.png"
					alt=""
				/>
				<section id="details" class="flex flex-col">
					<div
						class="flex items-center justify-between rounded-2xl bg-neutral-900 px-4 py-4 text-white"
					>
						<label for="">Name: </label>
						<p class="font-semibold">Gokul Venkatraman</p>
					</div>
					<div class="mt-4 rounded-2xl bg-neutral-900 p-4 lg:flex-1">
						<div class="flex items-center justify-between rounded-2xl text-white">
							<label for="">Based in: </label>
							<p class="font-semibold">Trichy, Tamil Nadu</p>
						</div>
						<img class="mx-auto mt-5 w-1/4 lg:w-1/2" src="/map-pin.png" alt="" />
					</div>

					<div id="links" class="mt-4 flex items-center justify-between rounded-2xl bg-neutral-900">
						<a
							href="https://linkedin.com/in/gokul-venkatraman-dev"
							target="_blank"
							class="size-20 rounded-full p-3"
						>
							<Icon icon="devicon:linkedin" width={'100%'} />
						</a>

						<a
							href="https://github.com/Gokuldev23"
							target="_blank"
							class="size-20 rounded-full p-3"
						>
							<Icon icon="garden:github-fill-16" style="color:white" width={'100%'} />
						</a>

						<a href="/Gokul _Frontend_dev_2025.pdf" download="" class="size-20 rounded-full p-3">
							<Icon icon="mdi:resume" style="color:skyblue;" width={'100%'} />
						</a>
					</div>
				</section>
			</div>
		</div>
	</div>
	<footer class="mt-5 grid w-full gap-4 xl:grid-cols-2">
		<div
			id="projects"
			class="w-full rounded-2xl bg-neutral-900 p-4"
			style="view-transition-name: projects;"
		>
			<div class="flex items-center justify-between text-white">
				<h2 class="text-2xl font-semibold">Projects</h2>
				<a class="text-gray-200" href="/projects">See All</a>
			</div>

			<div id="project-links" class="mt-5 flex justify-between gap-2">
				{#each projects.slice(0, 3) as { title, image, link }}
					{@render project(title, image, link)}
				{/each}
			</div>
		</div>

		<div id="about" class="rounded-2xl bg-neutral-900 p-4">
			<div class="flex items-center justify-between text-white">
				<h2 class="text-2xl font-semibold">About</h2>
				<a class="text-gray-200" href="/Gokul _Frontend_dev_2025.pdf" download="">Resume</a>
			</div>
			<p
				class="lg:line-clamp-unset mt-4 line-clamp-6 text-pretty text-justify text-lg/9 text-gray-200"
			>
				Versatile full-stack developer with experience in frontend and backend development,
				specializing in React Native Svelte, Sveltekit Node.js. Skilled in building scalable web and
				mobile applications with a focus on performance and user experience. Continuously expanding
				knowledge in databases, APIs, and real-time systems to deliver efficient solutions.
				Passionate about problem-solving and creating impactful software.
			</p>
		</div>
	</footer>
</main>

<style>
	* {
		interpolate-size: allow-keywords;
	}
	.project a {
		opacity: 0;
		transition: opacity 400ms ease;
	}

	.project:hover a {
		opacity: 1;
		animation: slide-up 400ms ease-out;
	}
</style>

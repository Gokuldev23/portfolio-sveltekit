<script>
	import { projects } from '$lib/js/projects';

	const mainProjects = projects.filter((pr) => pr.type == 'CORE');

	const sideProjects = projects.filter((pr) => pr.type === 'SIDE');
</script>

<div class="min-h-screen bg-gray-950 px-4 py-10 text-white sm:px-10">
<section class="flex gap-5 mb-16 items-center">
  <p class="text-[100px] leading-none text-white sm:block hidden">&lt;</p>

  <img class="rounded-xl hidden lg:block" src="/gokul-croped-256.png" alt="" />

  <div>
    <h1 class="mb-4 text-4xl font-bold">👋 Hey, I'm Gokul Venkatraman</h1>

    <div class="flex gap-2 *:text-gray-400 whitespace-nowrap  w-[400px] md:w-full overflow-auto  *:bg-neutral-700 *:rounded-md *:px-4 *:py-1 my-4 *:text-xs *:sm:text-sm font-medium">
      <p>Founding Engineer</p>
      <p>Frontend Engineer</p>
      <p>FullStack Engineer</p>
      <p>AI Engineer</p>
    </div>

    <p class="max-w-xl text-lg text-gray-300">
      Founder-minded engineer building fast, AI-powered, and scalable apps. From startup backends to
      slick mobile UIs — I ship at speed.
    </p>

    <div class="mt-6 space-x-4">
      <a href="/Gokul_Full_Stack_Dev.pdf" class="rounded-xl bg-white/75 px-4 py-2 font-semibold text-black">
        📄 Resume
      </a>
      <a href="mailto:gokul@example.com" class="rounded-xl border border-white px-4 py-2">
        📬 Contact
      </a>
    </div>
  </div>

  <p class="text-[100px] leading-none text-white sm:block hidden">&nbsp;/&gt;</p>
</section>


	<section class="mb-16">
		<h2 class="mb-6 text-2xl font-bold">🚀 Main Projects</h2>
		<div class="grid gap-6 sm:grid-cols-4">
			{#each mainProjects as project}
				<a
					href={project.link}
					class="block h-fit rounded-2xl bg-gray-800 p-5 shadow-md transition hover:bg-gray-700"
				>
					<img src={project.image} width="100px" class="mx-auto mb-4 rounded-md" alt="" />
					<h3 class="mb-2 text-xl font-semibold">{project.title}</h3>
					<p class="mb-3 line-clamp-5 text-sm text-gray-300">
						{project.description}
					</p>
					<div class="flex flex-wrap gap-2">
						{#each project.techStack as tag}
							<span class="rounded-full bg-gray-700 px-2 py-1 text-xs">{tag}</span>
						{/each}
					</div>
				</a>
			{/each}
		</div>
	</section>

	<section>
		<h2 class="mb-6 text-2xl font-bold">🛠️ Side Projects</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each sideProjects as project}
				<a
					href={project.link}
					target="_blank"
					class="rounded-2xl bg-gray-800 p-5 shadow-md transition hover:bg-gray-700"
				>
					<h3 class="mb-2 text-xl font-semibold">{project.title}</h3>
					<p class="mb-3 text-sm text-gray-300">{project.description}</p>
					<div class="flex flex-wrap gap-2">
						{#each project.techStack as tag}
							<span class="rounded-full bg-gray-700 px-2 py-1 text-xs">{tag}</span>
						{/each}
					</div>
				</a>
			{/each}
		</div>
	</section>
</div>

<style>
	a:hover {
		text-decoration: none;
	}
</style>

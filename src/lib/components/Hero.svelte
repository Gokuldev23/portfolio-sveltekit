<script>
	import { projects } from "$lib/js/projects";


  const mainProjects = projects.filter(pr=>pr.type == "CORE")

  const sideProjects = projects.filter(pr=>pr.type=== "SIDE")
</script>

<div class="min-h-screen bg-gray-950 text-white px-4 py-10 sm:px-10">
  <section class="mb-16">
    <h1 class="text-4xl font-bold mb-4">👋 Hey, I'm Gokul</h1>
    <p class="text-lg text-gray-300 max-w-xl">Founder-minded engineer building fast, AI-powered, and scalable apps. From startup backends to slick mobile UIs — I ship at speed.</p>
    <div class="mt-6 space-x-4">
      <a href="/Gokul_Full_Stack_Dev.pdf" class="bg-white text-black font-semibold px-4 py-2 rounded-xl">📄 Resume</a>
      <a href="mailto:gokul@example.com" class="border border-white px-4 py-2 rounded-xl">📬 Contact</a>
    </div>
  </section>

  <section class="mb-16">
    <h2 class="text-2xl font-bold mb-6">🚀 Main Projects</h2>
    <div class="grid sm:grid-cols-4 gap-6">
      {#each mainProjects as project}
        <a href={project.link} class="bg-gray-800 p-5 rounded-2xl block h-fit shadow-md hover:bg-gray-700 transition">
			<img src={project.image} width="100px" class="mx-auto rounded-md mb-4" alt="">
			<h3 class="text-xl font-semibold mb-2">{project.title}</h3>
          <p class="text-gray-300 text-sm mb-3 line-clamp-5">
			{project.description}
		  </p>
          <div class="flex flex-wrap gap-2">
            {#each project.techStack as tag}
              <span class="text-xs bg-gray-700 px-2 py-1 rounded-full">{tag}</span>
            {/each}
          </div>
        </a>
      {/each}
    </div>
  </section>

  <section>
    <h2 class="text-2xl font-bold mb-6">🛠️ Side Projects</h2>
    <div class="grid sm:grid-cols-2 gap-6">
      {#each sideProjects as project}
        <a href={project.link} target="_blank" class="bg-gray-800 p-5 rounded-2xl shadow-md hover:bg-gray-700 transition">
          <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
          <p class="text-gray-300 text-sm mb-3">{project.description}</p>
          <div class="flex flex-wrap gap-2">
            {#each project.techStack as tag}
              <span class="text-xs bg-gray-700 px-2 py-1 rounded-full">{tag}</span>
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

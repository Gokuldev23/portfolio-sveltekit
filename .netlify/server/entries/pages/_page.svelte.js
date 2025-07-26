import { Y as ensure_array_like, Z as attr, V as escape_html, S as pop, Q as push } from "../../chunks/index.js";
import { p as projects } from "../../chunks/projects.js";
function Hero($$payload, $$props) {
  push();
  const mainProjects = projects.filter((pr) => pr.type == "CORE");
  const sideProjects = projects.filter((pr) => pr.type === "SIDE");
  const each_array = ensure_array_like(mainProjects);
  const each_array_2 = ensure_array_like(sideProjects);
  $$payload.out += `<div class="min-h-screen bg-gray-950 px-4 py-10 text-white sm:px-10"><section class="flex gap-5 mb-16 items-center"><p class="text-[100px] leading-none text-white sm:block hidden">&lt;</p> <img class="rounded-xl hidden lg:block" src="/gokul-croped-256.png" alt=""> <div><h1 class="mb-4 text-4xl font-bold">👋 Hey, I'm Gokul Venkatraman</h1> <div class="flex gap-2 *:text-gray-400 whitespace-nowrap w-[400px] md:w-full overflow-auto *:bg-neutral-700 *:rounded-md *:px-4 *:py-1 my-4 *:text-xs *:sm:text-sm font-medium"><p>Founding Engineer</p> <p>Frontend Engineer</p> <p>FullStack Engineer</p> <p>AI Engineer</p></div> <p class="max-w-xl text-lg text-gray-300">Founder-minded engineer building fast, AI-powered, and scalable apps. From startup backends to
      slick mobile UIs — I ship at speed.</p> <div class="mt-6 space-x-4"><a href="/Gokul_Full_Stack_Dev.pdf" class="rounded-xl bg-white/75 px-4 py-2 font-semibold text-black svelte-169mijt">📄 Resume</a> <a href="mailto:gokul@example.com" class="rounded-xl border border-white px-4 py-2 svelte-169mijt">📬 Contact</a></div></div> <p class="text-[100px] leading-none text-white sm:block hidden"> /></p></section> <section class="mb-16"><h2 class="mb-6 text-2xl font-bold">🚀 Main Projects</h2> <div class="grid gap-6 sm:grid-cols-4"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let project = each_array[$$index_1];
    const each_array_1 = ensure_array_like(project.techStack);
    $$payload.out += `<a${attr("href", project.link)} class="block h-fit rounded-2xl bg-gray-800 p-5 shadow-md transition hover:bg-gray-700 svelte-169mijt"><img${attr("src", project.image)} width="100px" class="mx-auto mb-4 rounded-md" alt=""> <h3 class="mb-2 text-xl font-semibold">${escape_html(project.title)}</h3> <p class="mb-3 line-clamp-5 text-sm text-gray-300">${escape_html(project.description)}</p> <div class="flex flex-wrap gap-2"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let tag = each_array_1[$$index];
      $$payload.out += `<span class="rounded-full bg-gray-700 px-2 py-1 text-xs">${escape_html(tag)}</span>`;
    }
    $$payload.out += `<!--]--></div></a>`;
  }
  $$payload.out += `<!--]--></div></section> <section><h2 class="mb-6 text-2xl font-bold">🛠️ Side Projects</h2> <div class="grid gap-6 sm:grid-cols-2"><!--[-->`;
  for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
    let project = each_array_2[$$index_3];
    const each_array_3 = ensure_array_like(project.techStack);
    $$payload.out += `<a${attr("href", project.link)} target="_blank" class="rounded-2xl bg-gray-800 p-5 shadow-md transition hover:bg-gray-700 svelte-169mijt"><h3 class="mb-2 text-xl font-semibold">${escape_html(project.title)}</h3> <p class="mb-3 text-sm text-gray-300">${escape_html(project.description)}</p> <div class="flex flex-wrap gap-2"><!--[-->`;
    for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
      let tag = each_array_3[$$index_2];
      $$payload.out += `<span class="rounded-full bg-gray-700 px-2 py-1 text-xs">${escape_html(tag)}</span>`;
    }
    $$payload.out += `<!--]--></div></a>`;
  }
  $$payload.out += `<!--]--></div></section></div>`;
  pop();
}
function _page($$payload) {
  $$payload.out += `<section class="max-w-7xl mx-auto">`;
  Hero($$payload);
  $$payload.out += `<!----></section>`;
}
export {
  _page as default
};

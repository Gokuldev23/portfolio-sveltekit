import { Y as ensure_array_like, Z as attr, V as escape_html, S as pop, Q as push } from "../../chunks/index.js";
import { p as projects } from "../../chunks/projects.js";
function Hero($$payload, $$props) {
  push();
  const mainProjects = projects.filter((pr) => pr.type == "CORE");
  const sideProjects = projects.filter((pr) => pr.type === "SIDE");
  const each_array = ensure_array_like(mainProjects);
  const each_array_2 = ensure_array_like(sideProjects);
  $$payload.out += `<div class="min-h-screen bg-gray-950 text-white px-4 py-10 sm:px-10"><section class="mb-16"><h1 class="text-4xl font-bold mb-4">👋 Hey, I'm Gokul</h1> <p class="text-lg text-gray-300 max-w-xl">Founder-minded engineer building fast, AI-powered, and scalable apps. From startup backends to slick mobile UIs — I ship at speed.</p> <div class="mt-6 space-x-4"><a href="/Gokul_Full_Stack_Dev.pdf" class="bg-white text-black font-semibold px-4 py-2 rounded-xl svelte-3ll2ul">📄 Resume</a> <a href="mailto:gokul@example.com" class="border border-white px-4 py-2 rounded-xl svelte-3ll2ul">📬 Contact</a></div></section> <section class="mb-16"><h2 class="text-2xl font-bold mb-6">🚀 Main Projects</h2> <div class="grid sm:grid-cols-4 gap-6"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let project = each_array[$$index_1];
    const each_array_1 = ensure_array_like(project.techStack);
    $$payload.out += `<a${attr("href", project.link)} class="bg-gray-800 p-5 rounded-2xl block h-fit shadow-md hover:bg-gray-700 transition svelte-3ll2ul"><img${attr("src", project.image)} width="100px" class="mx-auto rounded-md mb-4" alt=""> <h3 class="text-xl font-semibold mb-2">${escape_html(project.title)}</h3> <p class="text-gray-300 text-sm mb-3 line-clamp-5">${escape_html(project.description)}</p> <div class="flex flex-wrap gap-2"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let tag = each_array_1[$$index];
      $$payload.out += `<span class="text-xs bg-gray-700 px-2 py-1 rounded-full">${escape_html(tag)}</span>`;
    }
    $$payload.out += `<!--]--></div></a>`;
  }
  $$payload.out += `<!--]--></div></section> <section><h2 class="text-2xl font-bold mb-6">🛠️ Side Projects</h2> <div class="grid sm:grid-cols-2 gap-6"><!--[-->`;
  for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
    let project = each_array_2[$$index_3];
    const each_array_3 = ensure_array_like(project.techStack);
    $$payload.out += `<a${attr("href", project.link)} target="_blank" class="bg-gray-800 p-5 rounded-2xl shadow-md hover:bg-gray-700 transition svelte-3ll2ul"><h3 class="text-xl font-semibold mb-2">${escape_html(project.title)}</h3> <p class="text-gray-300 text-sm mb-3">${escape_html(project.description)}</p> <div class="flex flex-wrap gap-2"><!--[-->`;
    for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
      let tag = each_array_3[$$index_2];
      $$payload.out += `<span class="text-xs bg-gray-700 px-2 py-1 rounded-full">${escape_html(tag)}</span>`;
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

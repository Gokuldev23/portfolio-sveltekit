import { Z as attr, V as escape_html, _ as stringify, Y as ensure_array_like } from "../../../chunks/index.js";
import { p as projects } from "../../../chunks/projects.js";
function Project($$payload, $$props) {
  let { title, description, image, logo } = $$props;
  $$payload.out += `<div class="project relative w-full svelte-1s3uoog"><img${attr("style", ` view-transition-name:${stringify(title)}-image`)} class="w-full rounded-xl"${attr("src", image)} alt=""> <a class="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border bg-black/80 text-lg font-semibold uppercase tracking-wider text-white shadow-lg xl:text-2xl svelte-1s3uoog"${attr("href", `/projects/${stringify(title)}`)}><span class="text-center"${attr("style", `view-transition-name: ${stringify(title)}-name;`)}>${escape_html(title)}</span></a></div>`;
}
function _page($$payload) {
  const each_array = ensure_array_like(projects);
  $$payload.out += `<main class="px-4"><div class="mx-auto my-14 max-w-5xl rounded-xl bg-neutral-800 p-4 lg:my-32" style="view-transition-name: projects;"><div class="mb-4 text-white"><h2 class="text-2xl font-semibold">Projects</h2></div> <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let project = each_array[i];
    Project($$payload, {
      title: project.title,
      description: project.description,
      image: project.image,
      logo: project.logo
    });
  }
  $$payload.out += `<!--]--></div></div></main>`;
}
export {
  _page as default
};

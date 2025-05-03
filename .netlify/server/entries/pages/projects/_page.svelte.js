import { W as attr, X as escape_html, _ as stringify, T as ensure_array_like } from "../../../chunks/index.js";
import { p as projects } from "../../../chunks/projects.js";
function Project($$payload, $$props) {
  let { title, description, image, logo } = $$props;
  $$payload.out += `<a${attr("href", `projects/${stringify(title)}`)} class="grid landscape:grid-cols-[300px_1fr] portrait:grid-cols-1 relative overflow-hidden"><h1${attr("style", `view-transition-name:${stringify(title)}-name;`)} class="text-orange-600 my-3 font-semibold text-2xl portrait:block landscape:hidden capitalize">${escape_html(title)}</h1> <div class="relative"><img${attr("style", `view-transition-name: ${stringify(title)}-logo;`)} class="absolute left-0 top-0 size-10 z-10 rounded-full"${attr("src", logo)} alt=""> <div${attr("class", `w-full h-full bg-gray-500 animate-pulse ${stringify("block")}`)}></div> <img loading="lazy"${attr("style", `view-transition-name: ${stringify(title)}-image;`)}${attr("class", `text-xl brightness-75 transition-opacity duration-500 ${stringify("opacity-0")}`)}${attr("src", image)}${attr("alt", title)} onload="this.__e=event"></div> <div class="px-4"><h1${attr("style", `view-transition-name:${stringify(title)}-name;`)} class="text-orange-600 font-semibold text-xl portrait:hidden capitalize">${escape_html(title)}</h1> <p${attr("style", `view-transition-name: ${stringify(title)}-description;`)} class="mt-2 text-gray-600 text-sm line-clamp-4">${escape_html(description)}</p> <div class="flex items-center mt-3 bg-blue-500 text-white px-4 rounded-full w-fit text-sm hover:underline">View Project</div></div></a>`;
}
function _page($$payload) {
  const each_array = ensure_array_like(projects);
  $$payload.out += `<main><div class="grid p-4 my-32 max-w-5xl mx-auto gap-y-10"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let project = each_array[i];
    Project($$payload, {
      title: project.title,
      description: project.description,
      image: project.image,
      logo: project.logo
    });
  }
  $$payload.out += `<!--]--></div></main>`;
}
export {
  _page as default
};

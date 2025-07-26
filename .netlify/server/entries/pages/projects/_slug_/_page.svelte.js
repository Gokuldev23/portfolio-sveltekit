import { W as store_get, Y as ensure_array_like, Z as attr, V as escape_html, X as unsubscribe_stores, S as pop, _ as stringify, Q as push } from "../../../../chunks/index.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import { p as page } from "../../../../chunks/stores.js";
import { p as projects } from "../../../../chunks/projects.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let project_name = store_get($$store_subs ??= {}, "$page", page).params.slug;
  let current_project = projects.filter((project) => project.title == project_name)[0];
  let image = current_project.image;
  let description = current_project.description;
  current_project.logo;
  let contribution = current_project.contribution;
  let underDev = current_project.underDevelpoment;
  let solo = current_project.solo;
  let link = current_project.link;
  const each_array = ensure_array_like(contribution);
  $$payload.out += `<main class="mx-auto my-14 max-w-6xl p-4 lg:my-32"><div id="projects" class="w-full rounded-2xl bg-neutral-900 p-4" style="view-transition-name: projects;"><div class="flex items-center justify-between text-white"><h2 class="text-center text-xl font-medium text-neutral-200">Project</h2> <div class="flex items-center gap-5">`;
  if (solo) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="trail flex items-center gap-3 rounded-full bg-blue-200/20 px-4 py-1"><div class="relative size-3 rounded-full bg-blue-500"><div class="absolute size-3 animate-ping rounded-full bg-blue-500"></div></div> <p class="text-sm">Indie Build / Solo</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (underDev) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex items-center gap-3 rounded-full bg-green-200/20 px-4 py-1"><div class="h-2 w-2 rounded-full bg-green-300"></div> <p class="text-sm">Under development</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div> <div class="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"><img${attr("style", `view-transition-name: ${stringify(project_name)}-image;`)} class="w-full rounded-xl"${attr("src", image)} alt=""> <div class="space-y-5 lg:col-span-2"><h1${attr("style", `view-transition-name: ${stringify(project_name)}-name;`)} class="text-2xl font-bold uppercase text-white lg:text-4xl">${escape_html(project_name)}</h1> <p class="text-base/6 text-white lg:text-lg/7">${escape_html(description)}</p> <a target="_blank"${attr("href", link)}${attr("class", `flex w-fit items-center gap-3 ${stringify(link == null ? "cursor-not-allowed bg-gray-500" : "bg-blue-200/20  hover:bg-blue-500 hover:text-white text-blue-500")} rounded-full px-4 py-1 font-semibold transition-all duration-500`)}><p>Go to ${escape_html(project_name)}</p> `;
  Icon($$payload, { icon: "humbleicons:external-link" });
  $$payload.out += `<!----></a></div></div></div> <div class="my-4 rounded-xl bg-neutral-900 p-4"><div class="flex items-center justify-between text-white"><h2 class="text-2xl font-semibold">Contribution</h2></div> <div class="mt-5 pl-5"><ul class="list-outside list-disc space-y-4 text-white"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let contribute = each_array[$$index];
    $$payload.out += `<li class="font-medium lg:text-lg">${escape_html(contribute)}</li>`;
  }
  $$payload.out += `<!--]--></ul></div></div></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};

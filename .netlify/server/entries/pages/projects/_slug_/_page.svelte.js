import { $ as current_component, a0 as spread_attributes, S as pop, a1 as sanitize_props, Q as push, V as store_get, T as ensure_array_like, W as attr, X as escape_html, Y as unsubscribe_stores, _ as stringify } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { p as projects } from "../../../../chunks/projects.js";
import { c as checkIconState, g as generateIcon } from "../../../../chunks/functions.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const state = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$sanitized_props.onLoad === "function") {
      $$sanitized_props.onLoad(icon);
    }
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
    if (state.loading) {
      state.loading.abort();
      state.loading = null;
    }
  });
  {
    const isMounted = !!$$sanitized_props.ssr || mounted;
    const iconData = checkIconState($$sanitized_props.icon, state, isMounted, loaded, onLoad);
    data = iconData ? generateIcon(iconData.data, $$sanitized_props) : null;
    if (data && iconData.classes) {
      data.attributes["class"] = (typeof $$sanitized_props["class"] === "string" ? $$sanitized_props["class"] + " " : "") + iconData.classes.join(" ");
    }
  }
  if (data) {
    $$payload.out += "<!--[-->";
    if (data.svg) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<svg${spread_attributes({ ...data.attributes }, void 0, void 0, 3)}>${html(data.body)}</svg>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<span${spread_attributes({ ...data.attributes })}></span>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let project_name = store_get($$store_subs ??= {}, "$page", page).params.slug;
  let current_project = projects.filter((project) => project.title == project_name)[0];
  let image = current_project.image;
  let description = current_project.description;
  let logo = current_project.logo;
  let icons = {
    web: "icon-park:add-web",
    android: "flat-color-icons:android-os",
    ios: "fa6-brands:app-store-ios"
  };
  const each_array = ensure_array_like(current_project.techStack);
  const each_array_1 = ensure_array_like(current_project.platform);
  $$payload.out += `<main class="min-h-screen max-w-5xl mx-auto pb-20 text-black mt-20 md:mt-0 p-4"><div class="w-full max-h-[60vh] flex justify-center"><img${attr("style", `view-transition-name:${stringify(project_name)}-image;`)} class="max-w-5xl w-full aspect-auto rounded-lg"${attr("src", image)} alt=""></div> <div class="max-w-5xl mx-auto"><div class="flex items-center gap-4"><img${attr("style", `view-transition-name: ${stringify(project_name)}-logo;`)} class="size-24"${attr("src", logo)} alt=""> <h1${attr("style", `view-transition-name:${stringify(project_name)}-name;`)} class="text-gray-900 font-bold text-2xl capitalize">${escape_html(project_name)}</h1></div> <p${attr("style", `view-transition-name: ${stringify(project_name)}-description;`)} class="mt-4">${escape_html(description)}</p></div> <div class="grid md:grid-cols-2 gap-y-10 my-10"><div><h1 class="text-red-500 font-bold mb-5 uppercase text-2xl">Tech stack used</h1> <div class="grid md:grid-cols-3 gap-4 items-center flex-wrap capitalize"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let stack = each_array[$$index];
    $$payload.out += `<p class="bg-black hover:bg-white border-2 text-center border-black cursor-default hover:text-black transition-all duration-200 text-white px-3 py-1 rounded-full">${escape_html(stack)}</p>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="w-fit mx-auto"><h1 class="text-blue-500 font-bold mb-5 uppercase text-center text-2xl">Available</h1> <div class="flex justify-center gap-4 items-center w-full mx-auto flex-wrap capitalize"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let platform = each_array_1[$$index_1];
    $$payload.out += `<a${attr("href", platform == "web" ? current_project.link : "#")} class="bg-slate-300 hover:bg-white border-2 flex gap-2 items-center text-center border-black cursor-default hover:text-black transition-all duration-200 text-slate-800 px-3 py-1 rounded-full"><div>`;
    Icon($$payload, { icon: icons[platform] });
    $$payload.out += `<!----></div> ${escape_html(platform)}</a>`;
  }
  $$payload.out += `<!--]--></div></div></div></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};

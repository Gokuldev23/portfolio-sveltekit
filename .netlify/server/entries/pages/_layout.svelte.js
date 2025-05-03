import { T as ensure_array_like, V as store_get, W as attr, X as escape_html, Y as unsubscribe_stores, S as pop, Q as push, Z as head } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import "../../chunks/functions.js";
function Navbar($$payload, $$props) {
  push();
  var $$store_subs;
  let paths = [
    { name: "About", path: "/", icon: "mdi:about" },
    {
      name: "Projects",
      path: "/projects",
      icon: "si:projects-alt-fill"
    },
    {
      name: "Contact",
      path: "/contact",
      icon: "material-symbols:contact-support"
    }
  ];
  const each_array = ensure_array_like(paths);
  $$payload.out += `<header class="w-fit mx-auto fixed top-4 left-1/2 px-2 shadow-2xl shadow-black -translate-x-1/2 flex justify-center rounded-full p-1 svelte-1a18ddk"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { name, path, icon } = each_array[$$index];
    const active = store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/projects");
    $$payload.out += `<div><a${attr("href", path)} class="tab z-10 flex shrink-0 justify-center text-sm md:text-base items-center gap-2 md:w-32 w-24 text-center rounded-full relative font-bold svelte-1a18ddk"${attr("aria-current", store_get($$store_subs ??= {}, "$page", page).url.pathname == path || path == "/projects" && active ? "page" : null)}>${escape_html(name)}</a></div>`;
  }
  $$payload.out += `<!--]--></header>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Days+One&amp;family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&amp;family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">`;
  });
  $$payload.out += `<div class="relative overflow-x-hidden">`;
  Navbar($$payload);
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _layout as default
};

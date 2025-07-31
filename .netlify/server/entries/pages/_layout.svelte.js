import { T as attr, V as stringify, S as pop, Q as push } from "../../chunks/index.js";
import "../../chunks/client.js";
import { I as Icon } from "../../chunks/Icon.js";
function InDevelopment($$payload, $$props) {
  const { devMode } = $$props;
  $$payload.out += `<div${attr("class", `fixed right-4 top-4 z-50 ${stringify(devMode ? "flex" : "hidden")} items-center font-semibold gap-2 rounded-xl bg-yellow-800 px-3 py-0.5 text-white shadow-xl shadow-white`)}><div>`;
  Icon($$payload, { icon: "arcticons:nrf-toolbox" });
  $$payload.out += `<!----></div> <p>In Development</p></div>`;
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out += `<div id="scroll-bar-css" class="relative h-dvh overflow-auto bg-black svelte-100iycv">`;
  InDevelopment($$payload, { devMode: true });
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _layout as default
};

import { T as head, S as pop, Q as push } from "../../chunks/index.js";
import "../../chunks/client.js";
import { I as Icon } from "../../chunks/Icon.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Days+One&amp;family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&amp;family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">`;
  });
  $$payload.out += `<div class="relative h-dvh overflow-x-hidden bg-black"><div class="fixed right-4 top-4 text-white flex gap-2 items-center bg-yellow-800 px-3 py-0.5 rounded-sm"><div>`;
  Icon($$payload, { icon: "arcticons:nrf-toolbox" });
  $$payload.out += `<!----></div> <p>In Development</p></div> `;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _layout as default
};

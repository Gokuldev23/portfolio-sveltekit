import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.BsJmprhv.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.CR3CAaOI.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/utils.Czb-iYx6.js","_app/immutable/chunks/entry.C98eziux.js","_app/immutable/chunks/index-client.KKbfan_g.js","_app/immutable/chunks/Icon.CyMbSVAm.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/props.BXW3xx2t.js","_app/immutable/chunks/store.sdA9tQFS.js","_app/immutable/chunks/attributes.Vg0j_Aek.js","_app/immutable/chunks/lifecycle.DGBsIUHi.js"];
export const stylesheets = ["_app/immutable/assets/0.D4Kdw70z.css"];
export const fonts = [];

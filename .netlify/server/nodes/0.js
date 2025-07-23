import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DyRLs_JH.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Oabn1amb.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/template.DISRXPn6.js","_app/immutable/chunks/entry.DuyDbQwY.js","_app/immutable/chunks/index-client.DwkKqERF.js"];
export const stylesheets = ["_app/immutable/assets/0.uD1_vGdL.css"];
export const fonts = [];

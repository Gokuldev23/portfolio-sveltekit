import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.B2wtkese.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.B8y5klob.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/render.CimNhZ1N.js","_app/immutable/chunks/utils.siFxBU76.js","_app/immutable/chunks/template.Bd8TOUkT.js","_app/immutable/chunks/entry.BmwQLN9c.js","_app/immutable/chunks/index-client.ChZO7nO-.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/each.DJxHbgCW.js","_app/immutable/chunks/attributes.DfYL0ACE.js","_app/immutable/chunks/stores.BQgtbOS2.js","_app/immutable/chunks/store.zdlfRokA.js","_app/immutable/chunks/functions.DQ1eNffz.js"];
export const stylesheets = ["_app/immutable/assets/0.7feoOLe9.css"];
export const fonts = [];

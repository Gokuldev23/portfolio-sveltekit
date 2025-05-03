

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.1a3eYR3t.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/runtime.B8y5klob.js","_app/immutable/chunks/template.Bd8TOUkT.js"];
export const stylesheets = ["_app/immutable/assets/2.BzmT9UXk.css"];
export const fonts = [];

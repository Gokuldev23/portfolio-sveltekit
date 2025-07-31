import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.DLBX8qv8.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.CnjECmZx.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/utils.Z8M0aKJD.js","_app/immutable/chunks/snippet.BVXjXuNO.js","_app/immutable/chunks/entry.CAMmEHhy.js","_app/immutable/chunks/index-client.DkoaAcCk.js","_app/immutable/chunks/Icon.8fA44l6p.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/props.DvQ01OtT.js","_app/immutable/chunks/store.DDdps0B7.js","_app/immutable/chunks/attributes.B76d5qvC.js","_app/immutable/chunks/lifecycle.BBdylZ0H.js"];
export const stylesheets = ["_app/immutable/assets/0.IbSM96Y7.css"];
export const fonts = [];

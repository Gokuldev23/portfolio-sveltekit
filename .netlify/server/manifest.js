export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Gokul_Full_Stack_Dev.pdf","Lulugram-square.png","crosswordMart_logo.png","csmart-square.png","favicon.png","gokul-croped-256.png","gram-square.png","gramLogo.png","lulugramLogo.png","map-pin.png","support-system-preview.png","vidhyavartLogo.png","vidyavart-square.png","service-worker.js"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cijd_-JX.js","app":"_app/immutable/entry/app.D4SKfYh-.js","imports":["_app/immutable/entry/start.Cijd_-JX.js","_app/immutable/chunks/entry.C98eziux.js","_app/immutable/chunks/index-client.KKbfan_g.js","_app/immutable/chunks/runtime.CR3CAaOI.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/entry/app.D4SKfYh-.js","_app/immutable/chunks/runtime.CR3CAaOI.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/render.Ca6wnrb2.js","_app/immutable/chunks/utils.Czb-iYx6.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/props.BXW3xx2t.js","_app/immutable/chunks/store.sdA9tQFS.js","_app/immutable/chunks/index-client.KKbfan_g.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

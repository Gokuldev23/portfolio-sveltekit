export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Gokul_Full_Stack_Dev.pdf","Lulugram-square.png","NextTradeLogo.png","crosswordMart_logo.png","csmart-square.png","defaultLogo.png","favicon.png","gokul-croped-256.png","gram-square.png","gramLogo.png","loksaLogo.png","lulugramLogo.png","map-pin.png","metaHuntLogo.svg","support-system-preview.png","vidhyavartLogo.png","vidyavart-square.png","service-worker.js"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DxVBOE3X.js","app":"_app/immutable/entry/app.BjNx-0Qi.js","imports":["_app/immutable/entry/start.DxVBOE3X.js","_app/immutable/chunks/entry.CAMmEHhy.js","_app/immutable/chunks/index-client.DkoaAcCk.js","_app/immutable/chunks/runtime.CnjECmZx.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/entry/app.BjNx-0Qi.js","_app/immutable/chunks/runtime.CnjECmZx.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/render.BcpubgOc.js","_app/immutable/chunks/utils.Z8M0aKJD.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/props.DvQ01OtT.js","_app/immutable/chunks/store.DDdps0B7.js","_app/immutable/chunks/index-client.DkoaAcCk.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/(home)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/skills",
				pattern: /^\/skills\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Gokul_Full_Stack_Dev.pdf","Lulugram-square.png","Untitled design (1).png","Untitled design (2).png","Untitled design.png","box-desk.png","box-desk.webp","box-mob.png","contact.svg","csmart-square.png","cwd-bg.png","cwd-bg.webp","cwd.png","cwdLogo.png","favicon.png","gokul-croped.png","gokul.png","gokul1.png","gokul2x.png","gokul2xbw.png","gokul2xnew.png","gram-square.png","gramLogo.png","gramlok-bg.png","gramlok-bg.webp","hero.svg","icon.png","interacly-bg.png","interacly-bg.webp","interaclyLogo.png","map-pin.png","myImage.png","myImage1.png","splash.png","support-system-preview.png","vidhy.png","vidhyavartLogo.png","vidyavart-bg.png","vidyavart-bg.webp","vidyavart-square.png","service-worker.js"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".webp":"image/webp",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.lgLoTuzw.js","app":"_app/immutable/entry/app.BBenOC1K.js","imports":["_app/immutable/entry/start.lgLoTuzw.js","_app/immutable/chunks/entry.DuyDbQwY.js","_app/immutable/chunks/index-client.DwkKqERF.js","_app/immutable/chunks/runtime.Oabn1amb.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/entry/app.BBenOC1K.js","_app/immutable/chunks/runtime.Oabn1amb.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/render.DIb4eBgS.js","_app/immutable/chunks/template.DISRXPn6.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/props.CGTL415p.js","_app/immutable/chunks/store.exbMpDrp.js","_app/immutable/chunks/index-client.DwkKqERF.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/skills",
				pattern: /^\/skills\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
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

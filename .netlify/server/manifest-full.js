export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Untitled design (1).png","Untitled design (2).png","Untitled design.png","box-desk.png","box-desk.webp","box-mob.png","contact.svg","cwd-bg.png","cwd-bg.webp","cwd.png","cwdLogo.png","favicon.png","gokul1.png","gramLogo.png","gramlok-bg.png","gramlok-bg.webp","hero.svg","icon.png","interacly-bg.png","interacly-bg.webp","interaclyLogo.png","myImage.png","myImage1.png","splash.png","vidhy.png","vidhyavartLogo.png","vidyavart-bg.png","vidyavart-bg.webp","service-worker.js"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.wiRvaH6e.js","app":"_app/immutable/entry/app.DkA-9EG5.js","imports":["_app/immutable/entry/start.wiRvaH6e.js","_app/immutable/chunks/entry.BmwQLN9c.js","_app/immutable/chunks/index-client.ChZO7nO-.js","_app/immutable/chunks/runtime.B8y5klob.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/entry/app.DkA-9EG5.js","_app/immutable/chunks/runtime.B8y5klob.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/render.CimNhZ1N.js","_app/immutable/chunks/utils.siFxBU76.js","_app/immutable/chunks/template.Bd8TOUkT.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/props.DNwgwnHt.js","_app/immutable/chunks/store.zdlfRokA.js","_app/immutable/chunks/index-client.ChZO7nO-.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
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
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/skills",
				pattern: /^\/skills\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
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

export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/OFL.txt","fonts/README.txt","fonts/Rubik-Italic-VariableFont_wght.ttf","fonts/Rubik-VariableFont_wght.ttf","fonts/Rubik.zip","fonts/static/Rubik-Black.ttf","fonts/static/Rubik-BlackItalic.ttf","fonts/static/Rubik-Bold.ttf","fonts/static/Rubik-BoldItalic.ttf","fonts/static/Rubik-ExtraBold.ttf","fonts/static/Rubik-ExtraBoldItalic.ttf","fonts/static/Rubik-Italic.ttf","fonts/static/Rubik-Light.ttf","fonts/static/Rubik-LightItalic.ttf","fonts/static/Rubik-Medium.ttf","fonts/static/Rubik-MediumItalic.ttf","fonts/static/Rubik-Regular.ttf","fonts/static/Rubik-SemiBold.ttf","fonts/static/Rubik-SemiBoldItalic.ttf"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".ttf":"font/ttf",".zip":"application/zip"},
	_: {
		client: {"start":"_app/immutable/entry/start.uTEOHJV4.js","app":"_app/immutable/entry/app.DjS3_DDX.js","imports":["_app/immutable/entry/start.uTEOHJV4.js","_app/immutable/chunks/entry.53mwsJOR.js","_app/immutable/chunks/scheduler.DiKqOAi9.js","_app/immutable/entry/app.DjS3_DDX.js","_app/immutable/chunks/scheduler.DiKqOAi9.js","_app/immutable/chunks/index.BiHRbg5K.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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

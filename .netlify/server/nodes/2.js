

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BWiFxjh1.js","_app/immutable/chunks/scheduler.DiKqOAi9.js","_app/immutable/chunks/index.BiHRbg5K.js"];
export const stylesheets = ["_app/immutable/assets/2.B-JKWrJZ.css"];
export const fonts = [];

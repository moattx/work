

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CjgCzhph.js","_app/immutable/chunks/scheduler.DiKqOAi9.js","_app/immutable/chunks/index.BiHRbg5K.js"];
export const stylesheets = ["_app/immutable/assets/0.qBI1RXTW.css"];
export const fonts = [];

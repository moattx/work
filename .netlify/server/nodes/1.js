

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BMy32OmZ.js","_app/immutable/chunks/scheduler.DiKqOAi9.js","_app/immutable/chunks/index.BiHRbg5K.js","_app/immutable/chunks/entry.53mwsJOR.js"];
export const stylesheets = [];
export const fonts = [];

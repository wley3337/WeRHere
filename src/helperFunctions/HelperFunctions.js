
//sluging
export const nameSlug = (name) => { return name.replace(/\s/gm, "-").replace(/(\/)/gm, "*") }
export const nameDeSlug = (name) => { return name.replace(/(-)/gm, " ").replace(/(\*)/gm, "/") }
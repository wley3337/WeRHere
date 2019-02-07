
//sluging
export const nameSlug = (name) => { return name.replace(/\s/gm, "-") }
export const nameDeSlug = (name) => { return name.replace(/(-)/gm, " ") }
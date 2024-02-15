import camelcaseKeys from "camelcase-keys"

export const toCamleCase = <T extends Record<string, any>>(obj: T) =>
  camelcaseKeys(obj, { deep: true })

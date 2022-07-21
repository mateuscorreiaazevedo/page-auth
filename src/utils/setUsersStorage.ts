export const setStorage = (key: string, fn: any) => {
  localStorage.setItem(key, JSON.stringify(fn))
}

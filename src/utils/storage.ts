export const storageUtil = {
  get: (key: string) => {
    return localStorage.getItem(key)
  },
  set: (key: string, value: any) => {
    localStorage.setItem(key, value)
  },
  clear: () => localStorage.clear()

}

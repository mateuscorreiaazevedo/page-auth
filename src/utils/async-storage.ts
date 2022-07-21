import { storageUtil } from './storage'

export const asyncLocalStorage = {
  set: async (key: string, value: string) => {
    return new Promise((resolve) => resolve(storageUtil.set(key, value)))
  },
  get: async (key: string) => {
    return new Promise((resolve) => resolve(storageUtil.get(key)))
  }
}

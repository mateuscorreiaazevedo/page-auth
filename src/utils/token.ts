import { storageUtil } from './storage'

export const tokenUtil = {
  key: 'token',
  get: () => (
    storageUtil.get(tokenUtil.key)
  ),
  set: (value: any) => (
    storageUtil.set(tokenUtil.key, value)
  ),
  clear: () => {
    storageUtil.clear()
  }
}

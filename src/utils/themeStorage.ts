import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
]

export function themeStorage<T> (initialValue: T): Response<T> {
  const [state, setState] = useState(() => {
    const storageTheme = localStorage.getItem('theme')

    if (storageTheme) {
      return JSON.parse(storageTheme)
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(state))
  }, [state])

  return [
    state,
    setState
  ]
}

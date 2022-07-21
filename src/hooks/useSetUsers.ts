import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserProps } from '../types/user'
import { hash } from '../utils/hashId'
import { setStorage } from '../utils/setUsersStorage'

type Response = {
  user: UserProps
  initialValue: UserProps
  setUser: Dispatch<SetStateAction<UserProps>>
}

export const useSetUsers = ({ user, setUser, initialValue }: Response) => {
  const storageUsers = localStorage.getItem('users')
  const [users, setUsers] = useState<UserProps[]>(storageUsers ? JSON.parse(storageUsers) : [])
  const [errorMessage, setErrorMessage] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // const token = await hash()
    // const id = (users.length + 1)

    // if (user.password.length > 5) {
    //   setStorage('users', [...users, { ...user, id, token }])
    //   setUser(initialValue)
    //   setRefresh(prev => !prev)
    //   navigate('/login')
    // } else {
    //   setErrorMessage(prev => !prev)
    // }
    try {

    } catch (err) {
      alert(err.message)
    }
  }

  const loadStorage = () => {
    setUsers(storageUsers ? JSON.parse(storageUsers) : [])
  }

  return {
    handleSubmit,
    loadStorage,
    refresh,
    errorMessage
  }
}

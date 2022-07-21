import { asyncLocalStorage } from './async-storage'
import { hash } from './hashId'

export type User = {
  fullname: string
  email: string
  password: string
}
export type UserResponse = {
  fullname: string
  email: string
  id: string
}

class DbUsers {
  private readonly key = 'users'

  async create ({ email, fullname, password }: User): Promise<UserResponse> {
    if (!fullname.length) {
      throw new Error('Full Name is required')
    }
    if (!email.length) {
      throw new Error('email is required')
    }
    if (!password.length) {
      throw new Error('password is required')
    }
    if (/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(email)) {
      throw new Error('email is not valid')
    }
    if (password.length < 6) {
      throw new Error('Fill in the fields below to register')
    }

    const users = await this.getAll()

    if (users.length) {
      const user = users.find(user => user.email === email)

      if (user?.email) throw new Error('Email is not unique')
    }

    return this.save({ email, fullname, password })
  }

  private async getAll (): Promise<UserResponse[]> {
    const users = await asyncLocalStorage.get(this.key)

    if (users == null) return []

    return JSON.parse(users) as UserResponse[]
  }

  private async save (data: User): Promise<UserResponse> {
    const id = await hash()
    const users = await this.getAll()
    const user = {
      id,
      ...data,
      password: btoa(data.password)
    }

    await asyncLocalStorage.set(this.key, JSON.stringify([
      ...users,
      user
    ]))
    const { password, ...rest } = user

    return rest
  }

  private passwordIsEqual (userPassword: string, currentPassword: string): boolean {
    return userPassword === btoa(currentPassword)
  }
}

export const dbUsers = new DbUsers()

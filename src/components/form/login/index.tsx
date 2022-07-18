import React from 'react'
import { FieldInput } from '../../ui/input'

export const LoginForm = () => {
  return (
    <div>
      <form>
        <FieldInput type='email' placeholder='Enter email' nameId='email' />
      </form>
    </div>
  )
}

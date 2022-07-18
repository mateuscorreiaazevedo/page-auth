import React from 'react'
import { Button } from './style'

type Props = {
  text: string
}

export const ButtonSubmit: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <Button type='submit'>
        {text}
      </Button>
    </div>
  )
}

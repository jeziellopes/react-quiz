import React from 'react'

import * as S from './styles'

type ButtonProps = {
  type: 'button' | 'submit' | 'reset'
  label: any
  value: any
  onClick: () => void
}

export const Button = ({ type, value, ...props }: ButtonProps) => {
  return (
    <S.Container>
      <S.Button type={type} {...props}>
        {value}
      </S.Button>
    </S.Container>
  )
}

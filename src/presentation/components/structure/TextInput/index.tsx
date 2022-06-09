import React from 'react'

import * as S from './styles'

type InputProps = {
  type: 'button' | 'submit' | 'reset'
}

export const TextInput = ({ type, ...props }: InputProps) => {
  return <S.TextInput type={type} {...props} />
}

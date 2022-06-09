import React from 'react'

import * as S from './styles'

type RadioInputProps = {
  name: string
  value: string
  checked: boolean
  isCorrect?: boolean
  onClick?: React.MouseEventHandler<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const RadioInput = ({
  name,
  value,
  checked,
  isCorrect,
  onClick,
  onChange,
}: RadioInputProps) => (
  <S.Container>
    <S.Input
      type="radio"
      id={name}
      name={name}
      value={value}
      checked={checked}
      onClick={onClick}
      onChange={onChange}
    />
    <S.Label htmlFor={name} isCorrect={isCorrect}>
      {value}
    </S.Label>
  </S.Container>
)

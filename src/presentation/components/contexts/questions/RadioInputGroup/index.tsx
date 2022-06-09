import * as C from '@presentation/components'
import React from 'react'

import * as S from './styles'

type RadioInputGroupProps = {
  options: string[]
  correctAnswer?: string
  selectedAnswer?: string
  onChange: (value: string) => void
}

export const RadioInputGroup = ({
  options,
  correctAnswer,
  selectedAnswer,
  onChange,
}: RadioInputGroupProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value)
  }

  return (
    <S.Container>
      {options.map((option, key) => (
        <C.RadioInput
          isCorrect={option === correctAnswer}
          key={key}
          name={option}
          value={option}
          checked={option === selectedAnswer}
          onChange={handleChange}
        />
      ))}
    </S.Container>
  )
}

import * as C from '@presentation/components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

export const Home = () => {
  const navigate = useNavigate()

  const start = () => navigate('/questions/1')

  return (
    <S.Container>
      <S.Content>
        <S.Title>Quiz</S.Title>
        <S.Footer>
          <C.Button
            type="button"
            label="start"
            value="Iniciar"
            onClick={start}
          />
        </S.Footer>
      </S.Content>
    </S.Container>
  )
}

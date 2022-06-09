import * as C from '@presentation/components'
import { useQuiz } from '@presentation/hooks'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

export const Results = () => {
  const navigate = useNavigate()
  const { questions, correctAnswersCount, dispatchResetQuiz } = useQuiz()

  // reset quiz
  const restart = () => {
    dispatchResetQuiz()
    navigate('/')
  }

  // count percent helper
  const countPercent = useCallback(
    () =>
      correctAnswersCount ? (correctAnswersCount / questions.length) * 100 : 0,
    [correctAnswersCount]
  )

  return (
    <S.Container>
      <S.Content>
        <S.Results>
          <S.Label>{`Seu resultado foi`}</S.Label>
          <S.Label>{`${countPercent()}%`}</S.Label>
        </S.Results>
        <S.Footer>
          <C.Button
            type="button"
            label="restart"
            value="Recomeçar"
            onClick={restart}
          />
        </S.Footer>
      </S.Content>
    </S.Container>
  )
}

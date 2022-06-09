import * as C from '@presentation/components'
import { useQuiz } from '@presentation/hooks'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

export const Questions = () => {
  const navigate = useNavigate()
  const {
    index,
    question,
    questions,
    dispatchUpdateQuestionIndex,
    dispatchUpdateQuestionAnswer,
    questionsLength,
  } = useQuiz()

  // got to prev question
  const prevQuestion = useCallback(() => {
    if (index - 1 >= 0) {
      dispatchUpdateQuestionIndex(index - 1)
      return
    }
    navigate('/')
  }, [index])

  // check for more questions helper
  const endNotReached = useCallback(
    () => index < Object.values(questions).length - 1,
    [index, question]
  )

  // got to next question
  const nextQuestion = useCallback(() => {
    if (question?.selected_answer) {
      if (endNotReached()) {
        dispatchUpdateQuestionIndex(index + 1)
        return
      }
      navigate('/results')
    }
  }, [index, questions])

  // handle option answerSelected
  const handleChange = (value: string) => {
    dispatchUpdateQuestionAnswer(value)
  }

  return question.all_answers.length ? (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.Counter>{`${index}/${questionsLength(questions)}`}</S.Counter>
        </S.Header>
        <S.Question>
          <S.Title>{question?.question}</S.Title>
        </S.Question>
        <C.RadioInputGroup
          options={question.all_answers}
          // ↴ correct answer flag
          correctAnswer={question?.correct_answer}
          selectedAnswer={question?.selected_answer}
          onChange={handleChange}
        />
        <S.Footer>
          <C.Button
            type="button"
            label="back"
            value="Voltar"
            onClick={prevQuestion}
          />
          <C.Button
            type="button"
            label="next"
            value="Avançar"
            onClick={nextQuestion}
          />
        </S.Footer>
      </S.Content>
    </S.Container>
  ) : (
    <></>
  )
}

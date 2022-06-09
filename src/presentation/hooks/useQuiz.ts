import {
  loadQuestionsRequestAction,
  updateQuestionAnswerAction,
  updateQuestionIndexAction,
  resetQuizAction,
} from '@adapters/redux/actions'
import { StateType } from '@adapters/redux/entities'
import { REQUEST_TIMEOUT } from '@main/config/request'
import {
  QuestionViewModel as Question,
  QuestionsViewModel as Questions,
} from '@presentation/view-models'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const useQuiz = () => {
  const { quizId } = useParams()
  const dispatch = useDispatch()
  const { index, question, questions, correctAnswersCount } = useSelector(
    (state: StateType) => state
  )

  // map questions
  const mappedQuestions = useCallback(() => {
    return Questions.mapCollection(questions)
  }, [questions])

  // define questions dispatcher
  const dispatchLoadQuestions = (id: string) => {
    dispatch(loadQuestionsRequestAction(id))
  }

  // update question index
  const dispatchUpdateQuestionIndex = (index: number) => {
    dispatch(updateQuestionIndexAction(index))
  }

  // update question answer
  const dispatchUpdateQuestionAnswer = (selectedAnswer: string) => {
    dispatch(updateQuestionAnswerAction({ index, selectedAnswer }))
  }

  // reset correct answers count
  const dispatchResetQuiz = () => {
    dispatch(resetQuizAction())
  }

  // define timer for cleanup
  let loadTimer: ReturnType<typeof setTimeout>

  // load questions on mount
  useEffect(() => {
    if (mappedQuestions().length) return
    loadTimer = setTimeout(
      () => dispatchLoadQuestions(quizId || ''),
      REQUEST_TIMEOUT
    )
    return () => clearTimeout(loadTimer)
  })

  const { questionsLength } = Question

  return {
    index,
    question: Questions.toEntity(question),
    questions: Questions.mapCollection(questions),
    dispatchUpdateQuestionIndex,
    dispatchUpdateQuestionAnswer,
    dispatchResetQuiz,
    correctAnswersCount,
    questionsLength,
  }
}

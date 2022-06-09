import { Types } from '@adapters/redux'
import { Question } from '@adapters/redux/entities'

export interface LoadQuestionsRequestActionType {
  type: string
  quizId: string
}
export interface LoadQuestionsSuccessActionType {
  type: string
  questions: Question[]
}
export interface LoadQuestionsFailureActionType {
  type: string
}

export const loadQuestionsRequestAction = (
  quizId: string
): LoadQuestionsRequestActionType => ({
  type: Types.LOAD_QUESTIONS_REQUEST,
  quizId,
})

export const loadQuestionsSuccessAction = (
  questions: Question[]
): LoadQuestionsSuccessActionType => ({
  type: Types.LOAD_QUESTIONS_SUCCESS,
  questions,
})

export const loadQuestionsFailureAction =
  (): LoadQuestionsFailureActionType => ({
    type: Types.LOAD_QUESTIONS_FAILURE,
  })

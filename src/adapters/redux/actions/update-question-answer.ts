import { Types } from '@adapters/redux'

export interface UpdateQuestionAnswerActionType {
  type: string
  payload: {
    index: number
    selectedAnswer: string
  }
}

export const updateQuestionAnswerAction = (payload: {
  index: number
  selectedAnswer: string
}): UpdateQuestionAnswerActionType => ({
  type: Types.UPDATE_QUESTION_ANSWER,
  payload,
})

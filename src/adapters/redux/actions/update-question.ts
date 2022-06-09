import { Types } from '@adapters/redux'
import { Question } from '@adapters/redux/entities'

export interface UpdateQuestionActionType {
  type: string
  question: Question
}

export const updateQuestionAction = (
  question: Question
): UpdateQuestionActionType => ({
  type: Types.UPDATE_QUESTION,
  question,
})

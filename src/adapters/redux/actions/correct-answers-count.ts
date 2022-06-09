import { Types } from '@adapters/redux'
import { Questions } from '@adapters/redux/entities'

export interface UpdateCorrectAnswersCountActionType {
  type: string
  questions: Questions
}

export const updateCorrectAnswersCountAction = (
  questions: Questions
): UpdateCorrectAnswersCountActionType => ({
  type: Types.UPDATE_CORRECT_ANSWERS_COUNT,
  questions,
})

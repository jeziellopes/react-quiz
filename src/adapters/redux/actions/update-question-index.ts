import { Types } from '@adapters/redux/types'

export interface UpdateQuestionIndexActionType {
  type: string
  index: number
}

export const updateQuestionIndexAction = (
  index: number
): UpdateQuestionIndexActionType => ({
  type: Types.UPDATE_QUESTION_INDEX,
  index,
})

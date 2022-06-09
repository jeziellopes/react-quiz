import { Types } from '@adapters/redux'
import { Question } from '@domain/entities'

export interface UpdateQuestionsActionPayload {
  index?: number
  selectedAnswer?: string
  questions: Question[]
}

export interface UpdateQuestionsActionType {
  type: string
  // payload: UpdateQuestionsActionPayload
}

export const updateQuestionsAction =
  (): // payload: UpdateQuestionsActionPayload
  UpdateQuestionsActionType => ({
    type: Types.UPDATE_QUESTION,
    // payload,
  })

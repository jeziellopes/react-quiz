import { Types } from '@adapters/redux'

export interface ResetQuizActionType {
  type: string
}

export const resetQuizAction = (): ResetQuizActionType => ({
  type: Types.RESET_QUIZ,
})

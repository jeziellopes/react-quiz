import { Question, Questions, StateType } from '@adapters/redux/entities'

export const initialState: StateType = {
  index: 0,
  question: {} as Question,
  questions: {} as Questions,
  correctAnswersCount: 0,
}

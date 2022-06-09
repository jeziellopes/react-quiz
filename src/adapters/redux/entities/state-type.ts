import { Question, Questions } from '@adapters/redux/entities'

export interface StateType {
  readonly index: number
  readonly question: Question
  readonly questions: Questions
  readonly correctAnswersCount: number
}

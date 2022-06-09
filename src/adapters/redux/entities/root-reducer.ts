import { Question, Questions } from '@adapters/redux/entities'
import { Action, Reducer } from 'redux'

export interface RootReducer {
  index: Reducer<number, Action>
  question: Reducer<Question, Action>
  questions: Reducer<Questions, Action>
  correctAnswersCount: Reducer<number, Action>
}

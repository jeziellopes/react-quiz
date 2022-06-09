import { RootReducer } from '@adapters/redux/entities'
import {
  questionIndexReducer,
  questionReducer,
  questionsReducer,
  correctAnswersCountReducer,
} from '@adapters/redux/reducers'

export const makeRootReducer: () => RootReducer = () => ({
  index: questionIndexReducer,
  question: questionReducer,
  questions: questionsReducer,
  correctAnswersCount: correctAnswersCountReducer,
})

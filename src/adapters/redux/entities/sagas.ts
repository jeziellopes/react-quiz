import { LoadQuestionsRequestActionType } from '@adapters/redux/actions'
import { QuestionsLoader } from '@domain/usecases'
import { Saga } from 'redux-saga'

export type RootSaga = Saga<any>

export type LoadQuestionsSaga = (
  questionsLoader: QuestionsLoader
) => (action: LoadQuestionsRequestActionType) => RootSaga

import { StateType } from '@adapters/redux/entities'
import { ReduxStore } from '@infra/flux/redux'
import { makeRootSaga, makeRootReducer } from '@main/factories/redux'
import { makeRemoteQuestionsLoader } from '@main/factories/usecases/remote-load-questions'

export const makeReduxStore = () => {
  const rootReducer = makeRootReducer()
  const questionsLoader = makeRemoteQuestionsLoader()
  const rootSaga = makeRootSaga(questionsLoader)

  return new ReduxStore<StateType>({
    rootReducer,
    rootSaga,
  }).getStore()
}

import { RootSaga } from '@adapters/redux'
import { QuestionsLoader } from '@domain/usecases'

export const makeRootSaga = (questionsLoader: QuestionsLoader) => {
  return RootSaga.makeGenerator(questionsLoader)
}

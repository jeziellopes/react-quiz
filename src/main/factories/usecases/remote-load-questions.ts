import { RemoteQuestionsLoader } from '@data/usecases/load-questions'
import { QuestionsLoader } from '@domain/usecases'
import { makeHttpClientDecorator } from '@main/factories/decorators'

export const makeRemoteQuestionsLoader = (): QuestionsLoader =>
  new RemoteQuestionsLoader('/questions', makeHttpClientDecorator())

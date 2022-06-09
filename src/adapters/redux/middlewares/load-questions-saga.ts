import {
  LoadQuestionsRequestActionType,
  loadQuestionsSuccessAction,
  loadQuestionsFailureAction,
} from '@adapters/redux/actions'
import { Question } from '@domain/entities'
import { QuestionsLoader } from '@domain/usecases'
import { put } from 'redux-saga/effects'

export const loadQuestionsSaga = (questionsLoader: QuestionsLoader) =>
  function* (action: LoadQuestionsRequestActionType) {
    const { quizId } = action
    try {
      const questions: Question[] = yield questionsLoader.load(quizId)
      yield put(loadQuestionsSuccessAction(questions))
    } catch (error) {
      yield put(loadQuestionsFailureAction())
    }
  }

import { Types } from '@adapters/redux'
import {
  loadQuestionsSaga,
  updateQuestionSaga,
  updateCorrectAnswersCountSaga,
} from '@adapters/redux/middlewares'
import { QuestionsLoader } from '@domain/usecases'
import { all, takeLatest } from 'redux-saga/effects'

export class RootSaga {
  static makeGenerator(questionsLoader: QuestionsLoader) {
    return function* rootSaga() {
      yield all([
        takeLatest(
          Types.LOAD_QUESTIONS_REQUEST,
          loadQuestionsSaga(questionsLoader)
        ),
        takeLatest(Types.LOAD_QUESTIONS_SUCCESS, updateQuestionSaga()),
        takeLatest(Types.UPDATE_QUESTION_INDEX, updateQuestionSaga()),
        takeLatest(Types.UPDATE_QUESTION_ANSWER, updateQuestionSaga()),
        takeLatest(
          Types.UPDATE_QUESTION_ANSWER,
          updateCorrectAnswersCountSaga()
        ),
        takeLatest(Types.RESET_QUIZ, updateCorrectAnswersCountSaga()),
      ])
    }
  }
}

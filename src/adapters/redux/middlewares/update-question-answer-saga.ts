import {
  UpdateQuestionAnswerActionType,
  updateQuestionAnswerAction,
} from '@adapters/redux/actions'
import { put } from 'redux-saga/effects'

export const updateQuestionAnswerSaga = () =>
  function* (action: UpdateQuestionAnswerActionType) {
    yield put(updateQuestionAnswerAction(action.payload))
  }

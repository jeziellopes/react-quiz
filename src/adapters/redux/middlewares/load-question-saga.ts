import { updateQuestionAction } from '@adapters/redux/actions'
import { StateType } from '@adapters/redux/entities'
import { put, select } from 'redux-saga/effects'

export const updateQuestionSaga = () =>
  function* () {
    const state: StateType = yield select((state: StateType) => state)
    yield put(updateQuestionAction(state.questions[state.index]))
  }

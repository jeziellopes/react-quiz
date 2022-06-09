import { updateCorrectAnswersCountAction } from '@adapters/redux/actions'
import { StateType } from '@adapters/redux/entities'
import { put, select } from 'redux-saga/effects'

export const updateCorrectAnswersCountSaga = () =>
  function* () {
    const state: StateType = yield select((state: StateType) => state)
    yield put(updateCorrectAnswersCountAction(state.questions))
  }

import { ActionType, isAction, Types } from '@adapters/redux'
import {
  ResetQuizActionType,
  UpdateQuestionIndexActionType,
} from '@adapters/redux/actions'
import { StateType } from '@adapters/redux/entities'
import { initialState } from '@adapters/redux/state'
import { Reducer } from 'redux'

type StateSlice = StateType['index']

type Action = UpdateQuestionIndexActionType | ResetQuizActionType | ActionType

export const questionIndexReducer: Reducer<StateSlice, Action> = (
  state: StateSlice = initialState.index,
  action: Action
) => {
  if (
    isAction<UpdateQuestionIndexActionType>(action, Types.UPDATE_QUESTION_INDEX)
  ) {
    return action.index
  }

  if (isAction<ResetQuizActionType>(action, Types.RESET_QUIZ)) {
    return initialState.index
  }

  return state
}

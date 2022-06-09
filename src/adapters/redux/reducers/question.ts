import { ActionType, isAction, Types } from '@adapters/redux'
import {
  ResetQuizActionType,
  UpdateQuestionActionType,
} from '@adapters/redux/actions'
import { Question, StateType } from '@adapters/redux/entities'
import { initialState } from '@adapters/redux/state'
import { Reducer } from 'redux'

type StateSlice = StateType['question']

type Action = UpdateQuestionActionType | ResetQuizActionType | ActionType

export const questionReducer: Reducer<StateSlice, Action> = (
  state: StateSlice = initialState.question,
  action: Action
) => {
  if (isAction<UpdateQuestionActionType>(action, Types.UPDATE_QUESTION)) {
    return action.question
  }

  if (isAction<ResetQuizActionType>(action, Types.RESET_QUIZ)) {
    return Question.withoutAnswer(state)
  }

  return state
}

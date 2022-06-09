import { UpdateCorrectAnswersCountActionType } from '@adapters/redux/actions'
import { Questions, StateType } from '@adapters/redux/entities'
import { initialState } from '@adapters/redux/state'
import { ActionType, isAction, Types } from 'adapters/redux'
import { Reducer } from 'redux'

type StateSlice = StateType['correctAnswersCount']

type Action = UpdateCorrectAnswersCountActionType | ActionType

export const correctAnswersCountReducer: Reducer<StateSlice, Action> = (
  state: StateSlice = initialState.correctAnswersCount,
  action: Action
) => {
  if (
    isAction<UpdateCorrectAnswersCountActionType>(
      action,
      Types.UPDATE_CORRECT_ANSWERS_COUNT
    )
  ) {
    return Questions.calculateCorrectAnswersCount(action.questions)
  }

  return state
}

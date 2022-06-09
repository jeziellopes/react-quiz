import { ActionType, isAction, Types } from '@adapters/redux'
import {
  LoadQuestionsSuccessActionType,
  UpdateQuestionAnswerActionType,
  ResetQuizActionType,
} from '@adapters/redux/actions'
import { Question, Questions, StateType } from '@adapters/redux/entities'
import { initialState } from '@adapters/redux/state'
import { Reducer } from 'redux'

type StateSlice = StateType['questions']

type Action =
  | LoadQuestionsSuccessActionType
  | UpdateQuestionAnswerActionType
  | ResetQuizActionType
  | ActionType

export const questionsReducer: Reducer<StateSlice, Action> = (
  state: StateSlice = initialState.questions,
  action: Action
) => {
  if (
    isAction<LoadQuestionsSuccessActionType>(
      action,
      Types.LOAD_QUESTIONS_SUCCESS
    )
  ) {
    return Questions.mapCollection(
      Object.values(action.questions || []).reduce(
        (questions, question, key) => ({
          ...questions,
          [key]: Question.map(question),
        }),
        {}
      )
    )
  }

  if (
    isAction<UpdateQuestionAnswerActionType>(
      action,
      Types.UPDATE_QUESTION_ANSWER
    )
  ) {
    return {
      ...state,
      [action.payload.index]: {
        ...state[action.payload.index],
        selected_answer: action.payload.selectedAnswer,
      },
    }
  }

  if (isAction<ResetQuizActionType>(action, Types.RESET_QUIZ)) {
    return Questions.withoutAnswers(state)
  }

  return state
}

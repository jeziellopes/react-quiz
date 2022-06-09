import { Action } from 'redux'

export interface ActionType {
  type: string
}

export function isAction<A extends Action>(
  action: Action,
  type: any
): action is A {
  return action.type === type
}

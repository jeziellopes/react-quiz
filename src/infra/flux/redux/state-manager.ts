import { Unsubscribe } from 'redux-saga'

export interface StateManager<State, Store> {
  getStore: () => Store
  getState: () => State
  dispatch: (action: object) => void
  subscribe(listener: () => void): Unsubscribe
}

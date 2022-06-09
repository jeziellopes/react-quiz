import { StateType } from '@adapters/redux/entities'
import { Action, Store } from 'redux'

export interface IReduxStoreAdapter {
  getStore: () => Store<StateType, Action>
}

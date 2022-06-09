import { RootSaga } from '@adapters/redux/entities'
import { ReducersMapObject } from 'redux'

export type StoreData<State> = {
  rootReducer: ReducersMapObject<State>
  rootSaga: RootSaga
}

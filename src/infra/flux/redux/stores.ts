import { StateManager, StoreData } from '@infra/flux/redux'
import { IS_DEVELOPMENT } from '@main/config/env'
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  Middleware,
  Store,
} from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

export class ReduxStore<T> implements StateManager<T, Store<T>> {
  private store: Store<T>

  constructor(storeData: StoreData<T>) {
    const { rootReducer, rootSaga } = storeData
    const middlewares: Middleware[] = []

    // redux saga middleware
    const sagaMiddleware = createSagaMiddleware()
    middlewares.push(sagaMiddleware)

    // redux logger middleware
    if (IS_DEVELOPMENT) {
      middlewares.push(logger)
    }

    // create store
    this.store = createStore(
      combineReducers(rootReducer),
      applyMiddleware(...middlewares)
    )

    if (sagaMiddleware) {
      sagaMiddleware?.run(rootSaga)
    }
  }

  getStore() {
    return this.store
  }

  getState() {
    return this.store.getState()
  }

  dispatch(action: any) {
    this.store.dispatch(action)
  }

  subscribe(listener: () => void) {
    return this.store.subscribe(listener)
  }
}

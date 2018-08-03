'use strict';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import middlewares from '../middlewares';
import { rootSaga } from '../actions/sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = applyMiddleware(
  sagaMiddleware
)(createStore)(reducers, window.devToolsExtension ? window.devToolsExtension() : undefined);

sagaMiddleware.run(rootSaga)

// 如果热更新 自动替换store
if (module.hot) {
  module.hot.accept(() => {
    store.replaceReducer(reducers);
  });
}

export const Store = store;

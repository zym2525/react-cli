'use strict';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import middlewares from '../middlewares';

const store = applyMiddleware(
  ...middlewares
)(createStore)(reducers, window.devToolsExtension ? window.devToolsExtension() : undefined);

// 如果热更新 自动替换store
if (module.hot) {
  module.hot.accept(() => {
    store.replaceReducer(reducers);
  });
}

export const Store = store;

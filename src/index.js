import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import App from './components/App';
import appReducer from './components/App/reducer';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  app: appReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
/* eslint-enable */

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();

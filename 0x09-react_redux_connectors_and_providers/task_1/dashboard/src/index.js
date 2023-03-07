import { Map } from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App/App';
import uiReducer, { INITIAL_STATE } from './reducers/uiReducer';

const store = createStore(uiReducer, Map(INITIAL_STATE))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

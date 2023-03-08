import { Map } from "immutable";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, configureStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./App/App";
import uiReducer, { INITIAL_STATE } from "./reducers/uiReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  uiReducer,
  Map(INITIAL_STATE),
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

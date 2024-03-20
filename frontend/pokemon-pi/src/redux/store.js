import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true, // activa el trace
      traceLimit: 25, // limita a 25 las trazas en la pila
    })
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // otros middlewares si existen
);

const store = createStore(rootReducer, enhancer);

export default store;

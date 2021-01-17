import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";

import {reducer} from "./reducer";

const configureStore = () => {
  const middlewareEnhancer = applyMiddleware(thunk);

  const composedEnhancers = compose(
    middlewareEnhancer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f,
  );

  const store = createStore(reducer, undefined, composedEnhancers);
  return store;
};

export const store = configureStore();

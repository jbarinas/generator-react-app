import {AnyAction, combineReducers} from "redux";

const _reducer = combineReducers({
  x: (state = [], action) => state
});

export const reducer = (state: any, action: AnyAction) => {
  return _reducer(state, action);
};

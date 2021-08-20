import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./reducers/authReducer";

const combinedReducer = combineReducers({
  auth: authReducer,
  // user: userReducer,
});

export const store = createStore(combinedReducer, composeWithDevTools());

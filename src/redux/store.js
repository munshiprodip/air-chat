import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./reducers/authReducer";
import chatReducer from "./reducers/chatReducer";

const combinedReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
});

export const store = createStore(combinedReducer, composeWithDevTools());

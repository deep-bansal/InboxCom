import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//reducers
import { userCreateReducer, userLoginReducer } from "./reducers/userReducers";
import {
  messageReducer,
  messageSendReducer,
  messagesReducer,
} from "./reducers/messagesReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userCreate: userCreateReducer,
  messages: messagesReducer,
  message: messageReducer,
  messageSend: messageSendReducer,
});

const middleware = [thunk];

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = { userLogin: { userInfo: userInfoFromLocalStorage } };

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

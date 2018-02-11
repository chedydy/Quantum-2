import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ContactRequestsReducer } from "./ContactRequestsReducer";

const rootReducer = combineReducers({
  ContactRequests: ContactRequestsReducer
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;

import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ContactRequestsReducer } from "./ContactRequestsReducer";
import { PostEditorReducer } from "./PostEditorReducer";

const rootReducer = combineReducers({
  ContactRequests: ContactRequestsReducer,
  PostEditor: PostEditorReducer
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;

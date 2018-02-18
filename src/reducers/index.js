import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { ContactRequestsReducer } from "./ContactRequestsReducer";
import { PostEditorReducer } from "./PostEditorReducer";
import { PostsReducer } from "./PostsReducer";

const history = createHistory();
const middleware = routerMiddleware(history);
const rootReducer = combineReducers({
  ContactRequests: ContactRequestsReducer,
  PostEditor: PostEditorReducer,
  Posts: PostsReducer,
  router: routerReducer
});
const store = createStore(rootReducer, {}, applyMiddleware(thunk, middleware));

export default store;

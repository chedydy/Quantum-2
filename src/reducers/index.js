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
import { CategoriesReducer } from "./NewCategoriesReducer";
import { PostsPublicReducer } from "./PostsPublicReducer";

const history = createHistory();
const middleware = routerMiddleware(history);
const rootReducer = combineReducers({
  ContactRequests: ContactRequestsReducer,
  PostEditor: PostEditorReducer,
  Posts: PostsReducer,
  router: routerReducer,
  Categories: CategoriesReducer,
  PostsPublic: PostsPublicReducer
});
const store = createStore(rootReducer, {}, applyMiddleware(thunk, middleware));

export default store;

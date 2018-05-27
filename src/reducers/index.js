import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { ContactRequestsReducer } from "./ContactRequestsReducer";
import { PostEditorReducer } from "./PostEditorReducer";
import { PostsReducer } from "./PostsReducer";
import { CategoriesReducer } from "./CategoriesReducer";
import { PostsPublicReducer } from "./PostsPublicReducer";
import { AboutReducer } from "./AboutReducer";
import { AuthorsReducer } from "./AuthorsReducer";

const history = createHistory();
const middleware = routerMiddleware(history);
const rootReducer = combineReducers({
  ContactRequests: ContactRequestsReducer,
  PostEditor: PostEditorReducer,
  Posts: PostsReducer,
  router: routerReducer,
  Categories: CategoriesReducer,
  PostsPublic: PostsPublicReducer,
  About: AboutReducer,
  Authors: AuthorsReducer
});
const store = createStore(rootReducer, {}, applyMiddleware(thunk, middleware));

export default store;

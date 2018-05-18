import {
  CATEGORIES_GET,
  CATEGORIES_DELETE,
  CATEGORIES_UPDATE,
  CATEGORIES_ADD,
  CATEGORIES_FILTER,
  CATEGORIES_EDIT_REMOVE,
  CATEGORIES_EDIT_ADD,
  CATEGORIES_EDIT_SUBCATEGORY,
  CATEGORIES_EDIT_NAME,
  CATEGORIES_GET_ONE,
  CATEGORIES_NEW,
  POSTS_PUBLIC_CATEGORIES_GET
} from "./types";
import { CategoriesService } from "../Services";
const CategoriesActions = {
  subscribe: () => dispatch => {
    CategoriesService.subscribe(categories => {
      dispatch({ type: CATEGORIES_GET, payload: categories });
      dispatch({ type: POSTS_PUBLIC_CATEGORIES_GET, payload: categories });
    });
  },
  get: category => dispatch => {
    CategoriesService.getCategory(category).then(res => {
      dispatch({ type: CATEGORIES_GET_ONE, payload: res });
    });
  },
  add: category => dispatch => {
    return new Promise(res => {
      CategoriesService.add(category).then(() => {
        dispatch({ type: CATEGORIES_ADD, payload: category });
        res();
      });
    });
  },
  update: category => dispatch => {
    return new Promise(res => {
      CategoriesService.update(category).then(() => {
        dispatch({ type: CATEGORIES_UPDATE, payload: category });
        res();
      });
    });
  },

  delete: category => dispatch => {
    CategoriesService.delete(category).then(() => {
      dispatch({ type: CATEGORIES_DELETE, payload: category });
    });
  },
  filter(text) {
    return { type: CATEGORIES_FILTER, payload: text };
  },
  removeSubcategory(index) {
    return { type: CATEGORIES_EDIT_REMOVE, payload: index };
  },
  editSubcategory(prop, value) {
    return { type: CATEGORIES_EDIT_SUBCATEGORY, payload: { prop, value } };
  },
  addSubcategory() {
    return { type: CATEGORIES_EDIT_ADD };
  },
  editName(name) {
    return { type: CATEGORIES_EDIT_NAME, payload: name };
  },
  new() {
    return { type: CATEGORIES_NEW };
  }
};

export { CategoriesActions };

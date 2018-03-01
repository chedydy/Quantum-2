import {
  CATEGORIES_GET,
  CATEGORIES_NEW,
  CATEGORIES_EDIT,
  CATEGORIES_SAVE,
  CATEGORIES_CANCEL,
  CATEGORIES_DELETE,
  CATEGORIES_TOGGLE_ALERT,
  CATEGORIES_TAG,
  CATEGORIES_DELETE_TAG
} from "./types";
import { CategoriesService } from "../Services";
const CategoriesActions = {
  get: () => dispatch => {
    CategoriesService.subscribeRaw(categories => {
      dispatch({ type: CATEGORIES_GET, payload: categories });
    });
  },
  new(parent) {
    const parentPath = parent
      .trim()
      .split(" ")
      .join(".");
    return { type: CATEGORIES_NEW, payload: parentPath };
  },
  edit(value, path) {
    const parentPath = path
      .trim()
      .split(" ")
      .join(".");
    return { type: CATEGORIES_EDIT, payload: { value, parentPath } };
  },
  save(value, path) {
    const parentPath = path
      .split(" ")
      .reverse()
      .join(" ")
      .replace("Placeholder", "")
      .split(" ")
      .reverse()
      .join(" ")
      .trim()
      .split(" ")
      .join(".");
    return { type: CATEGORIES_SAVE, payload: { value, parentPath } };
  },
  cancel(path) {
    const parentPath = path
      .split(" ")
      .reverse()
      .join(" ")
      .replace("Placeholder", "")
      .split(" ")
      .reverse()
      .join(" ")
      .trim()
      .split(" ")
      .join(".");
    return { type: CATEGORIES_CANCEL, payload: parentPath };
  },
  delete(path, name) {
    const parentPath = path
      .replace(name, "")
      .trim()
      .split(" ")
      .join(".");
    return { type: CATEGORIES_DELETE, payload: { path: parentPath, name } };
  },
  toggleAlert() {
    return { type: CATEGORIES_TOGGLE_ALERT };
  },
  tagCategory(path, name) {
    const parentPath = path
      .replace(name, "")
      .trim()
      .split(" ")
      .join(".");
    return { type: CATEGORIES_TAG, payload: { path: parentPath, name } };
  },
  deleteTagged() {
    return { type: CATEGORIES_DELETE_TAG };
  }
};

export { CategoriesActions };

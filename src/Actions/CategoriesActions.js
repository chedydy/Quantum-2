import {
  CATEGORIES_GET,
  CATEGORIES_NEW,
  CATEGORIES_EDIT,
  CATEGORIES_SAVE
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
      .replace("Placeholder", "")
      .trim()
      .split(" ")
      .join(".");
    return { type: CATEGORIES_SAVE, payload: { value, parentPath } };
  }
};

export { CategoriesActions };

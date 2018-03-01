import {
  CATEGORIES_GET,
  CATEGORIES_NEW,
  CATEGORIES_EDIT,
  CATEGORIES_SAVE,
  CATEGORIES_CANCEL,
  CATEGORIES_DELETE,
  CATEGORIES_TOGGLE_ALERT,
  CATEGORIES_DELETE_TAG,
  CATEGORIES_TAG
} from "../Actions";
import _ from "lodash";

const INITIAL_STATE = {
  categories: {},
  showAlert: false,
  taggedPath: "",
  taggedName: ""
};

const CategoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_GET: {
      return {
        ...state,
        categories: action.payload
      };
    }
    case CATEGORIES_NEW: {
      const newCategories = {
        ..._.set(state.categories, action.payload, {
          ..._.get(state.categories, action.payload),
          Placeholder: "Placeholder"
        })
      };
      return { ...state, categories: newCategories };
    }
    case CATEGORIES_EDIT: {
      const { value, parentPath } = action.payload;
      const newCategories = {
        ..._.set(state.categories, parentPath, value)
      };
      return { ...state, categories: newCategories };
    }
    case CATEGORIES_SAVE: {
      const newCategory = {
        ..._.get(state.categories, action.payload.parentPath),
        [action.payload.value]: true
      };
      delete newCategory["Placeholder"];
      const newCategories = {
        ..._.set(state.categories, action.payload.parentPath, newCategory)
      };
      return { ...state, categories: newCategories };
    }
    case CATEGORIES_CANCEL: {
      const newCategory = {
        ..._.get(state.categories, action.payload)
      };
      delete newCategory["Placeholder"];
      const newCategories = {
        ..._.set(state.categories, action.payload, newCategory)
      };
      return { ...state, categories: newCategories };
    }
    case CATEGORIES_DELETE: {
      const newCategory = _.get(state.categories, action.payload.path);
      delete newCategory[action.payload.name];
      const newCategories = {
        ..._.set(state.categories, action.payload.path, newCategory)
      };
      return { ...state, categories: newCategories };
    }
    case CATEGORIES_TOGGLE_ALERT: {
      return { ...state, showAlert: !state.showAlert };
    }
    case CATEGORIES_TAG: {
      return {
        ...state,
        taggedName: action.payload.name,
        taggedPath: action.payload.path
      };
    }
    case CATEGORIES_DELETE_TAG: {
      const newCategory = _.get(state.categories, state.taggedPath);
      delete newCategory[state.taggedName];
      const newCategories = {
        ..._.set(state.categories, state.taggedPath, newCategory)
      };
      return { ...state, categories: newCategories };
    }
    default:
      return state;
  }
};
export { CategoriesReducer };

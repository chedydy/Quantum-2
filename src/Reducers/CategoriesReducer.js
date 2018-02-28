import {
  CATEGORIES_GET,
  CATEGORIES_NEW,
  CATEGORIES_EDIT,
  CATEGORIES_SAVE
} from "../Actions";
import _ from "lodash";

const INITIAL_STATE = {
  categories: {}
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
      const { parentPath, value } = action.payload;
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
    default:
      return state;
  }
};
export { CategoriesReducer };

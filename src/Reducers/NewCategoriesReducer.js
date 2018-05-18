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
  CATEGORIES_NEW
} from "../Actions";
import _ from "lodash";

const INITIAL_STATE = {
  categories: {},
  filteredCategories: {},
  filter: "",
  selected: { name: "", subCategories: [] }
};
function filterCategories(filter, categories) {
  return filter === ""
    ? categories
    : _.filter(categories, (subCategories, category) => {
        return _.some(filter.trim().split(" "), word => {
          return _.some(subCategories, subCategory => {
            return subCategory.includes(word);
          });
        });
      });
}
const CategoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_GET: {
      const filter = state.filter;
      const categories = action.payload;
      const filteredCategories = filterCategories(filter, categories);
      return {
        ...state,
        categories,
        filteredCategories
      };
    }
    case CATEGORIES_GET_ONE: {
      return {
        ...state,
        selected: action.payload
      };
    }
    case CATEGORIES_ADD: {
      const filter = state.filter;
      const categories = state.categories;
      const newCategory = action.payload;
      categories[newCategory.name] = newCategory.subCategories;
      const filteredCategories = filterCategories(filter, categories);
      return {
        ...state,
        categories,
        filteredCategories,
        selected: INITIAL_STATE.selected
      };
    }
    case CATEGORIES_UPDATE: {
      const updatedCategory = action.payload;
      const filter = state.filter;
      const categories = state.categories;
      categories[updatedCategory.name] = updatedCategory.subCategories;
      const filteredCategories = filterCategories(filter, categories);
      return {
        ...state,
        categories,
        filteredCategories,
        selected: INITIAL_STATE.selected
      };
    }
    case CATEGORIES_DELETE: {
      const categories = state.categories;
      const filteredCategories = state.filteredCategories;
      delete categories[action.payload];
      delete filteredCategories[action.payload];
      return {
        ...state,
        categories,
        filteredCategories
      };
    }
    case CATEGORIES_FILTER: {
      const filter = action.payload;
      const categories = state.categories;
      const filteredCategories = filterCategories(filter, categories);
      return {
        ...state,
        categories,
        filteredCategories
      };
    }
    case CATEGORIES_EDIT_NAME: {
      const selected = { ...state.selected, name: action.payload };
      return { ...state, selected };
    }
    case CATEGORIES_EDIT_SUBCATEGORY: {
      const selected = {
        ...state.selected,
        subCategories: [...state.selected.subCategories]
      };
      selected.subCategories[action.payload.prop] = action.payload.value;
      return { ...state, selected };
    }
    case CATEGORIES_EDIT_ADD: {
      const selected = {
        ...state.selected,
        subCategories: [...state.selected.subCategories]
      };
      selected.subCategories.push("");
      return { ...state, selected };
    }
    case CATEGORIES_EDIT_REMOVE: {
      const selected = {
        ...state.selected,
        subCategories: [...state.selected.subCategories]
      };
      selected.subCategories.splice(action.payload, 1);
      return { ...state, selected };
    }
    case CATEGORIES_NEW: {
      return {
        ...state,
        selected: { name: "", subCategories: [] }
      };
    }
    default:
      return state;
  }
};
export { CategoriesReducer };

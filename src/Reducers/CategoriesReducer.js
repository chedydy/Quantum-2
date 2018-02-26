import { CATEGORIES_GET } from "../Actions";
import _ from "lodash";

const INITIAL_STATE = {
  categories: []
};

const CategoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_GET: {
      return {
        ...state,
        categories: action.payload
      };
    }
    default:
      return state;
  }
};
export { CategoriesReducer };

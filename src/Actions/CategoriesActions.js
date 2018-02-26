import { CATEGORIES_GET } from "./types";
import { CategoriesService } from "../Services";
const CategoriesActions = {
  get: () => dispatch => {
    CategoriesService.subscribeRaw(categories => {
      dispatch({ type: CATEGORIES_GET, payload: categories });
    });
  }
};

export { CategoriesActions };

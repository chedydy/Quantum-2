import {
  POSTS_PUBLIC_FILTER_BY_TAGS,
  POSTS_PUBLIC_FETCH,
  POSTS_PUBLIC_CATEGORIES_GET,
  POSTS_PUBLIC_FILTER_BY_TEXT,
  POSTS_PUBLIC_FETCH_TAGS,
  POSTS_PUBLIC_SELECT_CATEGORY,
  POSTS_PUBLIC_UNSELECT_CATEGORY,
  POSTS_PUBLIC_GO_BACK,
  POSTS_PUBLIC_SELECT_SUBCATEGORY
} from "./types";
import { PostPreviewService, CategoriesService } from "../Services";
const PostsPublicActions = {
  get: () => dispatch => {
    PostPreviewService.subscribePreviews(previews => {
      dispatch({ type: POSTS_PUBLIC_FETCH, payload: previews });
    });
  },
  getCategories: () => dispatch => {
    CategoriesService.subscribeRaw(categories => {
      dispatch({ type: POSTS_PUBLIC_CATEGORIES_GET, payload: categories });
    });
  },
  selectCategory(category) {
    return { type: POSTS_PUBLIC_SELECT_CATEGORY, payload: category };
  },
  selectSubCategory(subCategory) {
    return { type: POSTS_PUBLIC_SELECT_SUBCATEGORY, payload: subCategory };
  },
  goBack(){
    return {type:POSTS_PUBLIC_GO_BACK}
  },
  unSelectCategory(category) {
    return { type: POSTS_PUBLIC_UNSELECT_CATEGORY, payload: category };
  },
  getTags: () => dispatch => {
    PostPreviewService.getTags().then(tags => {
      dispatch({ type: POSTS_PUBLIC_FETCH_TAGS, payload: tags });
    });
  },
  filter(text) {
    return { type: POSTS_PUBLIC_FILTER_BY_TEXT, payload: text };
  },
  filterByTags(tags) {
    return { type: POSTS_PUBLIC_FILTER_BY_TAGS, payload: tags };
  }
};

export { PostsPublicActions };

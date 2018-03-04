import {
  POSTS_PUBLIC_FILTER_BY_TAGS,
  POSTS_PUBLIC_FETCH,
  POSTS_PUBLIC_CATEGORIES_GET,
  POSTS_PUBLIC_FILTER_BY_TEXT,
  POSTS_PUBLIC_FETCH_TAGS
} from "./types";
import {
  PostService,
  PostPreviewService,
  CategoriesService
} from "../Services";
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

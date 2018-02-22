import {
  POSTS_FETCH_SUCCESS,
  POSTS_REMOVE_SUCCESS,
  POSTS_FILTER,
  POSTS_SORT_BY
} from "./types";
import {
  PostService,
  PostPreviewService,
  CategoriesService
} from "../Services";
const PostsActions = {
  get: () => dispatch => {
    PostPreviewService.subscribePreviews(previews => {
      dispatch({ type: POSTS_FETCH_SUCCESS, payload: previews });
    });
  },
  delete: ({ id, category }) => dispatch => {
    Promise.all([
      PostService.deletePost(id),
      PostPreviewService.deletePreview(id),
      CategoriesService.delete(category, id)
    ]).then(() => {
      dispatch({ type: POSTS_REMOVE_SUCCESS });
    });
  },
  filter(text) {
    return { type: POSTS_FILTER, payload: text };
  },
  sortBy(field) {
    return { type: POSTS_SORT_BY, payload: field };
  }
};

export { PostsActions };

import { POSTS_FETCH_SUCCESS,POSTS_REMOVE_SUCCESS } from "./types";
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
  }
};

export { PostsActions };

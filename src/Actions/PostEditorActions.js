import _ from "lodash";
import { push } from "react-router-redux";
import moment from "moment";
import uuid from "uuid/v4";
import {
  UPDATE_POST_PROP,
  POST_EDITOR_FETCH_CATEGORIES,
  POST_EDITOR_SUBMIT_SUCCESS,
  POST_EDITOR_SUBMIT_ERROR
} from "./types";
import {
  PostPreviewService,
  PostService,
  CategoriesService,
  AuthService
} from "../Services";
//import { ContactRequestsService } from "../Services";
const PostEditorActions = {
  updateProp(field, subField, value) {
    return { type: UPDATE_POST_PROP, payload: { field, subField, value } };
  },
  fetchCategories: () => dispatch => {
    CategoriesService.subscribe(categories => {
      dispatch({ type: POST_EDITOR_FETCH_CATEGORIES, payload: categories });
    });
  },
  save: (preview, post) => dispatch => {
    const id = uuid();
    const user = AuthService.getUser();
    const author = user.displayName;
    Promise.all([
      PostPreviewService.updatePreview({
        ...preview,
        id,
        author,
        publishDate: moment().format("LL"),
        authorLink: `https://www.facebook.com/app_scoped_user_id/${
          user.providerData[0].uid
        }`,
        tags: _.mapKeys(preview.tags.split(" "))
      }),
      PostService.updatePost({ ...post, id }),
      CategoriesService.add(preview.category, id)
    ])
      .then(() => {
        dispatch({ type: POST_EDITOR_SUBMIT_SUCCESS });
        push("/admin/posts");
      })
      .catch(error =>
        dispatch({ type: POST_EDITOR_SUBMIT_ERROR, payload: error })
      );
  }
};

export { PostEditorActions };

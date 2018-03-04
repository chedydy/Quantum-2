import _ from "lodash";
import moment from "moment";
import uuid from "uuid/v4";
import {
  UPDATE_POST_PROP,
  POST_EDITOR_FETCH_CATEGORIES,
  POST_EDITOR_SUBMIT_SUCCESS,
  POST_EDITOR_SUBMIT_ERROR,
  POST_EDITOR_FETCH_SUCCESS,
  CHANGE_PREVIEW_VISIBILITY
} from "./types";
import {
  PostPreviewService,
  PostService,
  CategoriesService,
  AuthService
} from "../Services";
const PostEditorActions = {
  togglePreview() {
    return { type: CHANGE_PREVIEW_VISIBILITY };
  },
  updateProp(field, subField, value) {
    return {
      type: UPDATE_POST_PROP,
      payload: {
        field,
        subField,
        value
      }
    };
  },
  fetchCategories: () => dispatch => {
    CategoriesService.subscribe(categories => {
      dispatch({ type: POST_EDITOR_FETCH_CATEGORIES, payload: categories });
    });
  },
  save: (preview, post) => dispatch => {
    return new Promise(resolve => {
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
        PostService.updatePost({
          ...post,
          id
        })
      ])
        .then(() => {
          dispatch({ type: POST_EDITOR_SUBMIT_SUCCESS });
          resolve();
        })
        .catch(error => {
          console.log(error);
          dispatch({ type: POST_EDITOR_SUBMIT_ERROR, payload: error });
        });
    });
  },
  update: ({ preview, post, oldCategory }) => dispatch => {
    return new Promise(resolve => {
      Promise.all([
        PostPreviewService.updatePreview({
          ...preview,
          tags: _.mapKeys(preview.tags.split(" "))
        }),
        PostService.updatePost(post)
      ]).then(() => {
        dispatch({ type: POST_EDITOR_SUBMIT_SUCCESS });
        resolve();
      });
    });
  },
  get: id => dispatch => {
    Promise.all([
      PostPreviewService.getPreview(id),
      PostService.getPost(id)
    ]).then(values => {
      let tags = "";
      _.forEach(values[0].tags, (val, key) => {
        tags = `${tags} ${val}`;
      });
      tags = tags.trim();
      dispatch({
        type: POST_EDITOR_FETCH_SUCCESS,
        payload: {
          preview: { ...values[0], tags },
          post: values[1],
          oldCategory: values[0].category
        }
      });
    });
  }
};

export { PostEditorActions };

import _ from "lodash";
import moment from "moment";
import uuid from "uuid/v4";
import {
  UPDATE_POST_PROP,
  POST_EDITOR_FETCH_CATEGORIES,
  POST_EDITOR_SUBMIT_SUCCESS,
  POST_EDITOR_SUBMIT_ERROR,
  POST_EDITOR_FETCH_SUCCESS,
  CHANGE_PREVIEW_VISIBILITY,
  POST_EDITOR_SELECT_CATEGORY
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
  update: ({ preview, post }) => dispatch => {
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
      PostService.getPost(id),
      CategoriesService.get()
    ]).then(values => {
      let tags = "";
      _.forEach(values[0].tags, (val, key) => {
        tags = `${tags} ${val}`;
      });
      tags = tags.trim();
      const categories = values[2];
      const post = values[1];
      const preview = { ...values[0], tags };
      const payload = {
        preview,
        post,
        selectedCategory: null,
        subCategories: []
      };
      if (categories[preview.category]) {
        payload.selectedCategory = {
          label: preview.category,
          value: categories[preview.category]
        };
        payload.subCategories = categories[preview.category];
      }
      dispatch({
        type: POST_EDITOR_FETCH_SUCCESS,
        payload
      });
    });
  },
  selectCategory: category => {
    const selected = { selected: category };
    if (category) {
      selected.category = category.label;
      selected.subCategories = category.value;
    }
    return {
      type: POST_EDITOR_SELECT_CATEGORY,
      payload: selected
    };
  }
};

export { PostEditorActions };

import _ from "lodash";
import moment from "moment";
import uuid from "uuid/v4";
import {
  POST_EDITOR_UPDATE_PROPS,
  POST_EDITOR_SUBMIT_SUCCESS,
  POST_EDITOR_SUBMIT_ERROR,
  POST_EDITOR_FETCH_SUCCESS,
  POST_EDITOR_CHANGE_PREVIEW_VISIBILITY,
  POST_EDITOR_SELECT_CATEGORY,
  POST_EDITOR_CLEAR_PHOTO,
  POST_EDITOR_SET_IMAGE
} from "./types";
import { PostPreviewService, PostService } from "../Services";
const PostEditorActions = {
  togglePreview() {
    return { type: POST_EDITOR_CHANGE_PREVIEW_VISIBILITY };
  },
  updateProp(field, subField, value) {
    return {
      type: POST_EDITOR_UPDATE_PROPS,
      payload: {
        field,
        subField,
        value
      }
    };
  },
  save: (preview, post) => dispatch => {
    return new Promise((resolve, reject) => {
      Promise.all([PostPreviewService.save(preview), PostService.save(post)])
        .then(() => {
          dispatch({ type: POST_EDITOR_SUBMIT_SUCCESS });
          resolve();
        })
        .catch(error => {
          console.log(error);
          dispatch({ type: POST_EDITOR_SUBMIT_ERROR, payload: error });
          reject();
        });
    });
  },
  saveWithImage: (preview, post, image) => dispatch => {
    return new Promise((resolve, reject) => {
      PostService.saveImage(post.id, image).then(imageUrl => {
        preview.imageUrl = imageUrl;
        Promise.all([PostPreviewService.save(preview), PostService.save(post)])
          .then(() => {
            dispatch({ type: POST_EDITOR_SUBMIT_SUCCESS });
            resolve();
          })
          .catch(error => {
            console.log(error);
            dispatch({ type: POST_EDITOR_SUBMIT_ERROR, payload: error });
            reject();
          });
      });
    });
  },
  get: id => dispatch => {
    Promise.all([
      PostPreviewService.getPreview(id),
      PostService.getPost(id)
    ]).then(values => {
      const post = values[1];
      const preview = values[0];
      const payload = {
        preview,
        post
      };
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
  },
  clearPhoto: () => {
    return { type: POST_EDITOR_CLEAR_PHOTO };
  },
  setImage: image => {
    return { type: POST_EDITOR_SET_IMAGE, payload: image };
  }
};

export { PostEditorActions };

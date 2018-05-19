import {
  AUTHOR_UPDATE,
  AUTHOR_GET,
  AUTHOR_GET_BY_ID,
  AUTHOR_SAVE,
  AUTHOR_CLEAR_PHOTO,
  AUTHOR_DELETE,
  AUTHOR_HIDE,
  AUTHOR_SHOW,
  AUTHOR_SET_IMAGE
} from "./types";
import { AuthorsService } from "../Services";

const AuthorsActions = {
  save: author => dispatch => {
    return new Promise(res => {
      AuthorsService.set(author).then(() => {
        dispatch({ type: AUTHOR_SAVE });
        res();
      });
    });
  },
  saveWithImage: (author, image) => dispatch => {
    return new Promise(res => {
      AuthorsService.setWithImage(author, image).then(() => {
        dispatch({ type: AUTHOR_SAVE });
        res();
      });
    });
  },
  get: () => dispatch => {
    AuthorsService.get().then(authors => {
      dispatch({ type: AUTHOR_GET, payload: authors });
    });
  },
  getById: id => dispatch => {
    AuthorsService.getById(id).then(author => {
      dispatch({ type: AUTHOR_GET_BY_ID, payload: author });
    });
  },
  delete: id => dispatch => {
    AuthorsService.delete(id).then(() => {
      dispatch({ type: AUTHOR_DELETE, payload: id });
    });
  },
  update: (prop, value) => {
    return { type: AUTHOR_UPDATE, payload: { prop, value } };
  },
  clearPhoto: () => {
    return { type: AUTHOR_CLEAR_PHOTO };
  },
  show: author => {
    return { type: AUTHOR_SHOW, payload: author };
  },
  hide: () => {
    return { type: AUTHOR_HIDE };
  },
  setImage: image => {
    return { type: AUTHOR_SET_IMAGE, payload: image };
  }
};

export { AuthorsActions };

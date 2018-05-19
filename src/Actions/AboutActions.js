import {
  ABOUT_UPDATE,
  ABOUT_GET,
  ABOUT_SAVE,
  ABOUT_CLEAR_PHOTO,
  ABOUT_EDIT
} from "./types";
import { AboutService } from "../Services";

const AboutActions = {
  save: about => dispatch => {
    AboutService.set(about).then(() => {
      dispatch({ type: ABOUT_SAVE });
    });
  },
  saveWithImage: (about, image) => dispatch => {
    AboutService.setWithImage(about, image).then(() => {
      dispatch({ type: ABOUT_SAVE });
    });
  },
  get: () => dispatch => {
    AboutService.get().then(about => {
      dispatch({ type: ABOUT_GET, payload: about });
    });
  },
  update: (prop, value) => {
    return { type: ABOUT_UPDATE, payload: { prop, value } };
  },
  clearPhoto: () => {
    return { type: ABOUT_CLEAR_PHOTO };
  },
  edit: enabled => {
    return { type: ABOUT_EDIT, payload: enabled };
  }
};

export { AboutActions };

import {
  ABOUT_UPDATE,
  ABOUT_GET,
  ABOUT_SAVE,
  ABOUT_CLEAR_PHOTO,
  ABOUT_EDIT
} from "../Actions";

const INITIAL_STATE = {
  title: "",
  content: "",
  image: undefined,
  imageUrl: "",
  edit: false,
  oldImageUrl: ""
};
const AboutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ABOUT_GET: {
      return {
        ...state,
        ...action.payload,
        oldImageUrl: action.payload.imageUrl
      };
    }
    case ABOUT_EDIT: {
      return { ...state, edit: action.payload };
    }
    case ABOUT_SAVE: {
      return { ...state, edit: false };
    }
    case ABOUT_CLEAR_PHOTO: {
      return { ...state, image: undefined, imageUrl: state.oldImageUrl };
    }
    case ABOUT_UPDATE: {
      return { ...state, [action.payload.prop]: action.payload.value };
    }
    default:
      return state;
  }
};
export { AboutReducer };

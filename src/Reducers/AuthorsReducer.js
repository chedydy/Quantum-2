import {
  AUTHOR_UPDATE,
  AUTHOR_GET,
  AUTHOR_GET_BY_ID,
  AUTHOR_SAVE,
  AUTHOR_CLEAR_PHOTO,
  AUTHOR_DELETE,
  AUTHOR_SHOW,
  AUTHOR_HIDE,
  AUTHOR_SET_IMAGE
} from "../Actions";

const INITIAL_STATE = {
  authors: {},
  selected: {
    name: "",
    about: "",
    imageUrl: "",
    id: ""
  },
  oldImageUrl: "",
  image: undefined,
  show: false
};
const AuthorsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHOR_GET: {
      return { ...state, authors: action.payload };
    }
    case AUTHOR_GET_BY_ID: {
      return {
        ...state,
        selected: action.payload,
        oldImageUrl: action.payload.imageUrl
      };
    }
    case AUTHOR_CLEAR_PHOTO: {
      return {
        ...state,
        image: undefined,
        selected: { ...state.selected, imageUrl: state.oldImageUrl }
      };
    }
    case AUTHOR_SAVE: {
      return {
        ...state,
        selected: {
          name: "",
          about: "",
          imageUrl: "",
          id: ""
        },
        image: undefined
      };
    }
    case AUTHOR_UPDATE: {
      return {
        ...state,
        selected: {
          ...state.selected,
          [action.payload.prop]: action.payload.value
        }
      };
    }
    case AUTHOR_DELETE: {
      const authors = { ...state.authors };
      delete authors[action.payload];
      return { ...state, authors };
    }
    case AUTHOR_SHOW: {
      return { ...state, selected: action.payload, show: true };
    }
    case AUTHOR_HIDE: {
      return { ...state, show: false };
    }
    case AUTHOR_SET_IMAGE: {
      return { ...state, image: action.payload };
    }
    default:
      return state;
  }
};
export { AuthorsReducer };

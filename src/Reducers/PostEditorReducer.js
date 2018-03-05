import {
  UPDATE_POST_PROP,
  POST_EDITOR_FETCH_CATEGORIES,
  POST_EDITOR_SUBMIT_ERROR,
  POST_EDITOR_SUBMIT_SUCCESS,
  POST_EDITOR_FETCH_SUCCESS,
  CHANGE_PREVIEW_VISIBILITY
} from "../Actions";

const INITIAL_STATE = {
  post: {
    content: ""
  },
  preview: {
    title: "",
    subTitle: "",
    tags: "",
    category: ""
  },
  showPreview: false,
  oldCategory: "",
  categories: [],
  error: ""
};
const PostEditorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_POST_PROP:
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          [action.payload.subField]: action.payload.value
        }
      };
    case POST_EDITOR_FETCH_SUCCESS:
      return { ...state, ...action.payload };
    case POST_EDITOR_FETCH_CATEGORIES:
    
      return { ...state, categories: action.payload };
    case POST_EDITOR_SUBMIT_ERROR:
      return { ...state, error: action.payload };
    case POST_EDITOR_SUBMIT_SUCCESS:
      return INITIAL_STATE;
    case CHANGE_PREVIEW_VISIBILITY:
      return { ...state, showPreview: !state.showPreview };
    default:
      return state;
  }
};
export { PostEditorReducer };
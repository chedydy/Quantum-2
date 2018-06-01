import {
  POST_EDITOR_CHANGE_PREVIEW_VISIBILITY,
  POST_EDITOR_UPDATE_PROPS,
  POST_EDITOR_SUBMIT_SUCCESS,
  POST_EDITOR_SUBMIT_ERROR,
  POST_EDITOR_FETCH_SUCCESS,
  POST_EDITOR_SELECT_CATEGORY,
  POST_EDITOR_SET_IMAGE,
  POST_EDITOR_CLEAR_PHOTO
} from "../Actions";

const INITIAL_STATE = {
  selected: {
    post: {
      content: "",
      imageUrl: "",
      id: ""
    },
    preview: {
      title: "",
      subTitle: "",
      tags: "",
      category: "",
      subCategory: "",
      previewText: "",
      id: ""
    }
  },
  showPreview: false,
  selectedCategory: null,
  subCategories: [],
  error: "",
  oldImageUrl: "",
  image: undefined
};
const PostEditorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_EDITOR_CHANGE_PREVIEW_VISIBILITY:
      return { ...state, showPreview: !state.showPreview };
    case POST_EDITOR_UPDATE_PROPS:
      return {
        ...state,
        selected: {
          ...state.selected,
          [action.payload.field]: {
            ...state.selected[action.payload.field],
            [action.payload.subField]: action.payload.value
          }
        }
      };
    case POST_EDITOR_SUBMIT_SUCCESS:
      return INITIAL_STATE;
    case POST_EDITOR_SUBMIT_ERROR:
      return { ...state, error: action.payload };
    case POST_EDITOR_FETCH_SUCCESS:
      return { ...state, selected: { ...action.payload } };
    case POST_EDITOR_SELECT_CATEGORY: {
      return {
        ...state,
        subCategories: action.payload.subCategories,
        selected: {
          ...state.selected,
          preview: {
            ...state.selected.preview,
            category: action.payload.category
          }
        },
        selectedCategory: action.payload.selected
      };
    }
    case POST_EDITOR_CLEAR_PHOTO: {
      return {
        ...state,
        image: undefined,
        selected: {
          ...state.selected,
          post: {
            ...state.selected.post,
            imageUrl: state.oldImageUrl
          }
        }
      };
    }
    case POST_EDITOR_SET_IMAGE: {
      return { ...state, image: action.payload };
    }
    default:
      return state;
  }
};
export { PostEditorReducer };

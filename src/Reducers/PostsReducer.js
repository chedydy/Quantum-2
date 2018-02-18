import { POSTS_FETCH_SUCCESS } from "../Actions";

const INITIAL_STATE = {
  previews: []
};
const PostsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS:
      return {
        ...state,
        previews: action.payload
      };
    default:
      return state;
  }
};
export { PostsReducer };

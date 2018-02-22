import _ from "lodash";
import { POSTS_FETCH_SUCCESS, POSTS_FILTER, POSTS_SORT_BY } from "../Actions";
import { PostPreviewService } from "../Services";
const INITIAL_STATE = {
  previews: [],
  filteredPreviews: [],
  filterText: "",
  sortField: "",
  sortDirection: true,
  sorted: false
};
function sort(a, b, field, direction) {
  var x = a[field].toLowerCase();
  var y = b[field].toLowerCase();
  if (x < y) {
    return direction ? -1 : 1;
  }
  if (x > y) {
    return direction ? 1 : -1;
  }
  return 0;
}
const PostsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS: {
      let filteredPreviews =
        state.filterText === ""
          ? action.payload.slice()
          : PostPreviewService.filterByText(action.payload, state.filterText);
      if (state.sorted) {
        filteredPreviews.sort((a, b) => {
          return sort(a, b, state.sortField, state.sortDirection);
        });
      }
      return {
        ...state,
        previews: action.payload,
        filteredPreviews
      };
    }
    case POSTS_FILTER: {
      let filteredPreviews =
        action.payload === ""
          ? state.previews.slice()
          : PostPreviewService.filterByText(state.previews, action.payload);
      if (state.sorted) {
        filteredPreviews.sort((a, b) => {
          return sort(a, b, state.sortField, state.sortDirection);
        });
      }
      return {
        ...state,
        filteredPreviews,
        filterText: action.payload
      };
    }
    case POSTS_SORT_BY: {
      const sortDirection =
        action.payload === state.sortField ? !state.sortDirection : true;
      state.filteredPreviews.sort((a, b) => {
        return sort(a, b, action.payload, sortDirection);
      });
      return {
        ...state,
        filteredPreviews: state.filteredPreviews.slice(),
        sortField: action.payload,
        sorted: true,
        sortDirection
      };
    }
    default:
      return state;
  }
};
export { PostsReducer };

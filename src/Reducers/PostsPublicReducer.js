import _ from "lodash";
import {
  POSTS_PUBLIC_FETCH,
  POSTS_PUBLIC_CATEGORIES_GET,
  POSTS_PUBLIC_FILTER_BY_TEXT,
  POSTS_PUBLIC_FILTER_BY_TAGS,
  POSTS_PUBLIC_FETCH_TAGS
} from "../Actions";
import { PostPreviewService } from "../Services";
const INITIAL_STATE = {
  previews: [],
  categories: {},
  filterText: "",
  selectedTags: [],
  tags: [],
  model: {}
};
function createState() {}
const PostsPublicReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_PUBLIC_FETCH_TAGS: {
      return { ...state, tags: action.payload };
    }
    case POSTS_PUBLIC_FETCH: {
      let categories = state.categories;
      let model = {};
      let filterText = state.filterText;
      let selectedTags = state.selectedTags;
      let filteredPreviews =
        filterText === ""
          ? state.previews.slice()
          : PostPreviewService.filterByText(action.payload, filterText);
      filteredPreviews =
        selectedTags.length === 0
          ? filteredPreviews.slice()
          : PostPreviewService.filterByTags(filteredPreviews, selectedTags);
      _.forEach(filteredPreviews, preview => {
        const path = preview.category.split("-").join(".");
        const currentContent = {
          ..._.get(categories, path),
          [preview.id]: preview
        };
        model = {
          ..._.set(model, path, currentContent)
        };
      });
      return {
        ...state,
        previews: action.payload,
        model
      };
    }
    case POSTS_PUBLIC_CATEGORIES_GET: {
      let categories = action.payload;
      let model = {};
      let filterText = state.filterText;
      let selectedTags = state.selectedTags;
      let filteredPreviews =
        filterText === ""
          ? state.previews.slice()
          : PostPreviewService.filterByText(state.previews, filterText);
      filteredPreviews =
        selectedTags.length === 0
          ? filteredPreviews.slice()
          : PostPreviewService.filterByTags(filteredPreviews, selectedTags);
      _.forEach(filteredPreviews, preview => {
        const path = preview.category.split("-").join(".");
        const currentContent = {
          ..._.get(categories, path),
          [preview.id]: preview
        };
        model = {
          ..._.set(model, path, currentContent)
        };
      });
      return {
        ...state,
        categories,
        model
      };
    }
    case POSTS_PUBLIC_FILTER_BY_TEXT: {
      let categories = state.categories;
      let model = {};
      let filterText = action.payload;
      let selectedTags = state.selectedTags;
      let filteredPreviews =
        filterText === ""
          ? state.previews.slice()
          : PostPreviewService.filterByText(state.previews, filterText);
      filteredPreviews =
        selectedTags.length === 0
          ? filteredPreviews.slice()
          : PostPreviewService.filterByTags(filteredPreviews, selectedTags);
      _.forEach(filteredPreviews, preview => {
        const path = preview.category.split("-").join(".");
        const currentContent = {
          ..._.get(categories, path),
          [preview.id]: preview
        };
        model = {
          ..._.set(model, path, currentContent)
        };
      });
      return {
        ...state,
        model,
        filterText
      };
    }
    case POSTS_PUBLIC_FILTER_BY_TAGS: {
      let categories = state.categories;
      let model = {};
      let filterText = state.filterText;
      let selectedTags = action.payload;
      let filteredPreviews =
        filterText === ""
          ? state.previews.slice()
          : PostPreviewService.filterByText(state.previews, filterText);
      filteredPreviews =
        selectedTags.length === 0
          ? filteredPreviews.slice()
          : PostPreviewService.filterByTags(filteredPreviews, selectedTags);
      _.forEach(filteredPreviews, preview => {
        const path = preview.category.split("-").join(".");
        const currentContent = {
          ..._.get(categories, path),
          [preview.id]: preview
        };
        model = {
          ..._.set(model, path, currentContent)
        };
      });
      return {
        ...state,
        model,
        filterText,
        selectedTags
      };
    }
    // case POSTS_FILTER: {
    //   let filteredPreviews =
    //     action.payload === ""
    //       ? state.previews.slice()
    //       : PostPreviewService.filterByText(state.previews, action.payload);
    //   if (state.sorted) {
    //     filteredPreviews.sort((a, b) => {
    //       return sort(a, b, state.sortField, state.sortDirection);
    //     });
    //   }
    //   return {
    //     ...state,
    //     filteredPreviews,
    //     filterText: action.payload
    //   };
    // }
    default:
      return state;
  }
};
export { PostsPublicReducer };

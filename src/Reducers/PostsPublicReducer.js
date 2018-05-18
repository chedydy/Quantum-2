import _ from "lodash";
import {
  POSTS_PUBLIC_FETCH,
  POSTS_PUBLIC_CATEGORIES_GET,
  POSTS_PUBLIC_FILTER_BY_TEXT,
  POSTS_PUBLIC_FILTER_BY_TAGS,
  POSTS_PUBLIC_FETCH_TAGS,
  POSTS_PUBLIC_SELECT_CATEGORY,
  POSTS_PUBLIC_UNSELECT_CATEGORY,
  POSTS_PUBLIC_SELECT_SUBCATEGORY,
  POSTS_PUBLIC_GO_BACK
} from "../Actions";
import { PostPreviewService } from "../Services";
const INITIAL_STATE = {
  previews: [],
  categories: {},
  subCategories: [],
  selectedCategory: "",
  selectedSubCategory: "",

  filterText: "",
  selectedTags: [],
  tags: [],
  model: {}
};

const PostsPublicReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_PUBLIC_FETCH_TAGS: {
      return { ...state, tags: action.payload };
    }
    case POSTS_PUBLIC_FETCH: {
      // let categories = state.categories;
      // let model = {};
      // let filterText = state.filterText;
      // let selectedTags = state.selectedTags;
      // let filteredPreviews =
      //   filterText === ""
      //     ? action.payload.slice()
      //     : PostPreviewService.filterByText(action.payload, filterText);
      // filteredPreviews =
      //   selectedTags.length === 0
      //     ? filteredPreviews.slice()
      //     : PostPreviewService.filterByTags(filteredPreviews, selectedTags);
      // _.forEach(filteredPreviews, preview => {
      //   const path = preview.category.split("-").join(".");
      //   const currentContent = {
      //     ..._.get(categories, path),
      //     [preview.id]: preview
      //   };
      //   model = {
      //     ..._.set(model, path, currentContent)
      //   };
      // });
      // const previews = action.payload;
      // filteredPreviews = _.filter(previews, preview => {
      //   return preview.category.includes(state.selectedCategoryPath);
      // });
      // return {
      //   ...state,
      //   previews,
      //   model,
      //   filteredPreviews
      // };
      const previews = action.payload;
      const filteredPreviews = previews.slice();
      return { ...state, previews, filteredPreviews };
    }
    case POSTS_PUBLIC_CATEGORIES_GET: {
      const categories = action.payload;
      // let model = {};
      // let filterText = state.filterText;
      // let selectedTags = state.selectedTags;
      // let filteredPreviews =
      //   filterText === ""
      //     ? state.previews.slice()
      //     : PostPreviewService.filterByText(state.previews, filterText);
      // filteredPreviews =
      //   selectedTags.length === 0
      //     ? filteredPreviews.slice()
      //     : PostPreviewService.filterByTags(filteredPreviews, selectedTags);
      // _.forEach(filteredPreviews, preview => {
      //   const path = preview.category.split("-").join(".");
      //   const currentContent = {
      //     ..._.get(categories, path),
      //     [preview.id]: preview
      //   };
      //   model = {
      //     ..._.set(model, path, currentContent)
      //   };
      // });
      // return {
      //   ...state,
      //   categories,
      //   model
      // };
      return { ...state, categories };
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
    // case POSTS_PUBLIC_SELECT_CATEGORY: {
    //   const selectedCategoryPath = action.payload;
    //   const filteredPreviews = _.filter(state.previews, preview => {
    //     return preview.category.includes(selectedCategoryPath);
    //   });
    //   return {
    //     ...state,
    //     selectedCategoryPath,
    //     filteredPreviews
    //   };
    // }
    case POSTS_PUBLIC_UNSELECT_CATEGORY: {
      const selectedCategoryPath = state.selectedCategoryPath.split(
        action.payload
      )[0];
      const filteredPreviews = _.filter(state.previews, preview => {
        return preview.category.includes(selectedCategoryPath);
      });
      return {
        ...state,
        selectedCategoryPath,
        filteredPreviews
      };
    }
    case POSTS_PUBLIC_SELECT_CATEGORY: {
      const category = action.payload;
      const subCategories = state.categories[category];
      const previews = state.previews;
      const filteredPreviews = _.filter(previews, preview => {
        return preview.category === category;
      });
      return {
        ...state,
        selectedCategory: category,
        subCategories,
        filteredPreviews
      };
    }
    case POSTS_PUBLIC_SELECT_SUBCATEGORY: {
      const subCategory = action.payload;
      const previews = state.previews;
      const filteredPreviews = _.filter(previews, preview => {
        return preview.subCategory === subCategory;
      });
      return {
        ...state,
        selectedSubCategory: subCategory,
        filteredPreviews
      };
    }
    case POSTS_PUBLIC_GO_BACK: {
      const previews = state.previews;
      const filteredPreviews = previews.slice();
      return {
        ...state,
        selectedSubCategory: "",
        selectedCategory: "",
        filteredPreviews,
        subCategories: []
      };
    }
    default:
      return state;
  }
};
export { PostsPublicReducer };

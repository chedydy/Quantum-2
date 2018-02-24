import {
  GET_CONTACT_REQUESTS,
  CLOSE_MESSAGE_VIEWER,
  OPEN_MESSAGE,
  CONTACT_REQUESTS_FILTER,
  CONTACT_REQUESTS_SORT
} from "../Actions";
import { ContactRequestsService } from "../Services";
const INITIAL_STATE = {
  ContactRequests: [],
  FilteredContactRequests: [],
  messageIsOpen: false,
  selectedContactRequest: {},
  filter: "",
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
const ContactRequestsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CONTACT_REQUESTS: {
      let FilteredContactRequests =
        state.filter === ""
          ? action.payload.slice()
          : ContactRequestsService.filter(action.payload, state.filter);
      if (state.sorted) {
        FilteredContactRequests.sort((a, b) => {
          return sort(a, b, state.sortField, state.sortDirection);
        });
      }
      return {
        ...state,
        ContactRequests: action.payload,
        FilteredContactRequests
      };
    }
    case CONTACT_REQUESTS_FILTER: {
      let FilteredContactRequests =
        action.payload === ""
          ? state.ContactRequests.slice()
          : ContactRequestsService.filter(
              state.ContactRequests,
              action.payload
            );
      if (state.sorted) {
        FilteredContactRequests.sort((a, b) => {
          return sort(a, b, state.sortField, state.sortDirection);
        });
      }
      return {
        ...state,
        filter: action.payload,
        FilteredContactRequests
      };
    }
    case CONTACT_REQUESTS_SORT: {
      const sortDirection =
        action.payload === state.sortField ? !state.sortDirection : true;
      state.FilteredContactRequests.sort((a, b) => {
        return sort(a, b, action.payload, sortDirection);
      });
      return {
        ...state,
        FilteredContactRequests: state.FilteredContactRequests.slice(),
        sortField: action.payload,
        sorted: true,
        sortDirection
      };
    }
    case CLOSE_MESSAGE_VIEWER:
      return { ...state, messageIsOpen: false };
    case OPEN_MESSAGE:
      return {
        ...state,
        messageIsOpen: true,
        selectedContactRequest: action.payload
      };
    default:
      return state;
  }
};
export { ContactRequestsReducer };

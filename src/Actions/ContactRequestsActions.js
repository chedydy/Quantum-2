import {
  GET_CONTACT_REQUESTS,
  CLOSE_MESSAGE_VIEWER,
  OPEN_MESSAGE,
  CONTACT_REQUESTS_FILTER,
  CONTACT_REQUESTS_SORT
} from "./types";
import { ContactRequestsService } from "../Services";
const ContactRequestActions = {
  get: () => dispatch => {
    ContactRequestsService.get().then(contactRequests =>
      dispatch({ type: GET_CONTACT_REQUESTS, payload: contactRequests })
    );
  },
  closeMessageViewer() {
    return {
      type: CLOSE_MESSAGE_VIEWER
    };
  },
  openMessage(contactRequest) {
    return { type: OPEN_MESSAGE, payload: contactRequest };
  },
  filter(text) {
    return { type: CONTACT_REQUESTS_FILTER, payload: text };
  },
  sortBy(field) {
    return { type: CONTACT_REQUESTS_SORT, payload: field };
  }
};

export { ContactRequestActions };

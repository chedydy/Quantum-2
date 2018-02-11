import { GET_CONTACT_REQUESTS, CLOSE_MESSAGE_VIEWER,OPEN_MESSAGE } from "./types";
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
  }
};

export { ContactRequestActions };

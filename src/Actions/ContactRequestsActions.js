import { GET_CONTACT_REQUESTS } from "./types";
import { ContactRequestsService } from "../Services";
const ContactRequestActions = {
  get: () => dispatch => {
    ContactRequestsService.get().then(contactRequests =>
      dispatch({ type: GET_CONTACT_REQUESTS, payload: contactRequests })
    );
  }
};

export { ContactRequestActions };

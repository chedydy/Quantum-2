import { GET_CONTACT_REQUESTS } from "../Actions";

const INITIAL_STATE = { ContactRequests: [] };
const ContactRequestsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CONTACT_REQUESTS:
      return { ...state, ContactRequests: action.payload };
    default:
      return state;
  }
};
export { ContactRequestsReducer };

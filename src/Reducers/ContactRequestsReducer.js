import {
  GET_CONTACT_REQUESTS,
  CLOSE_MESSAGE_VIEWER,
  OPEN_MESSAGE
} from "../Actions";

const INITIAL_STATE = {
  ContactRequests: [],
  messageIsOpen: false,
  selectedContactRequest: {}
};
const ContactRequestsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CONTACT_REQUESTS:
      return { ...state, ContactRequests: action.payload };
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

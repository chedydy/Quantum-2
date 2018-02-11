import _ from "lodash";
import uuid from "uuid/v4";
import moment from "moment";
import { app } from "../firebase/firebase";
const contactRequestsRef = app.ref().child("contact_requests");
const ContactRequestsService = {
  get() {
    return new Promise(resolve => {
      contactRequestsRef.once("value").then(snapshot => {
        const contatctRequests = _.map(snapshot.val(), (val, id) => {
          return { ...val, id };
        });
        resolve(contatctRequests);
      });
    });
  },
  add(contactRequest) {
    return contactRequestsRef.child(uuid()).set({
      ...contactRequest,
      time: moment().format("DD/MM/YYYY HH:mm"),
      done: false
    });
  }
};

export { ContactRequestsService };

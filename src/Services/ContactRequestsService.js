import _ from "lodash";
import uuid from "uuid/v4";
import moment from "moment";
import { app } from "../firebase/firebase";
const contactRequestsRef = app.ref().child("contact_requests");
function searchText(object, text) {
  for (let key in object) {
    const value = object[key];
    if (
      (typeof value === "string" || value instanceof String) &&
      value.toLowerCase().indexOf(text.toLowerCase()) !== -1
    ) {
      return true;
    }
  }
}
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
  },
  filter(contatctRequests, text) {
    const contatctRequestsSlice = contatctRequests.slice();
    const filteredContatctRequests = [];
    for (let j = 0; j < contatctRequestsSlice.length; j++) {
      if (
        searchText(contatctRequestsSlice[j], text) &&
        filteredContatctRequests.indexOf(contatctRequestsSlice[j]) === -1
      ) {
        filteredContatctRequests.push(contatctRequestsSlice[j]);
      }
    }
    return filteredContatctRequests;
  }
};

export { ContactRequestsService };

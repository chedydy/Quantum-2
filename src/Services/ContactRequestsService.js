import _ from "lodash";
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
  }
};

export { ContactRequestsService };

import { app } from "../firebase/firebase";

export default {
  getAbout: function() {
    return new Promise((resolve, reject) => {
      app
        .ref()
        .child("about")
        .once(
          "value",
          snapshot => resolve(snapshot.val()),
          error => reject(error)
        );
    });
  },
  setAbout: function(about) {
    return new Promise((resolve, reject) => {
      app
        .ref()
        .child("about")
        .set(about)
        .then(resolve)
        .then(reject);
    });
  }
};

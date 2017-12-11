import { app, storage } from "../firebase/firebase";

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
  setAbout: function({ title, content, image }) {
    return new Promise((resolve, reject) => {
      Promise.all([
        app
          .ref()
          .child("about")
          .set({ title, content }),
        storage
          .child("about/image.jpg")
          .put(image)
      ])
        .then(values => {
          resolve();
        })
        .catch(reject);
    });
  }
};

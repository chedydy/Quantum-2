import { app, storage } from "../firebase/firebase";
const aboutRef = app.ref().child("about");

export default {
  getAbout: function() {
    return new Promise((resolve, reject) => {
      aboutRef.once(
        "value",
        snapshot => resolve(snapshot.val()),
        error => reject(error)
      );
    });
  },
  setAbout: function({ title, content, image }) {
    return new Promise((resolve, reject) => {
      Promise.all([
        aboutRef.set({ title, content }),
        storage.child("about/image.jpg").put(image)
      ])
        .then(values => {
          resolve();
        })
        .catch(reject);
    });
  }
};

import { app, storage } from "../firebase/firebase";
const aboutRef = app.ref().child("about");
const AboutService = {
  getAbout: function(callback) {
    aboutRef.on(
      "value",
      snapshot => callback(snapshot.val()),
      error => {
        console.log(error);
      }
    );
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
export { AboutService };

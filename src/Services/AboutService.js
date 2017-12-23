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
  setAbout: function({ title, content, image, imageUrl }) {
    return new Promise((resolve, reject) => {
      if (image) {
        storage
          .child("about/image.jpg")
          .put(image)
          .then(result => {
            aboutRef
              .set({ title, content, imageUrl: result.downloadURL })

              .then(values => {
                resolve();
              })
              .catch(reject);
          });
      } else {
        aboutRef
          .set({ title, content, imageUrl })
          .then(values => {
            resolve();
          })
          .catch(reject);
      }
    });
  }
};
export { AboutService };

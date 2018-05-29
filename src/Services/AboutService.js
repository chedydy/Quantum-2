import { app, storage } from "../firebase/firebase";
const aboutRef = app.ref().child("about");
function setAbout({ title, content, imageUrl, preview }) {
  return new Promise((resolve, reject) => {
    aboutRef
      .set({ title, content, imageUrl, preview })
      .then(values => {
        resolve();
      })
      .catch(reject);
  });
}
const AboutService = {
  get: () => {
    return new Promise((resolve, reject) => {
      aboutRef
        .once("value")
        .then(snapshot => resolve(snapshot.val()))
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  },
  set: setAbout,
  setWithImage: (about, image) => {
    return new Promise((resolve, reject) => {
      storage
        .child("about/image.jpg")
        .put(image)
        .then(result => {
          about.imageUrl = result.downloadURL;
          setAbout(about)
            .then(resolve)
            .catch(reject);
        });
    });
  }
};
export { AboutService };

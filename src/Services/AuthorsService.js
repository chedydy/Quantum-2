import { app, storage } from "../firebase/firebase";
const authorsRef = app.ref().child("authors");
function setAuthor(author) {
  return new Promise((resolve, reject) => {
    authorsRef
      .child(author.id)
      .set(author)
      .then(values => {
        resolve();
      })
      .catch(reject);
  });
}
const AuthorsService = {
  get: () => {
    return new Promise((resolve, reject) => {
      authorsRef
        .once("value")
        .then(snapshot => resolve(snapshot.val()))
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  },
  getById: id => {
    return new Promise((resolve, reject) => {
      authorsRef
        .child(id)
        .once("value")
        .then(snapshot => resolve(snapshot.val()))
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  },
  delete: id => {
    return new Promise((resolve, reject) => {
      authorsRef
        .child(id)
        .remove()
        .then(() => resolve())
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  },
  set: setAuthor,
  setWithImage: (author, image) => {
    return new Promise((resolve, reject) => {
      storage
        .child(`authors/${author.id}.jpg`)
        .put(image)
        .then(result => {
          author.imageUrl = result.downloadURL;
          setAuthor(author)
            .then(resolve)
            .catch(reject);
        });
    });
  }
};
export { AuthorsService };

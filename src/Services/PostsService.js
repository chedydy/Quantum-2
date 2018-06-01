import { app, storage } from "../firebase/firebase";

const postsRef = app.ref().child("posts");
const postsStorageRef = storage.child("posts");
const PostService = {
  getPost: function(id) {
    return new Promise((resolve, reject) => {
      postsRef
        .child(id)
        .once("value")
        .then(post => {
          resolve(post.val());
        })
        .catch(err => {
          console.log(err);
        });
    });
  },
  save: function(post) {
    return new Promise((resolve, reject) => {
      postsRef
        .child(post.id)
        .set(post)
        .then(() => {
          resolve();
        })
        .catch(reject);
    });
  },
  saveImage: function(id, image) {
    return new Promise((resolve, reject) => {
      postsStorageRef
        .child(`${id}.jpg`)
        .put(image)
        .then(result => {
          resolve(result.downloadURL);
        })
        .catch(reject);
    });
  },
  deletePost: function(id) {
    return new Promise((resolve, reject) => {
      Promise.all([
        postsRef.child(id).remove(),
        postsStorageRef
          .child(`${id}.jpg`)
          .delete()
          .catch(function(err) {
            console.error("err", err);
          })
      ])
        .then(values => {
          resolve();
        })
        .catch(reject);
    });
  }
};

export { PostService };

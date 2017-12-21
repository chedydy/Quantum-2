import { app, storage } from "../firebase/firebase";
import _ from "lodash";

const postsRef = app.ref().child("posts");
const postsStorageRef = storage.child("posts");
const PostService = {
  getPost: function(id) {
    return new Promise((resolve, reject) => {
      Promise.all([
        postsRef.child(id).once("value"),
        postsStorageRef.child(`${id}.jpg`).getDownloadURL()
      ])
        .then(values => {
          const post = values[0].val();
          resolve({
            ...post,
            imageUrl: values[1]
          });
        })
        .catch(reject);
    });
  },
  updatePost: function({ id, content, image }) {
    return new Promise((resolve, reject) => {
      Promise.all([
        postsRef.child(id).set({ content, id }),
        image ? postsStorageRef.child(`${id}.jpg`).put(image) : undefined
      ])
        .then(values => {
          resolve();
        })
        .catch(reject);
    });
  },
  deletePost: function(id) {
    return new Promise((resolve, reject) => {
      Promise.all([
        postsRef.child(id).remove(),
        postsStorageRef.child(`${id}.jpg`).delete()
      ])
        .then(values => {
          resolve();
        })
        .catch(reject);
    });
  }
};

export { PostService };

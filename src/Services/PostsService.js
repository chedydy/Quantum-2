import { app } from "../firebase/firebase";
import uuid from "uuid/v4";
import _ from "lodash";

const postsRef = app.ref().child("posts");
const PostService= {
  subscribePreview: function(id, callback) {
    postsRef.child(id).on(
      "value",
      snapshot => callback(snapshot.val()),
      error => {
        console.log(error);
      }
    );
  },
  getPost: function(id) {
    return new Promise((resolve, reject) => {
      postsRef.child(id).once(
        "value",
        function(snapshot) {
          resolve(snapshot.val());
        },
        function(error) {
          reject(error);
        }
      );
    });
  },
  addPost: function(post) {
    const id = uuid();
    return postsRef.child(id).set({
      ...post,
      id: id
    });
  },
  updatePost: function(post) {
    return postsRef.child(post.id).set(post);
  }
};

export {PostService}

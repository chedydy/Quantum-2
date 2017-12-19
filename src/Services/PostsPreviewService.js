import _ from "lodash";
import { app } from "../firebase/firebase";
const postPreviewRef = app.ref().child("posts_preview");
const PostPreviewService = {
  subscribePreviews: function(callback) {
    postPreviewRef.on(
      "value",
      snapshot => {
        const previews = _.map(snapshot.val(), (val, id) => {
          return { ...val };
        });
        callback(previews);
      },
      error => {
        console.log(error);
      }
    );
  },
  subscribePreview: function(id, callback) {
    postPreviewRef.child(id).on(
      "value",
      snapshot => callback(snapshot.val()),
      error => {
        console.log(error);
      }
    );
  },
  getPreviews: function() {
    return new Promise((resolve, reject) => {
      postPreviewRef.once(
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

  getPreview: function(id) {
    return new Promise((resolve, reject) => {
      postPreviewRef.child(id).once("value", function(snapshot) {
        resolve(snapshot.val());
      });
    });
  },
  updatePreview: function(preview) {
    return postPreviewRef.child(preview.id).set(preview);
  }
};

export { PostPreviewService };

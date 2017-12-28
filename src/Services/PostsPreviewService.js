import _ from "lodash";
import { app } from "../firebase/firebase";
const postPreviewRef = app.ref().child("posts_preview");
const tagsRef = app.ref().child("tags");
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
  getByTags: function(tags) {
    return new Promise((resolve, reject) => {
      postPreviewRef.once("value", function(snapshot) {
        const previews = _.map(snapshot.val(), (val, id) => {
          return { ...val };
        });
        const filteredPreviews = [];
        for (let i = 0; i < tags.length; i++) {
          for (let j = 0; j < previews.length; j++) {
            if (
              previews[j].tags &&
              previews[j].tags[tags[i]] &&
              filteredPreviews.indexOf(previews[j]) === -1
            ) {
              filteredPreviews.push(previews[j]);
            }
          }
        }
        resolve(filteredPreviews);
      });
    });
  },
  getTags: function() {
    return new Promise((resolve, reject) => {
      tagsRef.once("value", function(snapshot) {
        resolve(snapshot.val());
      });
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
    const tags=_.mapKeys(preview.tags);
    tagsRef.update(tags);
    return postPreviewRef.child(preview.id).set(preview);
  },
  deletePreview: function(id) {
    return postPreviewRef.child(id).remove();
  }
};

export { PostPreviewService };

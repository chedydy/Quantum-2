import _ from "lodash";
import { app } from "../firebase/firebase";
const postPreviewRef = app.ref().child("posts_preview");
const tagsRef = app.ref().child("tags");
function searchText(object, text) {
  for (let key in object) {
    if (key !== "authorLink") {
      const value = object[key];
      if (
        (typeof value === "string" || value instanceof String) &&
        value.toLowerCase().indexOf(text.toLowerCase()) !== -1
      ) {
        return true;
      }
    }
  }
}
const PostPreviewService = {
  getPreviewsLimitTo(number) {
    return new Promise(resolve => {
      postPreviewRef
        .orderByChild("publishDate")
        .limitToLast(number)
        .once("value")
        .then(snapshot => {
          resolve(
            _.map(snapshot.val(), (val, id) => {
              return { ...val };
            })
          );
        });
    });
  },
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
  getPreviews() {
    return new Promise((resolve, reject) => {
      postPreviewRef
        .once("value")
        .then(snapshot => {
          resolve(snapshot.val());
        })
        .catch(reject);
    });
  },
  filterByTags: function(posts, tags) {
    const previews = posts.slice();
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
    return filteredPreviews;
  },
  filterByText: function(posts, text) {
    const previews = posts.slice();
    const filteredPreviews = [];
    for (let j = 0; j < previews.length; j++) {
      if (
        searchText(previews[j], text) &&
        filteredPreviews.indexOf(previews[j]) === -1
      ) {
        filteredPreviews.push(previews[j]);
      }
    }
    return filteredPreviews;
  },
  getTags: function() {
    return new Promise((resolve, reject) => {
      tagsRef.once("value", function(snapshot) {
        const tags = _.map(snapshot.val(), (val, id) => {
          return { label: id, value: id };
        });
        resolve(tags);
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
    // const tags = _.mapKeys(preview.tags);
    // tagsRef.update(tags);
    delete preview.tags;
    return postPreviewRef.child(preview.id).set(preview);
  },
  deletePreview: function(id) {
    return postPreviewRef.child(id).remove();
  }
};

export { PostPreviewService };

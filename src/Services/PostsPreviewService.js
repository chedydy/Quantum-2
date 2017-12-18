import {app} from '../firebase/firebase';
const postPreviewRef= app.ref().child('posts_preview');
export default {

  getPreviews : function () {
    return new Promise((resolve, reject) => {
      postPreviewRef
        .once('value', function (snapshot) {
          resolve(snapshot.val());
        }, function (error) {
          reject(error);
        })
    });
  },

  getPreview : function (id) {
    return new Promise((resolve, reject) => {
      postPreviewRef.child(id)
        .once('value', function (snapshot) {
          resolve(snapshot.val());
        })
    });
  },
  updatePreview: function(preview) {
    return postPreviewRef.child(preview.id).set(preview);
  }
};

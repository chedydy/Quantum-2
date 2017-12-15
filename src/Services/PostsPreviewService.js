import {app} from '../firebase/firebase';

export default {

  getPreviews : function () {
    return new Promise((resolve, reject) => {
      app.ref()
        .child('posts_preview')
        .once('value', function (snapshot) {
          resolve(snapshot.val());
        }, function (error) {
          reject(error);
        })
    });
  },

  getPreview : function (id) {
    return new Promise((resolve, reject) => {
      app.ref()
        .child('posts_preview')
        .once('value', function (snapshot) {
          resolve(snapshot.val().child(id));
        })
    });
  }
};

import { provider, auth } from "../firebase/firebase";

export default {
  login: function() {
    return new Promise((resolve, reject) => {
      auth()
        .setPersistence(auth.Auth.Persistence.LOCAL)
        .then(function() {
          auth()
            .signInWithPopup(provider)
            .then(result => {
              console.log(result);
              resolve(result.user);
            })
            .catch(reject);
        })
        .catch(reject);
    });
  },
  logout: function() {
    return new Promise((resolve, reject) => {
      auth()
        .signOut()
        .then(result => {
          console.log(result);
          resolve(result.user);
        })
        .catch(reject);
    });
  },
  isAuthenticated: function() {
    var user = auth().currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  },
  getUser: function() {
    var user = auth().currentUser;
    return user;
  }
};

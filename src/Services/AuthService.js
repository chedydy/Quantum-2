import { provider, auth, app } from "../firebase/firebase";
const usersRef = app.ref().child("user_groups");
const AuthService = {
  login: function() {
    return new Promise((resolve, reject) => {
      auth()
        .setPersistence(auth.Auth.Persistence.LOCAL)
        .then(function() {
          auth()
            .signInWithPopup(provider)
            .then(result => {
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
          resolve(result);
        })
        .catch(reject);
    });
  },
  isAuthenticated: function() {
    var user = this.getUser();
    if (user) {
      return true;
    } else {
      return false;
    }
  },
  isAdmin: () => {
    return new Promise((resolve, reject) => {
      usersRef
        .child(auth().currentUser.uid)
        .once("value")
        .then(() => resolve())
        .catch(() => reject());
    });
  },
  checkAuthState: function() {
    return new Promise((resolve, reject) => {
      auth().onAuthStateChanged(function() {
        resolve();
      });
    });
  },
  getUser: function() {
    var user = auth().currentUser;
    return user;
  }
};

export { AuthService };

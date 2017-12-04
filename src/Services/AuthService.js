import { provider, auth } from "../firebase/firebase";

export default {
  login: function() {
    return new Promise((resolve, reject) => {
      auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log(result);
          resolve(result.user);
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
  }
  
};

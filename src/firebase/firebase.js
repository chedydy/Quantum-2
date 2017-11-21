import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC_xG5waNyabaBUD94z3Od3MVD768AoJ0M",
    authDomain: "quantumcivilisationwebsite.firebaseapp.com",
    databaseURL: "https://quantumcivilisationwebsite.firebaseio.com",
    projectId: "quantumcivilisationwebsite",
    storageBucket: "quantumcivilisationwebsite.appspot.com",
    messagingSenderId: "385241895231"
  };
  
const app = firebase.initializeApp(config);
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {app, facebookAuthProvider};
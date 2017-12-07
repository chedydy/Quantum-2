import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC_xG5waNyabaBUD94z3Od3MVD768AoJ0M",
    authDomain: "quantumcivilisationwebsite.firebaseapp.com",
    databaseURL: "https://quantumcivilisationwebsite.firebaseio.com",
    projectId: "quantumcivilisationwebsite",
    storageBucket: "quantumcivilisationwebsite.appspot.com",
    messagingSenderId: "385241895231"
  };
  
firebase.initializeApp(config);
export const app = firebase.database()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider()

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
     apiKey: "AIzaSyCD_P3K8yc7g5BuKcy26gdFUWD2sYTbaGk",
  authDomain: "clone-e4d1f.firebaseapp.com",
  databaseURL: "https://clone-e4d1f.firebaseio.com",
  projectId: "clone-e4d1f",
  storageBucket: "clone-e4d1f.appspot.com",
  messagingSenderId: "548308296080",
  appId: "1:548308296080:web:c7d3415307bbfec4c15315",
  measurementId: "G-HFZ0CH9CJE"
});

const auth = firebase.auth();

export { auth };
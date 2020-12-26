import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAVVxcHubv9wwqrYq7g5xRYUH9REThNYEY",
  authDomain: "book-santa-18595.firebaseapp.com",
  databaseURL: "https://book-santa-18595.firebaseio.com",
  projectId: "book-santa-18595",
  storageBucket: "book-santa-18595.appspot.com",
  messagingSenderId: "1034052262448",
  appId: "1:1034052262448:web:470830b275c8ec874d2bf5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

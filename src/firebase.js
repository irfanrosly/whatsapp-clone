import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhJbiVbsxPkC5dj3A8bcjI0aX_1eUbvr4",
  authDomain: "whats-app-clone-dba22.firebaseapp.com",
  projectId: "whats-app-clone-dba22",
  storageBucket: "whats-app-clone-dba22.appspot.com",
  messagingSenderId: "652709843668",
  appId: "1:652709843668:web:57a9e3357bb10dab64e141",
  measurementId: "G-GW1KKFCCQW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

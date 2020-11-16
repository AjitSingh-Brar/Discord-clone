import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMsNcbx5bwdLH4TEd1HkN_JI6DNriQuBQ",
  authDomain: "discord-clone-yt-547d2.firebaseapp.com",
  databaseURL: "https://discord-clone-yt-547d2.firebaseio.com",
  projectId: "discord-clone-yt-547d2",
  storageBucket: "discord-clone-yt-547d2.appspot.com",
  messagingSenderId: "1065134992502",
  appId: "1:1065134992502:web:be35676e21805b7f5b0357",
  measurementId: "G-LBBX895PPG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

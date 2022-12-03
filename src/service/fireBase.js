import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDYFqKjB9ALSZxD4w2PWdWNetUaNRXjg8M",
  authDomain: "trello-777t.firebaseapp.com",
  projectId: "trello-777t",
  storageBucket: "trello-777t.appspot.com",
  messagingSenderId: "540742605381",
  appId: "1:540742605381:web:2d0c47e4e89386d1a2e12c",
};
export const app = firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
//
// export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

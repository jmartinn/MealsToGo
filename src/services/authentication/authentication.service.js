import * as firebase from "firebase";

export const loginRequest = () => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};

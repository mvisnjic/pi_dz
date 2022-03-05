import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHKwLbAGbpBGezPDNr2dPHo5-OVr7R2QU",
  authDomain: "fipugram-6eb14.firebaseapp.com",
  projectId: "fipugram-6eb14",
  storageBucket: "fipugram-6eb14.appspot.com",
  messagingSenderId: "868386321847",
  appId: "1:868386321847:web:38bb5f8f819209fe9de432",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();

export { firebase, db, storage };

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAiWoU3Jt3JtZzDiPKbgCPk-eyh9rHTCDI",
  authDomain: "net-ninja-mario-66283.firebaseapp.com",
  databaseURL: "https://net-ninja-mario-66283.firebaseio.com",
  projectId: "net-ninja-mario-66283",
  storageBucket: "net-ninja-mario-66283.appspot.com",
  messagingSenderId: "559649503664",
  appId: "1:559649503664:web:bdc1dbea16a9ce7e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().setting({ timestampsInSnapshots: true });

export default firebase;

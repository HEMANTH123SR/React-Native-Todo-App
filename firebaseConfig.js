import { initializeApp } from "firebase/app";

import {getFireStore} from "firebase/firebase-firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCr_6KOuJt4OCPo6qZ6TtLEduj3Xus4z6Q",
  authDomain: "todo-react-native-aba54.firebaseapp.com",
  projectId: "todo-react-native-aba54",
  storageBucket: "todo-react-native-aba54.appspot.com",
  messagingSenderId: "639799389268",
  appId: "1:639799389268:web:8871fcd712cbdee56811c1"
};

// Initialize Firebase
export const Firebase_APP= initializeApp(firebaseConfig);
export const Firebase_Db=getFireStore(Firebase_APP);
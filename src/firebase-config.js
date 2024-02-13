// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from"firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE_s-Nk9XTVH7d0Da4XOvrSfW3gB4PKLo",
  authDomain: "eduteacher-c74e1.firebaseapp.com",
  projectId: "eduteacher-c74e1",
  storageBucket: "eduteacher-c74e1.appspot.com",
  messagingSenderId: "310056016511",
  appId: "1:310056016511:web:8698e48e9aae04b1d6bd4a"
};

const firebaseConfig2 ={
  apiKey: "AIzaSyAPQTWoS2Rc7Py3_gWV14IS8EmJdrJ5NQI",
  authDomain: "eduscribe-college.firebaseapp.com",
  projectId: "eduscribe-college",
  storageBucket: "eduscribe-college.appspot.com",
  messagingSenderId: "876768472440",
  appId: "1:876768472440:web:341d5e96dc5ce928346c8d"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig,'app1');
const app2= initializeApp(firebaseConfig2,'app2');
export const db=getFirestore(app);
export const db2=getFirestore(app2);
export const FileDb=getStorage(app2);
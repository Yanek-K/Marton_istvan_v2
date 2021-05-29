import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";

export const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
//

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import { Firestore } from "firebase/firestore";

import firebaseConfig from "./firebaseConfig";

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export default {
    googleLogar: async ()=>{
        const provider =  new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().singnWithPopup(provider);
        return result;
    }
}
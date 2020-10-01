import * as firebase from 'firebase/app'
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCn_w9pzE8yERilWZX31rFVq2UhlO7fp9s",
    authDomain: "reactive-market.firebaseapp.com",
    databaseURL: "https://reactive-market.firebaseio.com",
    projectId: "reactive-market",
    storageBucket: "reactive-market.appspot.com",
    messagingSenderId: "135455056914",
    appId: "1:135455056914:web:02b187145f28df6166e4cb"
})

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}
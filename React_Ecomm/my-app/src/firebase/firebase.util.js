import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCKtZ8TXeKM3ak2yHQR-RjYbqL4se-xDsA",
    authDomain: "crwn-db-8acb4.firebaseapp.com",
    projectId: "crwn-db-8acb4",
    storageBucket: "crwn-db-8acb4.appspot.com",
    messagingSenderId: "999365625549",
    appId: "1:999365625549:web:f29536234c758e2b7d8b84",
    measurementId: "G-ZB36428SPE"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

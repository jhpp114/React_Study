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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        console.log("It did return");
        return;
    }
    // if exist then query in firestore to check if the user is already in firestore db
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    // if user does not exist
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log("ERROR: User Create", error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

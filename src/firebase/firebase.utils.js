import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCzimijnlh8k7cxycIqBgn5303IOyFrEP8",
    authDomain: "ecommerce-clothing-17bb5.firebaseapp.com",
    databaseURL: "https://ecommerce-clothing-17bb5.firebaseio.com",
    projectId: "ecommerce-clothing-17bb5",
    storageBucket: "ecommerce-clothing-17bb5.appspot.com",
    messagingSenderId: "436342231265",
    appId: "1:436342231265:web:0fdd1ce9f2055f3d25e7a0",
    measurementId: "G-TK51VWF75Y"
  };

  export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if (!userAuth) return;

    // const userRef = firestore.doc('users/41dqqrgb');
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exist){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };  

  firebase.initializeApp(config );

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signinWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

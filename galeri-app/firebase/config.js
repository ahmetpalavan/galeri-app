import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyDsGvA35iHIefhUDJJq3jWsLd08QssbNug",
    authDomain: "modern-react-app-5ee64.firebaseapp.com",
    projectId: "modern-react-app-5ee64",
    storageBucket: "modern-react-app-5ee64.appspot.com",
    messagingSenderId: "727371863945",
    appId: "1:727371863945:web:bea385e38b3989bfff7358",
    measurementId: "G-F0G78ECDBL"
};

initializeApp(firebaseConfig);
const db=getFirestore();
const storage=getStorage();

export {db,storage};


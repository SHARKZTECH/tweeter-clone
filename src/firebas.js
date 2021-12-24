import {initializeApp} from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJPe7-9n6-ilHCdUxYw8ME7CkFvv0UZnw",
    authDomain: "tweeter-fc663.firebaseapp.com",
    databaseURL: "https://tweeter-fc663-default-rtdb.firebaseio.com",
    projectId: "tweeter-fc663",
    storageBucket: "tweeter-fc663.appspot.com",
    messagingSenderId: "980281146216",
    appId: "1:980281146216:web:089be6d1315977dd1f74dd",
    measurementId: "G-CHL6EGCK3N"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


export default db;
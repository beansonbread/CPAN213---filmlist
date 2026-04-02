import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAlCASUJtH81893tn99MD8vfOmFX6lkhRQ",
  authDomain: "filmlist-feb36.firebaseapp.com",
  projectId: "filmlist-feb36",
  storageBucket: "filmlist-feb36.firebasestorage.app",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
  

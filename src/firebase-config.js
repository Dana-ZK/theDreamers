import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID

  apiKey: "AIzaSyDFiYeIFFgu6RSMaMbXQGJennwt7mOYb-Q",
  authDomain: "thedreamers-60cfd.firebaseapp.com",
  databaseURL: "https://thedreamers-60cfd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "thedreamers-60cfd",
  storageBucket: "thedreamers-60cfd.appspot.com",
  messagingSenderId: "778564929523",
  appId: "1:778564929523:web:483c69beb45ff8fa79b486"
};

const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
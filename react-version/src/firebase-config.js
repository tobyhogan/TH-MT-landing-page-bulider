// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLVPW07AvfnXfBNBlyCRhKuh6jm7qa3hk",
  authDomain: "th-mh-landing-page-builder.firebaseapp.com",
  projectId: "th-mh-landing-page-builder",
  storageBucket: "th-mh-landing-page-builder.appspot.com",
  messagingSenderId: "657749554571",
  appId: "1:657749554571:web:0c69016e3822d716972b8e",
  measurementId: "G-VGFMMWLFCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
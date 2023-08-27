import './assets/main.css'

import { createApp, onMounted, ref } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";


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
initializeApp(firebaseConfig);

const app = createApp(App)
//const app = initializeApp(firebaseConfig);

//export const auth = getAuth(app);
//export const provider = new GoogleAuthProvider();
//export const db = getFirestore(app);

app.use(createPinia())
app.use(router)

app.mount('#app')

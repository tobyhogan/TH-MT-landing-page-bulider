import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

app.use(createPinia())
app.use(router)

app.mount('#app')

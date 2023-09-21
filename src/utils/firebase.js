import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTRXWhzuVbh6UZIj9sAD19EZ46SHaYNYQ",
  authDomain: "fotodrop-diana-nnaemeka-2023.firebaseapp.com",
  projectId: "fotodrop-diana-nnaemeka-2023",
  storageBucket: "fotodrop-diana-nnaemeka-2023.appspot.com",
  messagingSenderId: "1035989234049",
  appId: "1:1035989234049:web:487036de1e5f92cf96b880",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
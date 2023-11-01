import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAWgZa1yi2sSASt9AjmBMu0GDenFyudLyo",
  authDomain: "reactecommerce-b55b9.firebaseapp.com",
  projectId: "reactecommerce-b55b9",
  storageBucket: "reactecommerce-b55b9.appspot.com",
  messagingSenderId: "306212613175",
  appId: "1:306212613175:web:36102fd3d8a08d89fc63b2"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB,auth};
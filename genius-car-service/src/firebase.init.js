// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyD6_uMIEYEtvJQFnEBLUFaAVe8JX4hrqcI",
//   authDomain: "genius-car-service-227c9.firebaseapp.com",
//   projectId: "genius-car-service-227c9",
//   storageBucket: "genius-car-service-227c9.appspot.com",
//   messagingSenderId: "203583857051",
//   appId: "1:203583857051:web:11716d5abe1fe8ba70013e"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

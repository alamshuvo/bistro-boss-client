// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey:import.meta.env.VITE_apiKey,
    authDomain:import.meta.env.VITE_authDomain,
    projectId:import.meta.env.VITE_projectId,
    storageBucket:import.meta.env.VITE_storageBucket,
    messagingSenderId:import.meta.env.VITE_messagingSenderId,
    appId:import.meta.env.VITE_appId
  };
// const firebaseConfig = {
//     apiKey: "AIzaSyAmglrv1kkTmNak0gHKg97hzOmTK7lzYVw",
//     authDomain: "bistro-boss-23d71.firebaseapp.com",
//     projectId: "bistro-boss-23d71",
//     storageBucket: "bistro-boss-23d71.appspot.com",
//     messagingSenderId: "631400848850",
//     appId: "1:631400848850:web:9f4d3966b01e87a9bd3c0b"
//   };

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app
 
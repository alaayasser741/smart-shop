/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCnTC47oqDNLnU1FXz8w7f24Rec71zQwK4',
  authDomain: 'smart-shop-47dab.firebaseapp.com',
  projectId: 'smart-shop-47dab',
  storageBucket: 'smart-shop-47dab.appspot.com',
  messagingSenderId: '462556742810',
  appId: '1:462556742810:web:bf253d20cf8c88c10d8b23',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

import React from 'react';
import firebase from 'firebase';

// firestore database keyauthorization details 
const FireBaseContactForm = firebase.initializeApp({
  apiKey: "AIzaSyAD3TSb-Kry2m9gEFeCv0PYcVE4S-cK1O0",
  authDomain: "portfoliosite-e2f31.firebaseapp.com",
  projectId: "portfoliosite-e2f31",
  storageBucket: "portfoliosite-e2f31.appspot.com",
  messagingSenderId: "521806042252",
  appId: "1:521806042252:web:b65b8e75b08f970ad397a9"
});

const dataBaseContact = FireBaseContactForm.firestore();

export { dataBaseContact };




import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyDvd7ML2qT9L6VG2acFiP-1MFJglPjrgZE",
    authDomain: "bt3103wk8-17460.firebaseapp.com",
    databaseURL: "https://bt3103wk8-17460.firebaseio.com",
    projectId: "bt3103wk8-17460",
    storageBucket: "bt3103wk8-17460.appspot.com",
    messagingSenderId: "16312163534",
    appId: "1:16312163534:web:339e9e533895ca1f4a049f",
    measurementId: "G-LM2CFKFHXR"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
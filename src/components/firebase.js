import firebase from 'firebase/app';
var firebaseConfig = {
  apiKey: "AIzaSyBHUTVBoANpK0Ddlbbp0pV7gi9RGIEOkAM",
  authDomain: "react-jhon.firebaseapp.com",
  databaseURL: "https://react-jhon.firebaseio.com",
  projectId: "react-jhon",
  storageBucket: "react-jhon.appspot.com",
  messagingSenderId: "278707905353",
  appId: "1:278707905353:web:e100b69cd0809a209ab098",
  measurementId: "G-Y3XH8K52TH"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export  default fire;
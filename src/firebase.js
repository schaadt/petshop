import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyD248Rc6gv7zqldsO__R27MDyEqB-7rMQI",
    authDomain: "petstore-da983.firebaseapp.com",
    databaseURL: "https://petstore-da983.firebaseio.com",
    projectId: "petstore-da983",
    storageBucket: "petstore-da983.appspot.com",
    messagingSenderId: "826772162050",
    appId: "1:826772162050:web:42fcc7dab7b57534b9491b"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);




export const db = firebase.firestore()
export const dbAdminProduct = db.collection('AdminItems');
export const dbOrders = db.collection('OrderItems');

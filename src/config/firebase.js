import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAHtcis1LTGy4FVO06M_HOY-mzIlqxMQto",
    authDomain: "chatappbyakif.firebaseapp.com",
    databaseURL: "https://chatappbyakif.firebaseio.com",
    projectId: "chatappbyakif",
    storageBucket: "chatappbyakif.appspot.com",
    messagingSenderId: "516465246737",
    appId: "1:516465246737:web:fc1409fc3acdc27cfd67b0",
    measurementId: "G-15E3NB1ZDQ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

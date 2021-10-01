import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDs7pzWOAJDkz0QPRMDQKi-5amRrJt7m60",
    authDomain: "login-reactjs-4bcad.firebaseapp.com",
    projectId: "login-reactjs-4bcad",
    storageBucket: "login-reactjs-4bcad.appspot.com",
    messagingSenderId: "966976147133",
    appId: "1:966976147133:web:d4ce87a5a0ab65b17531d4",
    measurementId: "G-EFSHBS6GD8"
};

const fire = firebase.initializeApp(config);
export default fire;
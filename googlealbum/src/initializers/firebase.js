import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBllzdgmxTia-6AFMtwhS16ym4s0xwTzAs",
    authDomain: "react-album-8f492.firebaseapp.com",
    databaseURL: "https://react-album-8f492.firebaseio.com",
    projectId: "react-album-8f492",
    storageBucket: "react-album-8f492.appspot.com",
    messagingSenderId: "947830923591"
};

firebase.initializeApp(config);

export default firebase;
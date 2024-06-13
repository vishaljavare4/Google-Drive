import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDAEmAxolGGuUXGYvnDBeUohgmyHc-Yt5A",
    authDomain: "drive-geekster.firebaseapp.com",
    projectId: "drive-geekster",
    storageBucket: "drive-geekster.appspot.com",
    messagingSenderId: "54722455757",
    appId: "1:54722455757:web:54975a1fb3c720cc6a2184"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }
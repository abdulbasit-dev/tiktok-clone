import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDtmY7CeiJLGwWi84p0aZbhcebtNT8_xPU',
  authDomain: 'tiktok-clone-7c572.firebaseapp.com',
  databaseURL: 'https://tiktok-clone-7c572.firebaseio.com',
  projectId: 'tiktok-clone-7c572',
  storageBucket: 'tiktok-clone-7c572.appspot.com',
  messagingSenderId: '787257587260',
  appId: '1:787257587260:web:6060a8b6a86c1e91f7f539',
  measurementId: 'G-W4BBR9P0DF',
})

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const storage = firebaseApp.storage()

export {db, auth, storage}

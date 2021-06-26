import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyA-YBuOWQVqkv2lPtHdPl-EGz2sJ21Vyvk',
  authDomain: 'react-awesome-chat.firebaseapp.com',
  projectId: 'react-awesome-chat',
  storageBucket: 'react-awesome-chat.appspot.com',
  messagingSenderId: '350146203377',
  appId: '1:350146203377:web:93568a7013fbb22d2d2350',
})

export const auth = firebase.auth()
export const firestore = firebase.firestore()

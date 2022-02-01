import { initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB3xR4Dm6m-QicgadHFGKkADYhgAz3NLj4",
  authDomain: "travel-forum-7a5c5.firebaseapp.com",
  projectId: "travel-forum-7a5c5",
  storageBucket: "travel-forum-7a5c5.appspot.com",
  messagingSenderId: "597439650025",
  appId: "1:597439650025:web:755ab6fba27a7704ee7878"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const firestore = getFirestore(app)
export default app;
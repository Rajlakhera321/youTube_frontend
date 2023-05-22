import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBQAy55KaWNhkV56S0_ljdpR4gDkyQxFYw",
  authDomain: "video-866a7.firebaseapp.com",
  projectId: "video-866a7",
  storageBucket: "video-866a7.appspot.com",
  messagingSenderId: "21616293812",
  appId: "1:21616293812:web:1fae06361eeab66d1064e1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
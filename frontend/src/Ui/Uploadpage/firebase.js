// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB3_Jj4BZuZAETym6CLh4J27r_vU8tDn4M",
  authDomain: "wallpaper-be058.firebaseapp.com",
  projectId: "wallpaper-be058",
  storageBucket: "wallpaper-be058.appspot.com",
  messagingSenderId: "293989011536",
  appId: "1:293989011536:web:74bb7e96046a0f1bc40155",
  measurementId: "G-R8Z7ZB1KD8",
};
// Initialize Firebase
// const storageRef = firebase.storage();
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

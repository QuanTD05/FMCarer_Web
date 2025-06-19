// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxyaFIM3Ut8syuwNFng0YyYlrFbqVY450",
  authDomain: "sof102.firebaseapp.com",
  databaseURL: "https://sof102-default-rtdb.firebaseio.com",
  projectId: "sof102",
  storageBucket: "sof102.appspot.com",
  messagingSenderId: "810054011446",
  appId: "1:810054011446:web:c852a9f4cf0ab6dd756697",
  measurementId: "G-77NKLSP61K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKJnqn-vVCMXaBH0sjekgJW6ZEFJomrw8",
    authDomain: "mejbah-n-mind.firebaseapp.com",
    projectId: "mejbah-n-mind",
    storageBucket: "mejbah-n-mind.appspot.com",
    messagingSenderId: "837251878233",
    appId: "1:837251878233:web:ecbc14ff093ff8c34d1048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
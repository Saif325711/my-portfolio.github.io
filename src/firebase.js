import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPi19i0LTAcejfLV5dH3WyDAGVWIwsiOo",
    authDomain: "myportfolio-f2822.firebaseapp.com",
    projectId: "myportfolio-f2822",
    storageBucket: "myportfolio-f2822.firebasestorage.app",
    messagingSenderId: "415799168520",
    appId: "1:415799168520:web:f5d6d270ee69eeb3954bbd",
    measurementId: "G-JWEV02EG7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };

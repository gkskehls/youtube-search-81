// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5Stq1XAvE7cH3R5ud5ZkJkkgDsOIevj4",
    authDomain: "search-81.firebaseapp.com",
    projectId: "search-81",
    storageBucket: "search-81.firebasestorage.app",
    messagingSenderId: "509652586906",
    appId: "1:509652586906:web:3b207b7029952f37926a23",
    measurementId: "G-FVBY6H5E6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase Console > Project settings > Your apps > Web app theke ei config ta copy kore boshan
const firebaseConfig = {
  apiKey: "AIzaSyCR9sZyepxKMOc1n71r8jmxVSIFuAGLSj0",
  authDomain: "surgick-c92f2.firebaseapp.com",
  projectId: "surgick-c92f2",
  storageBucket: "surgick-c92f2.firebasestorage.app",
  messagingSenderId: "233797037313",
  appId: "1:233797037313:web:12ff4c0f3102757f5e3f00"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

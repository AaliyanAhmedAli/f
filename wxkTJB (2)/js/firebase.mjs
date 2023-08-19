import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyDVXEGWV6axNKaPuKBQFCVAHQcHzIHf2BE",
    authDomain: "hackathon-21048.firebaseapp.com",
    projectId: "hackathon-21048",
    storageBucket: "hackathon-21048.appspot.com",
    messagingSenderId: "973945114064",
    appId: "1:973945114064:web:f02ad63c66bafb13847dd5",
    measurementId: "G-QTZJ5MTFEE"
  };

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const storage=getStorage(app);
export {app,auth,db,storage};